import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'area-produtos',
  templateUrl: './area-produtos.component.html',
  styleUrls: ['./area-produtos.component.css']
})
export class AreaProdutosComponent implements OnInit {

  itensAdicionados = [ 0 ];
  totalAdicionado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() eventoNovoTotal = new EventEmitter<number>();
  @Output() eventoNovaQuantidadeItens = new EventEmitter<number>();

  adicionarItem(preco: number) {
    this.totalAdicionado += preco;
    this.itensAdicionados.push(preco);

    this.eventoNovoTotal.emit(this.totalAdicionado);
    this.eventoNovaQuantidadeItens.emit(this.itensAdicionados.length);

    console.log(this.itensAdicionados, this.totalAdicionado, this.itensAdicionados.length);
  }

  excluirItem(preco: number) {
    this.totalAdicionado -= preco;
    this.itensAdicionados = this.itensAdicionados.filter(
      (value, index) => value < preco || value > preco
    );

    this.eventoNovoTotal.emit(this.totalAdicionado);
    this.eventoNovaQuantidadeItens.emit(this.itensAdicionados.length);

    console.log(this.itensAdicionados, this.totalAdicionado, this.itensAdicionados.length);
  }

}
