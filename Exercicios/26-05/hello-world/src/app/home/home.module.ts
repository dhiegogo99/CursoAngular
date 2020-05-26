import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from './component/tela-principal/tela-principal.component';

import { TelaSecundariaComponent } from './component/tela-secundaria/tela-secundaria.component';
import { ExercicioDiretivaComponent } from './component/exercicio-diretiva/exercicio-diretiva.component';
import { HomeRoutingModule } from './home.routing.module';
import { FormsModule } from '@angular/forms';
import { CnpjExemploPipe } from './../pipes/cnpj-exemplo.pipe'
import { DecimalMaskDirective } from './component/exercicio-diretiva/decimal-mask.directive'

@NgModule({
  declarations: [
    TelaPrincipalComponent,
    TelaSecundariaComponent,
    ExercicioDiretivaComponent,
    CnpjExemploPipe,
    DecimalMaskDirective
  ],
  imports: [
    CommonModule,HomeRoutingModule,FormsModule
  ],
  exports: [TelaPrincipalComponent,TelaSecundariaComponent,ExercicioDiretivaComponent]
})
export class HomeModule { }
