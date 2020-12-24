import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EditProductComponent } from './components/edit-product/edit-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AdminComponent } from './admin.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user.service';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'edit-product/:id',
        component: EditProductComponent
      },
      {
        path: 'new-product',
        component: NewProductComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent
      },
      {
        path: 'new-user',
        component: NewUserComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      }
    ]
  }
];


@NgModule({
  declarations: [
    // Importar Componentes, Directivas, Pipes
    AdminComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    TruncatePipe,
    EditProductComponent,
    NewProductComponent,
    ProductFormComponent,
    UsersComponent,
    EditUserComponent,
    NewUserComponent,
    UserFormComponent
  ],
  exports: [ProductsComponent, HeaderComponent, FooterComponent, UsersComponent],
  imports: [
    // Importar SOLO modulos
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [ProductService, UserService]
})
export class AdminModule {}
