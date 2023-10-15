import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  products: Product[] = []

  constructor(private productCartService: ProductCartService) { }

  ngOnInit(): void {
    this.productCartService.products.subscribe(data => this.products = data);
  }

  emptyCart() {
    this.productCartService.emptyCart();
  }

  total() {
    let sum = 0;
    this.products.forEach(product => {
      sum += product.quantity * product.price
    });
    return sum;
  }


}
