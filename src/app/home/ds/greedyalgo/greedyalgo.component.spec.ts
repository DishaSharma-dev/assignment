import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreedyalgoComponent } from './greedyalgo.component';

describe('GreedyalgoComponent', () => {
  let component: GreedyalgoComponent;
  let fixture: ComponentFixture<GreedyalgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreedyalgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreedyalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
