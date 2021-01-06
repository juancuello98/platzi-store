//Se encarrga de la logica del componente

import { Component } from '@angular/core';
import { Product} from './product.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Las variables que escribimos aca son variables que
  // podemos mostrar y renderizar en nuestro HTML
  title = 'platzi-store';
  items = ['juan','nicolas','julian']
  productos : Product [] = [
    {
      id: '1',
      title: 'Camiseta Platzi',
      price: 8000,
      description: 'es una remera',
      image:'../assets/camiseta.png'
    }
  ]

  addItem(){
    this.items.push('nuevoItem')
  }

  DeleteItem(index: number){
    this.items.splice(index, 1); // splice saca un elemento del array, recibe el indice de donde esta el elemento y cuantos borra apartir de ahi

  }
}
