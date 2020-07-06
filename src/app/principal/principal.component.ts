import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  principal: string;
  cadastro: string;
  lista_prof:string;
  publicacao: string;
  login :string;
  protocolos : string;

  id : string;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    
  this.principal = `/principal/${this.id}`;
  this.cadastro = `/cadastro/${this.id}`;
  this.lista_prof = `/profissionais/${this.id}`;
  this.publicacao = `/publicacao`;

  this.id = this.route.snapshot.params["id"];

  }
  

}
