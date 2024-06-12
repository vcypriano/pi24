import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoGeradorEnergiaPage } from './tipo-gerador-energia.page';

describe('TipoGeradorEnergiaPage', () => {
  let component: TipoGeradorEnergiaPage;
  let fixture: ComponentFixture<TipoGeradorEnergiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoGeradorEnergiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
