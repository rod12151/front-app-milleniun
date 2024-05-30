import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDiplomadosListComponent } from './cursos-diplomados-list.component';

describe('CursosDiplomadosListComponent', () => {
  let component: CursosDiplomadosListComponent;
  let fixture: ComponentFixture<CursosDiplomadosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosDiplomadosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosDiplomadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
