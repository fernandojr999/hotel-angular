import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { MenuPrincipalComponent } from "./menu-principal/menu-principal.component";
import { PessoaListagemComponent } from "./pessoa-listagem/pessoa-listagem.component";
import { HospedagemMenuComponent } from "./hospedagem-menu/hospedagem-menu.component";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { CheckinCadastroComponent } from "./checkin-cadastro/checkin-cadastro.component";
import { CheckoutCadastroComponent } from "./checkout-cadastro/checkout-cadastro.component";

const APP_ROUTES: Routes = [
    
    {path: '', component: MenuPrincipalComponent},
    {path: 'pessoas', component: PessoaListagemComponent},
    {path: 'pessoas/add', component: PessoaCadastroComponent},
    {path: 'hospedagem', component: HospedagemMenuComponent},
    {path: 'hospedagem/:tipo', component: HospedagemMenuComponent},
    {path: 'checkin/add', component: CheckinCadastroComponent},
    {path: 'checkout/:id', component: CheckoutCadastroComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }