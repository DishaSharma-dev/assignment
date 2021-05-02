import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataindependenceComponent } from './dataindependence.component';

describe('DataindependenceComponent', () => {
  let component: DataindependenceComponent;
  let fixture: ComponentFixture<DataindependenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataindependenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataindependenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
