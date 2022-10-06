import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospedagemService } from '../hospedagem.service';

@Component({
  selector: 'app-checkout-cadastro',
  templateUrl: './checkout-cadastro.component.html',
  styleUrls: ['./checkout-cadastro.component.css']
})
export class CheckoutCadastroComponent implements OnInit {
  public IDCheckin: any;
  checkoutObj: any;
  router: Router;
  
  constructor(private route: ActivatedRoute,
              private hospedagemService: HospedagemService,
              router: Router) { 
    this.router = router;
    this.route.params.subscribe(params => this.IDCheckin = params['id']) 
  }

  ngOnInit(): void {
    this.checkoutObj = {
      idCheckin: this.IDCheckin
    };

  }

  checkout(){
    this.hospedagemService.checkout(this.checkoutObj).subscribe(resposta => {
      this.router.navigate(['/', 'hospedagem']);
    });
  }
}
