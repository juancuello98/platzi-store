import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../core/services/products.service';
//ActivatedRoute inyeccion de dependencias, Params es de tipado
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product !: Product;
  constructor(
    private route : ActivatedRoute,
    private productsService : ProductsService
    ) { } // se inserta como inyecccion de dependencias

  ngOnInit(): void {
    // le decimos que nos de los parametros que tenemos en la ruta, y me suscribo porque a medida que voy cambiando
    // de ruta o cambio el id desde la misma pagina se va a generar un cambio, entonces me suscribo a ese cambio
    this.route.params.subscribe((params:Params) => {
      console.log(params);
      const id = params.id;
      this.product != this.productsService.getProduct(id)
      console.log(this.product);
    });
  }

}
