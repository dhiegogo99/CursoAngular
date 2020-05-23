import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule,FormsModule,HttpClientModule,RouterModule
  ],
  exports:[LoginComponentComponent],
  providers:[LoginService]
})
export class LoginModule { }
