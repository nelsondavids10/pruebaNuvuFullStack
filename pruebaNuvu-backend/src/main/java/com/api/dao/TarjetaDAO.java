package com.api.dao;

import java.util.List;

import com.api.model.Tarjeta;

public interface TarjetaDAO {
	
	//guardar tarjeta
	long save (Tarjeta tarjeta);
	
	//obtener tarjeta
	Tarjeta get(long id);
	
	//obtener todas las tarjetas
	List<Tarjeta>list();
	
	//actualizar tarjeta
	void update(long id, Tarjeta tarjeta);
	
	//eliminar tarjeta
	void delete(long id);
	

}
