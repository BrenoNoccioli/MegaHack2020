import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CadastroComponent,
    LoginComponent,
    PublicacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
