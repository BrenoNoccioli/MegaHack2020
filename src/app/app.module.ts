import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CadastroComponent,
    LoginComponent,
    PublicacaoComponent,
    ProfissionaisComponent,
    TopMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: 'principal/:id', component: PrincipalComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: 'publicacao', component: PublicacaoComponent},
    {path: 'profissionais', component: ProfissionaisComponent},
    { path: '',   redirectTo: '/login', pathMatch: 'full'},
    { path:'**'   , component: LoginComponent  }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
