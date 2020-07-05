import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Conta } from '../model/conta';
import { CONTAMOCK } from '../mock/mock-profissionais';
import { Router, ActivatedRoute } from '@angular/router';
import { MainLogoComponent } from '../main-logo/main-logo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contas : Conta[];
  email = new FormControl();
  senha = new FormControl();
  constructor(private router : Router, private routes : ActivatedRoute ) { }

  ngOnInit(): void {
    //carrega contas
    this.contas = CONTAMOCK;
  }

  login() {
    this.contas.forEach(conta => {
      if(conta.email == this.email.value
      && conta.senha == this.senha.value){
        console.log('ACHEI A CONTA ! ! !')
        this.router.navigate(['/principal']);
      }
    });
  
    alert("Login ou senha invalida!")
  }

}
