import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductService } from './shared/product.service';
import { GetProductsComponent } from './product/get-products/get-products.component';
import { EditProductsComponent } from './product/edit-products/edit-products.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { CartComponent } from './cart/cart/cart.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FilterProductPipe } from './home/filterProduct.pipe';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { OrderPlaceComponent } from './order-place/order-place.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    CategoryComponent,
    ProductComponent,
    AddProductComponent,
    GetProductsComponent,
    EditProductsComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    CustomerComponent,
    CartComponent,
    ForbiddenComponent,
    FilterProductPipe,
    ProductDetailsComponent,
    OrderPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
