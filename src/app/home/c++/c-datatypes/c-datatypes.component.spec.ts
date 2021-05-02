import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDatatypesComponent } from './c-datatypes.component';

describe('CDatatypesComponent', () => {
  let component: CDatatypesComponent;
  let fixture: ComponentFixture<CDatatypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDatatypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDatatypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
