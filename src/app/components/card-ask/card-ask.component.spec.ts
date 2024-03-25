import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAskComponent } from './card-ask.component';

describe('CardAskComponent', () => {
  let component: CardAskComponent;
  let fixture: ComponentFixture<CardAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
