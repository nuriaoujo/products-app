import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

 isDarkTheme = false;
  name: string;
  stock: number;
  price: number;
  active: boolean;
  datePipe: DatePipe;
  dateFormat: string = 'MMMM d, yyyy';
  date = new FormControl(new Date());
    serializedDate = new FormControl(new Date().toISOString());

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
  }
  addProduct(){
    const product ={
      name: this.name,
      stock: this.stock,
      price: this.price,
      active: this.active,
      date_added: this.date,
    };
    this.productService.newProduct(product);
    this.router.navigate(['/products']);
  }
  isCheck(): boolean{
    if (!this.active) {
      return this.active = false;
    } else {
      return this.active = true;
    }
  }
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme
  }

}
