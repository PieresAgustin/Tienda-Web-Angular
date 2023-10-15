import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand';
import { BrandDataService } from '../brand-data.service';
import { ProductsDataService } from '../products-data.service';
import { Product } from '../product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  brands: Brand[] = [];

  product: Product = {
    id: 0,
    name: "",
    type: "",
    waist: "",
    color: '',
    stock: 0,
    price: 0,
    image: "",
    quantity: 0,
    clearance: false,
    brand: {
      brand_id: 0,
      marca: '',
    }
  }
  constructor(private productsDataService: ProductsDataService, private brandsDataService: BrandDataService) { }

  ngOnInit(): void {
    this.brandsDataService.getAll().subscribe(brands => this.brands = brands);
  }

  addProduct(): void {
    this.productsDataService
    .createProduct(this.product)
    .subscribe(product => {
      this.product.name = product.name
      this.product.color = product.color
      this.product.price = product.price
      this.product.stock = product.stock
      this.product.type = product.type
      this.product.waist = product.waist
      this.product.clearance = product.clearance
      this.product.brand = product.brand
    })
  }

}
