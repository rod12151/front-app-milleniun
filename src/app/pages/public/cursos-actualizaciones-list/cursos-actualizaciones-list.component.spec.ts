import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosActualizacionesListComponent } from './cursos-actualizaciones-list.component';

describe('CursosActualizacionesListComponent', () => {
  let component: CursosActualizacionesListComponent;
  let fixture: ComponentFixture<CursosActualizacionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosActualizacionesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosActualizacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
