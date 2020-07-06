import { Conta } from '../model/conta';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }


  getAll() : Observable<Conta[]>{
    return this.http.get <any[]>("https://5efd48e5dd373900160b2e80.mockapi.io/generic/contas");
  }

  getById(id: string) {
    return this.http.get(`https://5efd48e5dd373900160b2e80.mockapi.io/generic/contas/${id}`);
  }

  insert(conta: Conta)  {
    console.log('salvando \n'+conta);
    return this.http.post(`https://5efd48e5dd373900160b2e80.mockapi.io/generic/contas`, conta);
  }

  update(conta: Conta) {
    console.log('atualizando \n'+conta);
    return this.http.put(`https://5efd48e5dd373900160b2e80.mockapi.io/generic/contas`, conta);
  }

}