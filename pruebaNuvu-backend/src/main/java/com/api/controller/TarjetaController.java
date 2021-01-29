package com.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.model.Tarjeta;
import com.api.service.TarjetaService;

@RestController
public class TarjetaController {
	
	@Autowired
	private TarjetaService tarjetaService;
	
	@GetMapping("/api/getAllTarjetas")	
	public ResponseEntity<?> getAll(){
		try {
			List<Tarjeta> lista = tarjetaService.list();
			return ResponseEntity.ok().body(lista);
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}
	
	@PostMapping("/api/tarjeta")	
	public ResponseEntity<?> save(@RequestBody Tarjeta tarjeta){
        try {
        	long id = tarjetaService.save(tarjeta);
    		return ResponseEntity.ok().body("Inserción Correcta, id:"+id);
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}
	
	@GetMapping("/api/tarjeta/{id}")	
	public ResponseEntity<?> get(@PathVariable("id") long id){
        try {
        	Tarjeta tarjeta = tarjetaService.get(id);
    		return ResponseEntity.ok().body(tarjeta);
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}
	
	@PutMapping("/api/tarjeta/{id}")	
	public ResponseEntity<?> update(@RequestBody Tarjeta tarjeta, @PathVariable("id") long id){
        try {
        	tarjetaService.update(id,tarjeta);
    		return ResponseEntity.ok().body("Actualización Correcta");
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}
	
	@DeleteMapping("/api/tarjeta/{id}")	
	public ResponseEntity<?> delete(@PathVariable("id") long id){
        try {
        	tarjetaService.detele(id);
    		return ResponseEntity.ok().body("Eliminación exitosa");
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}

}
