import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.scss']
})
export class ProductsIndexComponent implements OnInit {

  constructor(private productsService: ProductsService, private router: Router) { }
  
  ngOnInit() {
  }

  accessProducts(): void{
    this.router.navigateByUrl("/product-charts");
  }
}
