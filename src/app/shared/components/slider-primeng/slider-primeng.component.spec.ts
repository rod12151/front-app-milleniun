import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPrimengComponent } from './slider-primeng.component';

describe('SliderPrimengComponent', () => {
  let component: SliderPrimengComponent;
  let fixture: ComponentFixture<SliderPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPrimengComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
