import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinCadastroComponent } from './checkin-cadastro.component';

describe('CheckinCadastroComponent', () => {
  let component: CheckinCadastroComponent;
  let fixture: ComponentFixture<CheckinCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
