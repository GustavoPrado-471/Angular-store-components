import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products = [
    {
      name: 'Product One',
      image: '../../../assets/images/carOne.jpg',
      price: 500,
    },
    {
      name: 'Product Two',
      image: '../../../assets/images/carOne.jpg',
      price: 500,
    },
    {
      name: 'Product Three',
      image: '../../../assets/images/carOne.jpg',
      price: 500,
    },
    {
      name: 'Product Four',
      image: '../../../assets/images/carOne.jpg',
      price: 500,
    },
    {
      name: 'Product Five',
      image: '../../../assets/images/carOne.jpg',
      price: 500,
    },
    {
      name: 'Product Six',
      image: '../../../assets/images/carOne.jpg',
      price: 500,
    },
  ];
}
