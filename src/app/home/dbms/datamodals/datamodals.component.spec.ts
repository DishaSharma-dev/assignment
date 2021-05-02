import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamodalsComponent } from './datamodals.component';

describe('DatamodalsComponent', () => {
  let component: DatamodalsComponent;
  let fixture: ComponentFixture<DatamodalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatamodalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamodalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
