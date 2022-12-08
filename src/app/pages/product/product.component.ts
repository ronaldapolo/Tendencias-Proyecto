import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class productComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts() {
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.httpClient.get(url).subscribe((response) => {
      console.log(response);
    });
  }

  getProduct() {
    const url = 'http://api.escuelajs.co/api/v1/products/7';
    this.httpClient.get(url).subscribe((response) => {
      console.log(response);
    });
  }

  createProduct() {
    const data = {
      title: 'Zapatos',
      price: 4,
      description: 'Calzado Ronald Apolo',
      images: [],
      categoryId: 1,
    };
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe((response) => {
      console.log(response);
    });
  }

  updateProduct() {
    const data = {
      title: 'Zapatos',
      price: 3,
      description: 'Zapatos de Ronald Apolo',
    };
    const url = 'http://api.escuelajs.co/api/v1/products/9';
    this.httpClient.put(url, data).subscribe((response) => {
      console.log(response);
    });
  }

  deleteProduct() {
    this.httpClient
      .delete('http://api.escuelajs.co/api/v1/products/7')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
