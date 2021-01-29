package com.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.dao.ClienteDAO;
import com.api.model.Cliente;

@Service
@Transactional(readOnly=true)
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	private ClienteDAO clienteDAO; 
	
	@Override
	@Transactional
	public long save(Cliente cliente) {
		return clienteDAO.save(cliente);		
	}

	@Override
	@Transactional
	public Cliente get(long id) {		
		return clienteDAO.get(id);
	}

	@Override
	@Transactional
	public List<Cliente> list() {
		return clienteDAO.list();
	}

	@Override
	@Transactional
	public void update(long id, Cliente cliente) {
		clienteDAO.update(id, cliente);	
	}

	@Override
	@Transactional
	public void detele(long id) {
		clienteDAO.delete(id);	
	}

}
