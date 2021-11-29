import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { AreaSuperiorComponent } from './area-superior/area-superior.component';
import { AreaProdutosComponent } from './area-produtos/area-produtos.component';
import { AreaPagamentoComponent } from './area-pagamento/area-pagamento.component';
import { ItemProdutoComponent } from './item-produto/item-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    AreaSuperiorComponent,
    AreaProdutosComponent,
    AreaPagamentoComponent,
    ItemProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
