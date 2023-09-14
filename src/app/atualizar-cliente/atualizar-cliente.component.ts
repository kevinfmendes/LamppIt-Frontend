import { Cliente } from './../cliente';
import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent {

  id!: number;

  cliente: Cliente = new Cliente();

  constructor(private clienteservice: ClienteService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteservice.buscarClientePorId(this.id).subscribe(data =>{
      this.cliente = data;
    }, error =>console.error());
  }

  goToListagemClientes(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    console.log(this.cliente);
    this.clienteservice.updateCliente(this.id,
      this.cliente).subscribe(data=>{
        this.goToListagemClientes();
      }, error => console.log(error));
  }

}
