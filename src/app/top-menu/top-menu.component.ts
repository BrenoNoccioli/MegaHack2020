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

  inicio : boolean;
  id : string;

  constructor( private route: ActivatedRoute, private router : Router, private location: Location ) { }

  ngOnInit(): void {
    this.principal = `/principal/${this.id}`;
    this.cadastro = `/cadastro/${this.id}`;
    this.lista_prof = `/profissionais/${this.id}`;
    this.publicacao = `/publicacao/${this.id}`;

    this.route.queryParams.subscribe(param=> this.id = param['id']);
    console.log(this.id);
    console.log(this.location.isCurrentPathEqualTo);

  }
}
