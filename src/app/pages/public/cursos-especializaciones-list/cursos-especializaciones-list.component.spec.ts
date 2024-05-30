import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEspecializacionesListComponent } from './cursos-especializaciones-list.component';

describe('CursosEspecializacionesListComponent', () => {
  let component: CursosEspecializacionesListComponent;
  let fixture: ComponentFixture<CursosEspecializacionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosEspecializacionesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosEspecializacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
