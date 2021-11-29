import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'area-pagamento',
  templateUrl: './area-pagamento.component.html',
  styleUrls: ['./area-pagamento.component.css']
})
export class AreaPagamentoComponent implements OnInit {

  @Input() total = '';

  constructor() { }

  ngOnInit(): void {
  }

}
