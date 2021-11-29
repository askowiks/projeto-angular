import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSuperiorComponent } from './area-superior.component';

describe('AreaSuperiorComponent', () => {
  let component: AreaSuperiorComponent;
  let fixture: ComponentFixture<AreaSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
