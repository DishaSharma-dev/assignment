import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinationsComponent } from './definations.component';

describe('DefinationsComponent', () => {
  let component: DefinationsComponent;
  let fixture: ComponentFixture<DefinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
