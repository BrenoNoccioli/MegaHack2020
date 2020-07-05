import { Component, OnInit } from '@angular/core';
import { CadastroService } from "./../service/cadastro.service"
import { Conta } from '../model/conta';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css'],
})
export class ProfissionaisComponent implements OnInit {
  contas: Conta[];
  conta : Conta;
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
}
