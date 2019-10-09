import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { GetProductsComponent } from './product/get-products/get-products.component';
import { EditProductsComponent } from './product/edit-products/edit-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin/admin.component';
import { CartComponent } from './cart/cart/cart.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { OrderPlaceComponent } from './order-place/order-place.component';

const routes: Routes = [
                        { path:'' , redirectTo:'/home', pathMatch:'full'}, //by default page display
                        { path:'user',component:UserComponent,
                          children : [
                                       { path:'registration',component:RegistrationComponent},
                                       { path:'login',component:LoginComponent}
                                     ] 
                        },
                        { path:'product',component:ProductComponent,
                          children : [
                                       { path:'add-product',component:AddProductComponent},
                                       { path:'get-product',component:GetProductsComponent},
                                       { path:'edit-product/:id',component:EditProductsComponent},
                                       { path:'product-details/:productid',component:ProductDetailsComponent}
                                     ]
                        },
                        { path:'home',component:HomeComponent},
                        {path:'customer',component:CustomerComponent,canActivate:[AuthGuard],data:{permittedRoles:['customer']}},
                        {path:'admin', component:  AdminComponent,canActivate:[AuthGuard],data:{permittedRoles:['admin']}},
                        {path:'cart', component:CartComponent,canActivate:[AuthGuard],data:{permittedRoles:['customer']}},
                        {path:'forbidden', component:ForbiddenComponent},
                        {path:'order-place', component:OrderPlaceComponent}
                       ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
