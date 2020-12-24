import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styles: [
  ]
})
export class NewProductComponent implements OnInit {

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(product: Product): void {
    this.productService.createProduct(product)
      .subscribe(() => {
          this.router.navigate(['/admin']);
        });
  }

}
