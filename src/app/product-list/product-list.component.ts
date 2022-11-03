import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Product } from './product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = []

  constructor(private productsDataService: ProductsDataService) { }

  ngOnInit(): void {
    this.productsDataService.getAll().subscribe(products => this.products = products)
  }

  upQuantity(product: Product): void{
    if(product.stock > product.quantity){
      product.quantity++;
    }
  }
  downQuantity(product: Product): void{
    if(product.quantity > 0){
      product.quantity--;
    }  
  }
  verifyProductsQuantity(product: Product): void{
    if(product.stock < product.quantity){
      alert("No se pueden ordenar más productos de los que hay en stock");
    }

    if(product.quantity < 0 ){
      alert("No se pueden pedir menos que 0 productos");
      product.quantity = 0;
    }
  }
}
