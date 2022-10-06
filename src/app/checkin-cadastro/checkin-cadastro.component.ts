import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospedagemService } from '../hospedagem.service';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-checkin-cadastro',
  templateUrl: './checkin-cadastro.component.html',
  styleUrls: ['./checkin-cadastro.component.css']
})
export class CheckinCadastroComponent implements OnInit {
  checkin: any;
  pessoas!: Array<any>;
  router: Router;

  constructor(private hospedagemService: HospedagemService, private pessoaService: PessoaService, router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
    this.checkin = {};
    this.listarPessoas();
  }

  listarPessoas(){
    this.pessoaService.listar().subscribe(dados => this.pessoas = dados);
  }

  criar(){
    this.hospedagemService.criar(this.checkin).subscribe(resposta => {
      this.router.navigate(['/', 'hospedagem']);
    });
  };
  
}
