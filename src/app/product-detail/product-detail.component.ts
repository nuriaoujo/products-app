import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  isDarkTheme = false;

  constructor(private productService:ProductsService, private router: Router) { }

  ngOnInit() {
    this.product = this.productService.selectedProduct;
  }
  
  goToUpdateContact(){
    this.router.navigate(['/edit-product', this.product.id]);
  }
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme
  }
}
