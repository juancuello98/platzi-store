import {Component} from '@angular/core'
import {Product} from '../product.module'

@Component({
    selector: 'app-product',
    templateUrl:'./product.component.html'
  })


export class ProductComponent{
  product: Product = {
    id: '1',
    title: 'Camiseta Platzi',
    price: 8000,
    description: 'es una remera',
    image:'../../assets/camiseta.png'
  }
}
