import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataschemasComponent } from './dataschemas.component';

describe('DataschemasComponent', () => {
  let component: DataschemasComponent;
  let fixture: ComponentFixture<DataschemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataschemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataschemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
