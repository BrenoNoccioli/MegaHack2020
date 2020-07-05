import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  id : string;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    
  this.id = this.route.snapshot.params["id"];

  }
  

}
