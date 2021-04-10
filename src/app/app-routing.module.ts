import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ContactosComponent } from './contactos/contactos.component'
import { ProductosComponent } from './productos/productos.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'productos/id:',
    component: ProductDetailComponent
  },
  {
    path:'contactos',
    component: ContactosComponent
  },
  {
    path:'demo',
    component: DemoComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
