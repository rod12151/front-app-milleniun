import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEstudianteComponent } from './admin-estudiante.component';

describe('AdminEstudianteComponent', () => {
  let component: AdminEstudianteComponent;
  let fixture: ComponentFixture<AdminEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
