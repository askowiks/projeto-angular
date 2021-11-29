import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent implements OnInit {
  
  //Atributos de classe para serem utilizados no html
  dados: string[] = [];
  totalDados = 0;
  valorDoInput = '';

  //Criando um atributo para tag 'app-example-component'
  @Input() divColor = '#FF0011';

  constructor() { }

  apagarElemento(index: number): void {
    this.dados.splice(index, 1);
    this.totalDados = this.dados.length;
  }

  /* COMO SERIA A ASSINATURA DESSA FUNÇÃO EM:
  JS
  function adicionarElemento(elementoHtml) { //código }

  JAVA
  public void adicionarElemento(HTMLInputElement elementoHtml) { //código }

  */
  adicionarElemento(elementoHtml: HTMLInputElement) {
    console.log('adicioando: ', elementoHtml);
    this.dados.push(elementoHtml.value);
    elementoHtml.value = "";
    console.log(this.dados);
  }

  aoDigitar(evento: any) {
    this.valorDoInput += evento.target.value + ' | ';
    console.log(this.valorDoInput);
  }


  ngOnInit(): void {
    // this.nome = "";
    // this.totalEnvios = 0;
    // this.todosDados = [];
  }

}
