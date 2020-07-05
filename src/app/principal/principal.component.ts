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
  
  onNavigate(value)
{
    if (value == 1) then{
        
    const url = './';
    window.open(url, '_blank');
    }
  else if {
      
    const url = './';
    window.open(url, '_blank');
  }
  else if {
      
    const url = './profissionais';
    window.open(url, '_blank');
  }
  else {
      
    const url = 'publicacoes';
    window.open(url, '_blank');
  }

}
  

}
