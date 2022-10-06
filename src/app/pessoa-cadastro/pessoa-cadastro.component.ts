import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  pessoa: any;
  router: Router;

  constructor(private service: PessoaService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.pessoa = {};
  }

  criar(){
      this.service.criar(this.pessoa).subscribe(resposta => {
      this.router.navigate(['/', 'pessoas']);
    });
  }

}
