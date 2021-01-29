import { Injectable } from '@angular/core';
import { Http } from '../shared/http-client/http-client';

@Injectable({
  providedIn: 'root'
})
export class ServicePragmaticService {
  

  constructor(private http: Http) { }

  getClientes() {
    return this.http.get('getAllClientes/').catch(error => this.http.catch(error));
  }

  getTiposIds() {
    return this.http.get('Identificaciones/').catch(error => this.http.catch(error));
  }

  postInsertCliente(cliente) {
    return this.http.post('cliente',cliente).catch(error => this.http.catch(error));
  }

  postDeleteCliente(id) {
    return this.http.delete('cliente/'+id).catch(error => this.http.catch(error));
  }

  getCliente(id) {
    return this.http.get('cliente/'+id).catch(error => this.http.catch(error));
  }

  putCliente(cliente) {
    return this.http.put('cliente/'+cliente.id,cliente).catch(error => this.http.catch(error));
  }

}
