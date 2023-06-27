import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsTableComponent } from './products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewProductComponent } from './new-product/new-product.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { ProductsChartsComponent } from './products-charts/products-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductsIndexComponent } from './products-index/products-index.component';
 



@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductDetailComponent,
    EditProductComponent,
    NewProductComponent,
    DialogConfirmationComponent,
    ProductsChartsComponent,
    ProductsIndexComponent
  ],
  entryComponents:[DialogConfirmationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserModule,
    NgxChartsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
