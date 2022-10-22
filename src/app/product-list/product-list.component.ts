import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [{
    type: "Camiseta",
    name: "Authentic Titular Boca Jrs 22/23",
    waist: "M",
    color: "Azul y Oro",
    stock: 400,
    price: 28999.99,
    image: "assets/camiseta-boca.png",
    clearance: false,
    quantity: 0,
  },
  {
    type: "Camiseta",
    name: "CAMISETA PUMA TITULAR INDEPENDIENTE 2022/23",
    waist: "XL",
    color: "Rojo",
    stock: 350,
    price: 15999.99,
    image: "assets/camiseta-independiente.png",
    clearance: true,
    quantity: 0,
  },{
    type: "Camiseta",
    name: "CAMISETA TITULAR RIVER PLATE 22/23",
    waist: "2XL",
    color: "Blanco y Rojo",
    stock: 300,
    price: 16999.99,
    image: "assets/camiseta-river.png",
    clearance: false,
    quantity: 0,
  }]
  constructor() { }

  ngOnInit(): void {
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
