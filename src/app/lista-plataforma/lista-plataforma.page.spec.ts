import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPlataformaPage } from './lista-plataforma.page';

describe('ListaPlataformaPage', () => {
  let component: ListaPlataformaPage;
  let fixture: ComponentFixture<ListaPlataformaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlataformaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
