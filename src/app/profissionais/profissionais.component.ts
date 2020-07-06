import { Component, OnInit } from '@angular/core';
import { CadastroService } from "./../service/cadastro.service"
import { Conta } from '../model/conta';
import { FormControl } from '@angular/forms';
import { ESPECIALIDADES } from '../model/especialidades';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css'],
})
export class ProfissionaisComponent implements OnInit {
  list_especialidades = ESPECIALIDADES;
  espec_selecionada : string;

  contas: Conta[];
  selecionados : Conta[];
  especialidade = new FormControl();

  constructor(private cadastroService: CadastroService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.cadastroService
      .getAll()
      .subscribe((dados) => (this.contas = dados));
  }


  show(){
    if(this.espec_selecionada== null) return;
      this.selecionados = Array<Conta>();
      this.contas.forEach(c => {
        if(this.contem_especialidae(c)){
          this.selecionados.push(c);
          return;
        }
      });
  }

  contem_especialidae(conta : Conta){
    return (conta.especialidade.indexOf(this.espec_selecionada) > -1);
  }
}
