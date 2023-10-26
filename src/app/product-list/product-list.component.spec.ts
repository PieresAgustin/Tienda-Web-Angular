import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Product } from '../product';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let product: Product = {
    id: 0,
    name: "",
    type: "",
    waist: "",
    color: "",
    stock: 0,
    price: 0,
    image: "",
    quantity: 0,
    clearance: false,
    brand: {
      brand_id: 0,
      marca: "",
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('This should call upQuantity function 5 times', () => {
    spyOn(component, 'upQuantity');

    for (let i = 0; i < 5; i++) {
      component.upQuantity(product);
    }

    expect(component.upQuantity).toHaveBeenCalledTimes(10);
  })
});
