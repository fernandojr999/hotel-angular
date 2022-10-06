import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospedagemService } from '../hospedagem.service';

@Component({
  selector: 'app-hospedagem-menu',
  templateUrl: './hospedagem-menu.component.html',
  styleUrls: ['./hospedagem-menu.component.css']
})
export class HospedagemMenuComponent implements OnInit {
  public tipo: any;

  lista!: Array<any>;

  constructor(private route: ActivatedRoute,
              private hospedagemService: HospedagemService) { 
                this.route.params.subscribe(params => this.tipo = params['tipo']);
              }

  
     
  ngOnInit(): void {
    this.listar();
  }
  
  listar(){
    this.hospedagemService.listar(String(this.tipo)).subscribe(dados => this.lista = dados);
  }
}
