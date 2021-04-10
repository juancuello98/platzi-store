import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  getAllProducts(){
    return this.productos;
  }

  getProduct(id:string){
    return this.productos.find( item => id === item.id)
  }
}
