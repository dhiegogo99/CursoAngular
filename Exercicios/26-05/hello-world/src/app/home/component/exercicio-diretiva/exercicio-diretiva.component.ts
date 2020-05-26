import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretiva',
  templateUrl: './exercicio-diretiva.component.html',
  styleUrls: ['./exercicio-diretiva.component.css']
})
export class ExercicioDiretivaComponent implements OnInit {
  valores:any = [];
  saldoAdd:string;
  cnpjAdd:string;
  
  
  constructor() { }
  ngOnInit(): void {
    this.valores = [{
        cnpj: "88610324000516",
        saldo:1000
      },
      {
        cnpj: "03472246000154",
        saldo:903
      },
      {
          cnpj: "28195667000106",
          saldo:4629
      },
      {
        cnpj: "61189288000189",
        saldo:9
      }];
      this.saldoAdd = "";
      this.cnpjAdd = "";
  }


  actionDecimalMask(event){
    this.saldoAdd = event;
   }
   addForm(){
    let aux = {cnpj: this.cnpjAdd,
    saldo:this.saldoAdd.replace(".","").replace(",","")};
    this.valores.push(aux);
    this.saldoAdd = "";
    this.cnpjAdd = "";
    
   }

}
