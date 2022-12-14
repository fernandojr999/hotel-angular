import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {
  pessoasUrl = 'http://localhost:8080/pessoas';
  
  constructor(private http: HttpClient) { }
  
  listar(){
    return this.http.get<any[]>(`${this.pessoasUrl}`);
  }

  criar(pessoa: any){
    return this.http.post(this.pessoasUrl, pessoa);
  }
}
