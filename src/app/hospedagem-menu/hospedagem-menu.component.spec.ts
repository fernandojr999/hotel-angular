import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemMenuComponent } from './hospedagem-menu.component';

describe('HospedagemMenuComponent', () => {
  let component: HospedagemMenuComponent;
  let fixture: ComponentFixture<HospedagemMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospedagemMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospedagemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
