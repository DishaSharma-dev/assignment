import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataArchitectureComponent } from './data-architecture.component';

describe('DataArchitectureComponent', () => {
  let component: DataArchitectureComponent;
  let fixture: ComponentFixture<DataArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
