package com.api.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.api.model.Tarjeta;

@Repository
public class TarjetaDAOImpl implements TarjetaDAO{

	@Autowired
	private SessionFactory sessionFactory; 
	
	@Override
	public long save(Tarjeta tarjeta) {
		sessionFactory.getCurrentSession().save(tarjeta);
		return tarjeta.getId();
	}

	@Override
	public Tarjeta get(long id) {
		return sessionFactory.getCurrentSession().get(Tarjeta.class,id);
	}

	@Override
	public List<Tarjeta> list() {
		List<Tarjeta> lista = sessionFactory.getCurrentSession().createQuery("from Tarjeta").list();
		return lista;
	}

	@Override
	public void update(long id, Tarjeta tarjeta) {
		Session session = sessionFactory.getCurrentSession();
		Tarjeta oldTarjeta = session.byId(Tarjeta.class).load(id);
		oldTarjeta.setId_cliente(tarjeta.getId_cliente());
		oldTarjeta.setNumero(tarjeta.getNumero());
		oldTarjeta.setSaldo(tarjeta.getSaldo());
		oldTarjeta.setTipo(tarjeta.getTipo());
		session.flush();
	}

	@Override
	public void delete(long id) {
		Tarjeta tarjeta = sessionFactory.getCurrentSession().byId(Tarjeta.class).load(id);
		sessionFactory.getCurrentSession().delete(tarjeta);
	}

}
