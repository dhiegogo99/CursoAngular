import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from './component/tela-principal/tela-principal.component';

import { TelaSecundariaComponent } from './component/tela-secundaria/tela-secundaria.component';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [TelaPrincipalComponent,TelaSecundariaComponent],
  imports: [
    CommonModule,HomeRoutingModule
  ],
  exports: [TelaPrincipalComponent,TelaSecundariaComponent]
})
export class HomeModule { }
