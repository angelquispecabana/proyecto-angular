import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';


@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
    @Input() buttonText = 'Crear';
    @Input() product: Product = null;
    @Output() saveProduct: EventEmitter<Product> = new EventEmitter<Product>();
    productForm = null;

    constructor(
        private router: Router
    ){}

    ngOnInit(): void {
        this.productForm = new FormGroup({
            name: new FormControl(this.product ? this.product.name : '', [Validators.required, Validators.minLength(4)]),
            description: new FormControl(this.product ? this.product.description : '', [Validators.required]),
            price: new FormControl(this.product ? this.product.price : '', [Validators.required, Validators.min(0)]),
            stock: new FormControl(this.product ? this.product.stock : '', [Validators.required, Validators.min(1)])
        });
    }

    onSubmit(): void {
        this.saveProduct.emit({
            ...this.productForm.value
        });
    }

    onCancel(): void {
        this.router.navigate(['/admin']);
    }
}
