import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoopsComponent } from './c-loops.component';

describe('CLoopsComponent', () => {
  let component: CLoopsComponent;
  let fixture: ComponentFixture<CLoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLoopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
