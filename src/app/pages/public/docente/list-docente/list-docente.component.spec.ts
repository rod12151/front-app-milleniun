import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocenteComponent } from './list-docente.component';

describe('ListDocenteComponent', () => {
  let component: ListDocenteComponent;
  let fixture: ComponentFixture<ListDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
