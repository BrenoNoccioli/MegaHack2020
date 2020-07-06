import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logado:boolean;
  title = 'megahack2020';

  setboolean( logado :boolean){
    this.logado = logado;
  }
}
