import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrls: ['./pessoa-listagem.component.css']
})
export class PessoaListagemComponent implements OnInit {
  pessoas!: Array<any>;


  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.pessoaService.listar().subscribe(dados => this.pessoas = dados);
  }
}
