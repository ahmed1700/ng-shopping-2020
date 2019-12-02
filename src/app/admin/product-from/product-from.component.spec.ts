import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFromComponent } from './product-from.component';

describe('ProductFromComponent', () => {
  let component: ProductFromComponent;
  let fixture: ComponentFixture<ProductFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
