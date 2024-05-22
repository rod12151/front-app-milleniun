import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWelcomComponent } from './admin-welcom.component';

describe('AdminWelcomComponent', () => {
  let component: AdminWelcomComponent;
  let fixture: ComponentFixture<AdminWelcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminWelcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminWelcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
