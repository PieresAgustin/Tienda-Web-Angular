import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total: number = 0;

  products:Product[] = [
    {
      name: "camiseta",
      type: "camiseta",
      waist: "M",
      color: "azul",
      stock: 38,
      price: 4000,
      image: "assets/camiseta-boca.png",
      quantity: 3,
      clearance: false,
    },
    {
      name: "pantalon",
      type: "pantalon",
      waist: "XL",
      color: "Blanco",
      stock: 50,
      price: 6000,
      image: "",
      quantity: 1,
      clearance: false,
    }
  ]

  constructor() { }

  ngOnInit(): void {

    this.products.forEach(product =>{
      this.total += product.quantity * product.price
    })

  }



}
