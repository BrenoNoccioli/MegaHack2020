import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute,Router } from "@angular/router";

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
  publicacao: string;
  sair : string;

  id : string;
 logado : boolean;

  constructor( private route: ActivatedRoute, private router : Router, private location: Location ) { }

  ngOnInit(): void {
    this.principal = `/principal/${this.id}`;
    this.cadastro = `/cadastro/${this.id}`;
    this.lista_prof = `/profissionais/${this.id}`;
    this.publicacao = `/publicacao/${this.id}`;

    let parts = location.pathname.split('/');
    console.log(parts);
    if(parts.length>1){
      this.id = parts[2];
    }
    console.log("id recebido "+this.id);
    this.logado = false;
  }
}
