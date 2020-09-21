import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDescComponent } from './restaurant-desc.component';

describe('RestaurantDescComponent', () => {
  let component: RestaurantDescComponent;
  let fixture: ComponentFixture<RestaurantDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
