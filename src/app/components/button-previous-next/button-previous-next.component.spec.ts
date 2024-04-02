import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPreviousNextComponent } from './button-previous-next.component';

describe('ButtonPreviousNextComponent', () => {
  let component: ButtonPreviousNextComponent;
  let fixture: ComponentFixture<ButtonPreviousNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPreviousNextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPreviousNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
