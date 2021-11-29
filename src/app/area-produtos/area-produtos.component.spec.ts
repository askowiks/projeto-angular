import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProdutosComponent } from './area-produtos.component';

describe('AreaProdutosComponent', () => {
  let component: AreaProdutosComponent;
  let fixture: ComponentFixture<AreaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
