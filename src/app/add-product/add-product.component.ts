import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand';
import { BrandDataService } from '../brand-data.service';
import { ProductsDataService } from '../products-data.service';
import { Product } from './product';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  brands:Brand[] = [];

  product = new Product("camiseta titular","XL","Camiseta","Blanco",200,17000,"assets/camiseta-river.png",0,false);

  constructor(private productsDataService: ProductsDataService, private brandsDataService: BrandDataService) { }

  ngOnInit(): void {
    this.brandsDataService.getAll().subscribe(brands => this.brands = brands)

  }

  addProduct():void{
    this.productsDataService.createProduct(this.product).subscribe(product => this.product = product)
  }

}
