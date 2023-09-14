import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    CreateClienteComponent,
    AtualizarClienteComponent,
    DetalhesClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
