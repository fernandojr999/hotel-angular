import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCadastroComponent } from './checkout-cadastro.component';

describe('CheckoutCadastroComponent', () => {
  let component: CheckoutCadastroComponent;
  let fixture: ComponentFixture<CheckoutCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
