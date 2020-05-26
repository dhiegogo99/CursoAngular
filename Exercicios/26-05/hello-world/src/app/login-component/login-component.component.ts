import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'

import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})


export class LoginComponentComponent implements OnInit {

user = {
  "email" : "",
  "password" : ""
};


  constructor(private loginservice : LoginService, private rota:Router) { }

  ngOnInit(): void {
    
    this.user = {
      "email" : "",
      "password" : ""
    };
  }

  ngSubmitFormLogin() {
    this.loginservice.efetuaLogin(this.user).subscribe((sucess:any) => {
      localStorage.setItem('token',sucess.token);
      alert("Logado com sucesso");
      this.rota.navigate(["empresas"]);
    }, 
    fail => {
      alert("falha ao logar");
        }
    )
  }

}
