import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COopsComponent } from './c-oops.component';

describe('COopsComponent', () => {
  let component: COopsComponent;
  let fixture: ComponentFixture<COopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
