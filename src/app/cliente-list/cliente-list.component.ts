import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {Cliente} from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent{

  clientes: Cliente[] = [];

  constructor(private clienteservice: ClienteService,
    private router: Router){}

  ngOnInit(): void {
    this.getClientes();
  }

  private getClientes(){
    this.clienteservice.getListaClientes().subscribe(data=>{
      this.clientes = data;
    });
  }

  detalhesCliente(id:number){
    this.router.navigate(['detalhes-cliente', id]);
  }

  atualizarCliente(id: number){
    this.router.navigate(['atualizar-cliente', id]);
  }

  deleteCliente(id:number){
    this.clienteservice.deleteCliente(id).subscribe(data=>{
      console.log(data);
      this.getClientes();
    })
  }
}
