import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsChartsComponent } from './products-charts/products-charts.component';
import { ProductsIndexComponent } from './products-index/products-index.component';


const routes: Routes = [
  { path: 'products', component: ProductsTableComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'product-charts', component: ProductsChartsComponent },
  { path: '', component: ProductsIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
