import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product = {
    type: "Camiseta",
    name: "Authentic Titular Boca Jrs 22/23",
    waist: "M",
    color: "Azul y Oro",
    price: 28999,
    image: "assets/camiseta-boca.png",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
