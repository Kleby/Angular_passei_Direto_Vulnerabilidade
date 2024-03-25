import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubjectComponent } from './card-subject.component';

describe('CardSubjectComponent', () => {
  let component: CardSubjectComponent;
  let fixture: ComponentFixture<CardSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
