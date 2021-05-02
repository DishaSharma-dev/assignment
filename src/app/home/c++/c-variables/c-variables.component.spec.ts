import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVariablesComponent } from './c-variables.component';

describe('CVariablesComponent', () => {
  let component: CVariablesComponent;
  let fixture: ComponentFixture<CVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
