import { CadastroService } from "./../service/cadastro.service"
import { Component, OnInit } from '@angular/core';
import { Conta } from '../model/conta';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { empty } from 'rxjs';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  nome_completo_input = new FormControl();
  email_input = new FormControl();
  senha_input = new FormControl();
  confirma_senha_input = new FormControl();

  senhaForte: boolean;
  confirmacaoSenha: string = ''
  senhasConferem: boolean = false
  novo: boolean = false;
  conta: Conta;
 

  formularioDeCadastro: FormGroup;

  constructor(
   //private fb: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private cadastroService: CadastroService,
  
  ) {}

  ngOnInit(): void {
    
    let id: number = this.route.snapshot.params["id"];
  
    if (id === undefined) {
      this.novo = true;
    } else {
      this.findById(id);
      this.novo = false;
    }
  }

  findById(id: number) {
    this.cadastroService.getById(id).subscribe((conta: Conta) => {
      console.log('conta obtida '+conta.email +" nome "+conta.nome_completo);
      this.conta = conta;
    });
  }

  // Cadastro API
  cadastrar() {
    
    if (this.novo) {
      this.cadastroService
        .insert(this.conta)
        .subscribe((conta: Conta) => {
          this.conta = conta;
          this.novo = false;
        });
      alert("Cadastrado");
      this.router.navigate(['/principal']);
    } else {
      this.cadastroService
        .update(this.conta)
        .subscribe((conta: Conta) => {
          this.conta = conta;
        });
      this.router.navigate(['/principal']);
    }
  }

  enviarDados() {
   console.log(this.formularioDeCadastro.value);
  }

  //Classificação da força da senha
  forcaDaSenha(): void {
    // listagem dos caracteres considerados "especiais"
    const caracteresEspeciais: string[] = ["@", "#", "$", "%", "&"];

    const contemCaracterEspecial: boolean = this.conta.senha
      .split("") // transforma a senha em um array separado por ''
      .some((caracter: string): boolean => {
        return caracteresEspeciais.includes(caracter); // retorna verdadeiro se o caractere existir no array caracteresEspeciais
      });

    const contemMaisDeDezCaracteres: boolean = this.conta.senha.length > 10;

    this.senhaForte = contemCaracterEspecial && contemMaisDeDezCaracteres;
  }

  verificaSenhasConferem(): void {
    this.senhasConferem = this.conta.senha === this.confirmacaoSenha;
  }
}
