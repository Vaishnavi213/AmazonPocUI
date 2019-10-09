import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from 'src/app/shared/cart.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  model = new Cart();
  cart: any=[];
  y = new Cart();
  userId: any;
  totalPrice = 0;
  totalQuantity = 0;

  constructor(private _cart: CartService, private router: Router, private _prod: ProductService, private user: UserService) { }

  ngOnInit() {
    this.userId = + localStorage.getItem('custId');
    this._cart.getCartfromApi(this.userId).subscribe(
      (res: any) => {
        this.cart = res;
        this.totalPrice = this.cart.map(o => o.total).reduce((a, c) => a + c);
        this.totalQuantity = this.cart.map(o => o.Quantity).reduce((a, c) => a + c);
        console.log(this.cart);
      },
      err => {
        console.log(err);
      }
    )
  }
  role;
  newrole;
  showRole() {
    this.role = localStorage.getItem('role');
    console.log(JSON.parse(this.role));
  }

  CartTotal() {
    this.y.CustomerId = + localStorage.getItem('id');
    this._cart.CartTotal(this.y).subscribe((res: any) => {
      localStorage.setItem('total', res);
      this.totalPrice = +localStorage.getItem('total');
      console.log(this.totalPrice);
      console.log("this is total");
      this.ngOnInit();
    });
  }


  AddCart(id:number){
    console.log(id);
    this.model.CustomerId = +localStorage.getItem('custId'); 
    this.model.Product_Id=id;
    this.model.Quantity=1;
 
     this._prod.AddToCart(this.model).subscribe((res:any)=>{
      console.log(res);  
      this.ngOnInit()
     });
  }

//   RemoveFromCart(id: any) {
//     if (this.cart) {
//       this.cart.Quantity = 1;
//       this._cart.RemoveCart(this.cart).subscribe()
//     };
//   }
// }

RemoveFromCart(cartId : any) {
  if(confirm("are you sure")) {
    this._cart.RemoveCart(cartId).subscribe(
      (res) => {}, (err) => {});
      this.ngOnInit();
    }
  }
}
