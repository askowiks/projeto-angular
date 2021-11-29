import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPagamentoComponent } from './area-pagamento.component';

describe('AreaPagamentoComponent', () => {
  let component: AreaPagamentoComponent;
  let fixture: ComponentFixture<AreaPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
