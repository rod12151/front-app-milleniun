import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAdminDetalleComponent } from './curso-admin-detalle.component';

describe('CursoAdminDetalleComponent', () => {
  let component: CursoAdminDetalleComponent;
  let fixture: ComponentFixture<CursoAdminDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoAdminDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoAdminDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
