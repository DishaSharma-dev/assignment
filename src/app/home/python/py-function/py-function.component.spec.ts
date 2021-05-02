import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyFunctionComponent } from './py-function.component';

describe('PyFunctionComponent', () => {
  let component: PyFunctionComponent;
  let fixture: ComponentFixture<PyFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
