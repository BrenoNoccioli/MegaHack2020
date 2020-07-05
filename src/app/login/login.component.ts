import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Conta } from '../model/conta';
import { CONTAMOCK } from '../mock/mock-profissionais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contas = CONTAMOCK;

  email = new FormControl();
  senha = new FormControl();
  constructor() { }

  ngOnInit(): void {
    //carregar contas
  }

  login() {
    this.contas.forEach(conta => {
      if(conta.email == this.email.value
      && conta.senha == this.senha.value){
        console.log('ACHEI A CONTA ! ! !')
      }else{
        console.log('NÃO ACHEI ! !')
      }
    });
  }

}
