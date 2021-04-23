import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

id = 1;
textoBotao = "Esconder";
esconder = false;

pessoas = [
  { nome: "José", idade: 18, cidade: "Sao Paulo", estado:"Sao Paulo" },
  { nome: "Maria", idade: 22, cidade: "Vitoria", estado:"Espirito Santo" },
  { nome: "Elcio", idade: 51, cidade: "Rio de Janeiro", estado:"Rio de Janeiro" },
  { nome: "Mario", idade: 35, cidade: "Manaus", estado:"Amazonas" },
  {  nome: "Nelson", idade: 12, cidade: "Florianopolis", estado:"Santa Catarina" }
  ];

alterarExibicao() {
this.textoBotao = this.esconder ? "Esconder" : "Exibir";
this.esconder = !this.esconder;
}

pegarCor(idade: number){
  return idade >= 30 ? "red": "blue";
}
}
