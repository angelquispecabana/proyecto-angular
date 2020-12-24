import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: [
  ]
})
export class EditProductComponent implements OnInit {
  productId: number;
  product: Product = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.productId = parseInt(paramMap.get('id'), 10);
      this.productService.getProductById(this.productId)
        .subscribe(product => {
          this.product = product;
        });
    });
  }

  onSubmit(product: Product): void {
    this.productService.updateProduct({...product, id: this.productId})
      .subscribe(() => {
        this.router.navigate(['/admin']);
      });
  }

}
