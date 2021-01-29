package com.api.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.api.model.Cliente;

@Repository
public class ClienteDAOImpl implements ClienteDAO{

	@Autowired
	private SessionFactory sessionFactory; 
	
	@Override
	public long save(Cliente cliente) {
		sessionFactory.getCurrentSession().save(cliente);
		return cliente.getId();
	}

	@Override
	public Cliente get(long id) {
		return sessionFactory.getCurrentSession().get(Cliente.class,id);
	}

	@Override
	public List<Cliente> list() {
		List<Cliente> lista = sessionFactory.getCurrentSession().createQuery("from Cliente").list();
		return lista;
	}

	@Override
	public void update(long id, Cliente cliente) {
		Session session = sessionFactory.getCurrentSession();
		Cliente oldCliente = session.byId(Cliente.class).load(id);
		oldCliente.setNombres(cliente.getNombres());
		oldCliente.setApellidos(cliente.getApellidos());
		oldCliente.setIdentificacion(cliente.getIdentificacion());
		oldCliente.setGenero(cliente.getGenero());
		session.flush();
	}

	@Override
	public void delete(long id) {
		Cliente cliente = sessionFactory.getCurrentSession().byId(Cliente.class).load(id);
		sessionFactory.getCurrentSession().delete(cliente);
	}

}
