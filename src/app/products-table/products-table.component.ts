import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  products: any = [];
  productDetail: any;
  isDarkTheme = false;

  constructor(private productsService: ProductsService, private router:Router, public dialog:MatDialog) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  viewProductDetail(product: any){
    this.productDetail = product;
    this.productsService.selectedProduct = this.productDetail;
    this.router.navigate(['/products', this.productDetail.id]);
  }
  openConfirmationDialog(productId: string): void{
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {data: {productId: productId}});
  }

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme
  }
}
