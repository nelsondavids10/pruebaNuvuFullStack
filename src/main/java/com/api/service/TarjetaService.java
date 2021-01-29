package com.api.service;

import java.util.List;

import com.api.model.Tarjeta;

public interface TarjetaService {

	//guardar tarjeta
	long save (Tarjeta tarjeta);
	
	//obtener tarjeta
	Tarjeta get(long id);
		
	//obtener todos los tarjetas
	List<Tarjeta>list();
		
	//actualizar tarjeta
	void update(long id, Tarjeta tarjeta);
		
	//eliminar tarjeta
	void detele(long id);
	
}
