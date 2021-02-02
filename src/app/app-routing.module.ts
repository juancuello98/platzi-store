import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ContactosComponent } from './contactos/contactos.component'
import { ProductosComponent } from './productos/productos.component';
import {DemoComponent} from './demo/demo.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'contactos',
    component: ContactosComponent
  },
  {
    path:'demo',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
