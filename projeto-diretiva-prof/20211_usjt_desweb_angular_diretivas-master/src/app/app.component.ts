import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

textoBotao = "Esconder";
esconder = false;

pessoas = [
  { nome: "José", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "Elcio", idade: 51 },
  { nome: "Mario", idade: 35 },
  { nome: "Nelson", idade: 12 }
  ];

alterarExibicao() {
this.textoBotao = this.esconder ? "Esconder" : "Exibir";
this.esconder = !this.esconder;
}

pegarCor(idade){
  return idade >= 30 ? "red": "blue";
}
}