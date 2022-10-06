import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HospedagemService {
  Url = 'http://localhost:8080/hospedagens';
  
  constructor(private http: HttpClient) { }
  
  listar(tipo: String){
    if(tipo == 'CHECKIN'){
      this.Url = 'http://localhost:8080/hospedagens?tipo=CHECKIN';
    } else if(tipo == 'CHECKOUT'){
      this.Url = 'http://localhost:8080/hospedagens?tipo=CHECKOUT';
    }
    return this.http.get<any[]>(`${this.Url}`);
  }

  criar(checkin: any){
    return this.http.post('http://localhost:8080/checkin', checkin);
  }

  checkout(checkout:any){
    return this.http.post('http://localhost:8080/checkout', checkout);
  }
}
