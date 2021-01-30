import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiverComponent } from './product-fiver.component';

describe('ProductFiverComponent', () => {
  let component: ProductFiverComponent;
  let fixture: ComponentFixture<ProductFiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
