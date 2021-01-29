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

import com.api.model.Cliente;
import com.api.service.ClienteService;

@RestController
public class ClienteController {
	
	@Autowired
	private ClienteService clienteService;
	
	@GetMapping("/api/getAllClientes")	
	public ResponseEntity<?> getAll(){
		try {
			List<Cliente> lista = clienteService.list();
			return ResponseEntity.ok().body(lista);
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}
	
	@PostMapping("/api/cliente")	
	public ResponseEntity<?> save(@RequestBody Cliente cliente){
        try {
        	long id = clienteService.save(cliente);
    		return ResponseEntity.ok().body("Inserción Correcta, id:"+id);
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}
	
	@GetMapping("/api/cliente/{id}")	
	public ResponseEntity<?> get(@PathVariable("id") long id){
        try {
        	Cliente cliente = clienteService.get(id);
    		return ResponseEntity.ok().body(cliente);
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}
	
	@PutMapping("/api/cliente/{id}")	
	public ResponseEntity<?> update(@RequestBody Cliente cliente, @PathVariable("id") long id){
        try {
        	clienteService.update(id,cliente);
    		return ResponseEntity.ok().body("Actualización Correcta");
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}
	
	@DeleteMapping("/api/cliente/{id}")	
	public ResponseEntity<?> delete(@PathVariable("id") long id){
        try {
        	clienteService.detele(id);
    		return ResponseEntity.ok().body("Eliminación exitosa");
		}
		catch(Exception e) {
			return ResponseEntity.ok().body("Error: " + e.getMessage());
		}		
	}

}
