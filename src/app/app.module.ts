import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';
import { PessoaService } from './pessoa.service';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { AppRoutingModule } from './app.routing.module';
import { HospedagemMenuComponent } from './hospedagem-menu/hospedagem-menu.component';
import { HospedagemService } from './hospedagem.service';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { CheckinCadastroComponent } from './checkin-cadastro/checkin-cadastro.component';
import { CheckoutCadastroComponent } from './checkout-cadastro/checkout-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaListagemComponent,
    MenuPrincipalComponent,
    HospedagemMenuComponent,
    PessoaCadastroComponent,
    CheckinCadastroComponent,
    CheckoutCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ PessoaService, HospedagemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
