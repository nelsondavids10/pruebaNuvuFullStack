package com.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.dao.TarjetaDAO;
import com.api.model.Tarjeta;

@Service
@Transactional(readOnly=true)
public class TarjetaServiceImpl implements TarjetaService {

	@Autowired
	private TarjetaDAO tarjetaDAO; 
	
	@Override
	@Transactional
	public long save(Tarjeta tarjeta) {
		return tarjetaDAO.save(tarjeta);		
	}

	@Override
	@Transactional
	public Tarjeta get(long id) {		
		return tarjetaDAO.get(id);
	}

	@Override
	@Transactional
	public List<Tarjeta> list() {
		return tarjetaDAO.list();
	}

	@Override
	@Transactional
	public void update(long id, Tarjeta tarjeta) {
		tarjetaDAO.update(id, tarjeta);	
	}

	@Override
	@Transactional
	public void detele(long id) {
		tarjetaDAO.delete(id);	
	}

}
