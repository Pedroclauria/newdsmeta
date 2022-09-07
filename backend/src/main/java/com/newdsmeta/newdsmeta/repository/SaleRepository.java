package com.newdsmeta.newdsmeta.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.newdsmeta.newdsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, UUID>{

}
