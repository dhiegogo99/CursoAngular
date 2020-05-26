
import { LoginComponentComponent } from './login-component/login-component.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaPrincipalComponent } from './home/component/tela-principal/tela-principal.component';
import { AuthGuard } from './guards/auth.guard';
import { ExercicioDiretivaComponent } from './home/component/exercicio-diretiva/exercicio-diretiva.component';


const routes: Routes = [
  {path:"login", component: LoginComponentComponent},
  {path:"", component: LoginComponentComponent},
  {path:"empresas", component: ExercicioDiretivaComponent},
  {path:"telaPrincipal",loadChildren : () => import('./home/home.module').then(m => m.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }