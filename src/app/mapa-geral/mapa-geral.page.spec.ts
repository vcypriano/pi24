import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaGeralPage } from './mapa-geral.page';

describe('MapaGeralPage', () => {
  let component: MapaGeralPage;
  let fixture: ComponentFixture<MapaGeralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaGeralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
