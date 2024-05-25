import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerfilDocenteComponent } from './card-perfil-docente.component';

describe('CardPerfilDocenteComponent', () => {
  let component: CardPerfilDocenteComponent;
  let fixture: ComponentFixture<CardPerfilDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPerfilDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPerfilDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
