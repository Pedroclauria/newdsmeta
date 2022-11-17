package com.newdsmeta.newdsmeta.controllers;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.newdsmeta.newdsmeta.entities.Sale;
import com.newdsmeta.newdsmeta.models.ResponseModel;
import com.newdsmeta.newdsmeta.services.SaleService;
import com.newdsmeta.newdsmeta.services.SmsService;

@RestController
@RequestMapping(value = "/insertsale", method = RequestMethod.POST)
public class InsertController {
	
	@Autowired
	private SaleService service;
	
	@Autowired
	private SmsService smsService;
	

	
	@GetMapping
	public ResponseModel insertSale(
			@RequestParam(value="name", defaultValue="") String name, 
			@RequestParam(value="date", defaultValue="") String date
			){

		if(name == null || name.isEmpty()) {
			ResponseModel response = new ResponseModel(null, "Error", false, "Algo de errado não esta certo");
			return response;
			
		}
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		LocalDate insertDate = date.equals("") ? today: LocalDate.parse(date);
		Sale sale = new Sale(name, 0, 0, 0.0, insertDate);
		service.insertSale(sale);
		String msg = ("Vendedor " + sale.getSellerName() + " inserido com sucesso");
		ResponseModel response = new ResponseModel(sale.getId(), "Success", true, msg);
		return response;
	}
	
	@GetMapping("/{id}/notification")
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id);
	}
	
	}
