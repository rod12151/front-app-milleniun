import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocenteComponent } from './admin-docente.component';

describe('AdminDocenteComponent', () => {
  let component: AdminDocenteComponent;
  let fixture: ComponentFixture<AdminDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
