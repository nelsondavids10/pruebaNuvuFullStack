package com.api.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ForeignKey;

@Entity(name="Tarjeta")
public class Tarjeta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String tipo; // CREDITO O DEBITO
	private String numero; // NUMERO DE TARJETA 
	private String saldo; // SALDO DE LA TARJETA
	private long id_cliente;
    
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getSaldo() {
		return saldo;
	}
	public void setSaldo(String saldo) {
		this.saldo = saldo;
	}
	public long getId_cliente() {
		return id_cliente;
	}
	public void setId_cliente(long id_cliente) {
		this.id_cliente = id_cliente;
	}
	@Override
	public String toString() {
		return "Tarjeta [id=" + id + ", tipo=" + tipo + ", numero=" + numero + ", saldo=" + saldo + ", id_cliente="
				+ id_cliente + "]";
	}
	
	
}
