import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizessComponent } from './quizess.component';

describe('QuizessComponent', () => {
  let component: QuizessComponent;
  let fixture: ComponentFixture<QuizessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
