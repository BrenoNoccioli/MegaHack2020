import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Conta } from '../model/conta';
import { CONTAMOCK } from '../mock/mock-profissionais';
import { Router, ActivatedRoute } from '@angular/router';

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
    console.log(this.contas);
  }

  login() {
    let valido = false;
    this.contas.forEach(conta => {
      if(conta.email == this.email.value
      && conta.senha == this.senha.value){
        valido = true;
        this.router.navigate(['/principal']);
      }
    });
    
    if(!valido){
      alert("Login ou senha invalida!")
    }
  }

}
