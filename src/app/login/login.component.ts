import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Conta } from '../model/conta';
import { CONTAMOCK } from '../mock/mock-profissionais';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from "./../service/cadastro.service"
import { pipe } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contas : Conta[];
  email = new FormControl();
  senha = new FormControl();
  
  constructor(private router : Router, private routes : ActivatedRoute,private cadastroService: CadastroService ) { }

  ngOnInit(): void {
    //carrega contas
    this.cadastroService.getAll().subscribe(obtidas =>
      this.contas = obtidas);
  }

  login() {
    
    console.log(this.contas);
    let valido = false;
    this.contas.forEach(conta => {
      if(conta.email == this.email.value
      && conta.senha == this.senha.value){
        valido = true;
        this.router.navigate([`/principal/${conta.id}`]);
      }
    });
    
    if(!valido){
      alert("Login ou senha invalida!")
    }
  }

}
