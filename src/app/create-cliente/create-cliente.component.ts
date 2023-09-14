import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent {

  telMask= '(00) 0000-0000'
  cliente: Cliente = new Cliente();

  constructor(private clienteservice: ClienteService,
    private router: Router){}

  ngOnInit(): void {
    this.telMask='(00) 0 0000-0000';
  }

  salvarCliente(){
    this.clienteservice.cadastrarCliente(this.cliente).subscribe( data => {
      console.log(data);
      this.goToListagemClientes();
    },
    error => console.log(error));
  }

  goToListagemClientes(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    console.log(this.cliente);
    this.salvarCliente();

  }

}
