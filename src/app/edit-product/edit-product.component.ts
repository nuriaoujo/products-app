import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
  
})

export class EditProductComponent implements OnInit {
  [x: string]: any;
  isDarkTheme = false;
  product: any;
  datePipe: DatePipe;
  dateFormat: string = 'MMMM d, yyyy';
  date = new FormControl(new Date());
    serializedDate = new FormControl(new Date().toISOString());

  constructor(private productsService: ProductsService, private router: Router) {
    this.datePipe = new DatePipe('en-US');
    
  }

  ngOnInit() {
    this.product = this.productsService.selectedProduct;
  }

  updateProduct(): void{
    this.productsService.updateProduct(this.product);
    this.router.navigateByUrl("/products");
  }
  isCheck(): boolean{
    if (!this.product.active) {
      return this.product.active = false;
    } else {
      return this.product.active = true;
    }
  }
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme
  }
}
