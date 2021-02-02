import { Component, OnInit } from '@angular/core';

import { Product} from '../product.model'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos : Product [] = [
    {
      id: '1',
      title: 'Camiseta Platzi',
      price: 8000,
      description: 'es una remera',
      image:'../../..//assets/camiseta.png'
    },
    {
      id: '2',
      title: 'Camiseta Platzi 2',
      price: 8000,
      description: 'es una remera',
      image:'../assets/camiseta.png'
    },
    {
      id: '3',
      title: 'Camiseta Platzi 3',
      price: 8000,
      description: 'es una remera',
      image:'../assets/camiseta.png'
    },
    {
      id: '4',
      title: 'Camiseta Platzi 4',
      price: 8000,
      description: 'es una remera',
      image:'../assets/camiseta.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id : number){
    console.log('Producto');
    console.log(id);
  }
}
