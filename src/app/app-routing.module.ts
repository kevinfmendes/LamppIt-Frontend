import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

const routes: Routes = [
  {path: 'clientes', component: ClienteListComponent},
  {path: 'create-cliente', component: CreateClienteComponent},
  {path: '', redirectTo: 'clientes', pathMatch: 'full'},
  {path: 'atualizar-cliente/:id', component: AtualizarClienteComponent},
  {path: 'detalhes-cliente/:id',component: DetalhesClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
