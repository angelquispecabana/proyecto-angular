import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subcription: Subscription = null;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.subcription = this.productService.getProducts()
      .subscribe((products) => {
        this.products = products;
      }, (err) => {
        console.log('error >', err);
      });

    // setTimeout(() => {
    //   console.log('actualizando el producto...');

    //   this.productService.updateProduct({
    //     id: 1607568482046,
    //     name: 'Testing 2',
    //     description: 'Descripción del producto',
    //     stock: 10,
    //     price: 99.99
    //   }).subscribe();
    // }, 3000);
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  handleDelete(id: number): void {
    this.productService.deleteProduct(id)
      .subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
      }, (err) => {
        console.log('error >', err);
      });
  }
}
