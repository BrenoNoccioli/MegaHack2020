import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  //links
  principal: string;
  cadastro: string;
  lista_prof:string;
  publicacoes: string;
  sair : string;

  id : string;
 logado : boolean;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.principal = `/principal/${this.id}`;
    this.cadastro = `/cadastro`;
    this.lista_prof = `/profissionais/${this.id}`;
    this.publicacoes = `/publicacoes`;
    
  this.id = this.route.snapshot.params["id"];
    this.logado = false;
  }
  
  setLogado( stt : boolean){
    this.logado= stt;
  }
}
