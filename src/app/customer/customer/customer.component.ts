import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Cart } from 'src/app/cart/cart';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private pro:ProductService,private router:Router,private user : UserService) { }
   
  products : any;
  cartobj = new Cart();
_prod:any;
 us : any;

  ngOnInit() {
    this.pro.GetProduct()
    .subscribe(
      (res : any) => {
        console.log(res),
        this.products = res;
      },
    );

    this.user.getUsers()
    .subscribe(
      (res : any) => {
        console.log(res),
        this.us = res;
      },
    );
  }

  logOut()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }

  AddCart(id:number){
    console.log(id);
    this.cartobj.CustomerId = +localStorage.getItem('custId'); 
    this.cartobj.Product_Id=id;
    this.cartobj.Quantity=1;
     this.pro.AddToCart(this.cartobj).subscribe((res:any)=>{
      console.log(res);
     });
  }
}



