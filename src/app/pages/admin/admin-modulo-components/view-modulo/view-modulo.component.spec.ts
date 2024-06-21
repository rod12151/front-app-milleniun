import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModuloComponent } from './view-modulo.component';

describe('ViewModuloComponent', () => {
  let component: ViewModuloComponent;
  let fixture: ComponentFixture<ViewModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewModuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
