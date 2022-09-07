package com.newdsmeta.newdsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newdsmeta.newdsmeta.entities.Sale;
import com.newdsmeta.newdsmeta.repository.SaleRepository;

@Service
public class SaleService {
	
	
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
	
	
}
