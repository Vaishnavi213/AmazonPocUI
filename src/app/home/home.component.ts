import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: string;
  products: any;
  cartobj: Cart;
  productid: any;
  userId: Number;
  constructor(private pro: ProductService, private router: Router) { }

  ngOnInit() {
    this.userId = +localStorage.getItem('custId');
    this.pro.GetProduct()
      .subscribe(
        (res: any) => {
          console.log(res),
            this.products = res;
        }
      );

    this.pro.getProductbyId(this.productid)
      .subscribe(
        res => {
          console.log(res),
            this.products = res;
        },
      );
  }

  AddCart(id: any) {
    console.log(this.userId);
    this.cartobj = new Cart();
    this.cartobj.CustomerId = this.userId;
    this.cartobj.Product_Id = id;
    this.cartobj.Quantity = 1;
    this.pro.AddToCart(this.cartobj).subscribe((res: any) => {
      console.log(res);
    });
  }
}




