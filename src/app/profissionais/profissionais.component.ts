import { Component, OnInit } from '@angular/core';
import { Conta } from '../model/conta';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css'],
})
export class ProfissionaisComponent implements OnInit {
  profissionais: Array<any>;

  constructor(private cadastroService: CadastroService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.cadastroService
      .getAll()
      .subscribe((dados) => (this.profissionais = dados));
  }
}
