import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should check that the mock of product exist',()=> {
    const fixture = TestBed.createComponent(AddProductComponent);
    const addprod = fixture.componentInstance;
    expect(addprod.product).toEqual({
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
      }
    })
  });

  it('Should check that the mock of brands is a empty array',()=> {
    const fixture = TestBed.createComponent(AddProductComponent);
    const addprod = fixture.componentInstance;
    expect(addprod.brands).toEqual([]);
  });
});
