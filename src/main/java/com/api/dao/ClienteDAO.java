package com.api.dao;

import java.util.List;

import com.api.model.Cliente;

public interface ClienteDAO {
	
	//guardar cliente
	long save (Cliente cliente);
	
	//obtener cliente
	Cliente get(long id);
	
	//obtener todos los clientes
	List<Cliente>list();
	
	//actualizar cliente
	void update(long id, Cliente cliente);
	
	//eliminar cliente
	void delete(long id);
	

}
