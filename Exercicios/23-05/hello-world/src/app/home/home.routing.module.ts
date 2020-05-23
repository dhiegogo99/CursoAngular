
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaPrincipalComponent } from './component/tela-principal/tela-principal.component';
import { TelaSecundariaComponent } from './component/tela-secundaria/tela-secundaria.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path:"", component: TelaPrincipalComponent, canActivate:[AuthGuard]},
  {path:"telaSecundaria", component: TelaSecundariaComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }