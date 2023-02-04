import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(private productsService: ProductsService) {}
  products = [
    {
      title: '',
      category: '',
      description: '',
      id: 0,
      image: '',
      price: 0,
    }
  ];

  today = new Date();
  dateX = new Date(2023,0,27);

  ngOnInit(): void {
    // En esta parte podemos manejar las peticiones asincronas
    this.productsService.getProductsAPI().subscribe(
      data => {
        this.products = data;
      }
    )
  }
}
