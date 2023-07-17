import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailsComponent } from './beer-details.component';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerDetailsComponent]
    });
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
