import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private listagemURL = "http://localhost:8080/lamppit/clientes/listar-todos";
  private salvarURL = "http://localhost:8080/lamppit/clientes/salvar-cliente";
  private buscarPorIdURL = "http://localhost:8080/lamppit/clientes/buscar-por-id?id="
  private atualizarURL = "http://localhost:8080/lamppit/clientes/atualizar-cliente"
  private deletarURL = "http://localhost:8080/lamppit/clientes/excluir-por-id?id="

  constructor(private httpClient: HttpClient) { }

  getListaClientes() : Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.listagemURL);
  }

  cadastrarCliente(cliente: Cliente): Observable<Object>{
    return this.httpClient.post(this.salvarURL, cliente);
  }

  buscarClientePorId(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.buscarPorIdURL+id);
  }

  updateCliente(id:number, cliente: Cliente): Observable<Object>{
    return this.httpClient.put(this.atualizarURL, cliente);
  }

  deleteCliente(id: number): Observable<Object>{
    return this.httpClient.delete(this.deletarURL+id);
  }
}
