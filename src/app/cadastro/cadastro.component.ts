import { Component, OnInit } from '@angular/core';
import { Conta } from '../model/conta';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  conta : Conta;
  usuario:Conta;
  senhaForte: boolean;
  confirmacaoSenha: string = ''
  senhasConferem: boolean = false
  novo: boolean = false;
 

  formularioDeUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  
  ) {}

  ngOnInit(): void {

  }

  forcaDaSenha(){
    //todo
  }

  verificaSenhasConferem(){
    //todo
  }

  cadastrar(){
    //todo
  }

}
