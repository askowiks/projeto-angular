import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livraria';

  total = 0;

  atualizarTotalParaPagar(total: number) {
    this.total = total;

    console.log('Novo Total:', total);
  }

}
