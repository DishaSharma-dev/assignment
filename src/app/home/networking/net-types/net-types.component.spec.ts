import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetTypesComponent } from './net-types.component';

describe('NetTypesComponent', () => {
  let component: NetTypesComponent;
  let fixture: ComponentFixture<NetTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
