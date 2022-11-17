package com.newdsmeta.newdsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;

import com.newdsmeta.newdsmeta.entities.Sale;
import com.newdsmeta.newdsmeta.repository.SaleRepository;

@Service
public class SaleService {
	
	
	
	@Autowired
	private SaleRepository repository;
	
	
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("") ? today.minusDays(365): LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today: LocalDate.parse(maxDate);
		
		return repository.findSales	(min, max, pageable);
	}
	
	public Page<Sale> searchName(String seller_name, Pageable pageable) {
	
			return repository.searchName(seller_name, pageable);
		}
	
	@Transactional
	public Sale insertSale(@RequestBody @Validated Sale sale) {
		
		return sale = repository.save(sale);
		
	}
	
	@Transactional
	public void saleDelete(Long id) {
		 repository.deleteById(id);
		
	}
	
}
