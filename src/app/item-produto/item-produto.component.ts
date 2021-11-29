import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.css']
})
export class ItemProdutoComponent implements OnInit {

  @Input() imagemSrc = 'assets/images/livro-modelo.png';
  @Input() titulo = '';
  @Input() descricao = '';
  @Input() preco = '0.00';

  botaoComprarAtivado = true;
  botaoCancelarAtivado = false;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() eventoComprarItem = new EventEmitter<number>();

  comprarItem(preco: string) {
    this.eventoComprarItem.emit(parseFloat(preco));

    this.trocarEstadosBotoes();

    console.log('Comprando: ', parseFloat(preco));
  }

  @Output() eventoCancelarItem = new EventEmitter<number>();

  cancelarItem(preco: string) {
    this.eventoCancelarItem.emit(parseFloat(preco));
    
    this.trocarEstadosBotoes();

    console.log('Excluindo: ', parseFloat(preco));
  }

  trocarEstadosBotoes() {
    this.botaoComprarAtivado = !this.botaoComprarAtivado;
    this.botaoCancelarAtivado = !this.botaoCancelarAtivado;
  }


}
