import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-charts',
  templateUrl: './products-charts.component.html',
  styleUrls: ['./products-charts.component.scss']
})
export class ProductsChartsComponent implements OnInit {

  productsData = [];
  activeData = [];
  amountData: any[] = [];
  dateData = [];
  
  isDarkTheme = false;
  
  //opciones
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Productos';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad';

  colorScheme = {
    domain: ['#7C96AB', '#EDC6B1', '#B7B7B7', '#BFCCB5']
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit() {

    this.productsService.getProducts().subscribe((products: any[]) => {
      if (products && products.length > 0) {
        this.productsData = [
          {
            value: products.length,
            previousValue:  40,
            units: 'PRODUCTOS'
          }
        ];
      }

      const activeProduct = products.filter((product) => product.active);
      const notActiveProduct = products.filter((product) => !product.active);
      this.activeData = [
        {
          name: 'Activos',
          value: activeProduct.length
        },
        {
          name: 'Inactivos',
          value: notActiveProduct.length
        }
      ];

      const stockProducts = products.filter((product) => product.stock);
      this.amountData = stockProducts.map((product) => {
        return {
          name: product.name,
          value: product.stock
        };
      });

      const products2023 = products.filter((product) => product.date_added.getFullYear() == 2023);
      const products2022 = products.filter((product) => product.date_added.getFullYear() == 2022);
      if(products2022 != null && products2023 != null){
        this.dateData = [
          {
            name: '2023',
            value: products2023.length
          },
          {
            name: '2022',
            value: products2022.length
          }
        ];
      }
      
  });

  }

}

