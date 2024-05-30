import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCursoPrimengComponent } from './card-curso-primeng.component';

describe('CardCursoPrimengComponent', () => {
  let component: CardCursoPrimengComponent;
  let fixture: ComponentFixture<CardCursoPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCursoPrimengComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCursoPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
