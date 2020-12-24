import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable()
export class ProductService {
  private readonly API = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) {}

  getProducts(): Observable<any> {
    // return fetch('http://localhost:4000/products');

    return this.http.get(`${this.API}/products`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.API}/products/${id}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.API}/products/${id}`);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.API}/products/${product.id}`, product);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.API}/products`, product);
  }
}
