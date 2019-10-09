import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {
  products : any;
  product_Id : number;
  id;

  constructor(private pro:ProductService,private router :Router) { }

  ngOnInit() {
    this.pro.GetProduct()
    .subscribe(
      (res : any) => {
        console.log(res),
        this.products = res;
      },
    );
  }

  deleteProduct(productId) {
    const ans = confirm("do you want to delete the product");
    if (ans) {
      this.product_Id = this.products.productId;
      this.pro.deleteProductinDb(productId)
        .subscribe(() => {
          this.ngOnInit();
        });
    }
  }

  categoryDetails:any[];
  onEnter()
  {
    this.pro.loadCategoryFromDB().subscribe
    (
      posts=>
      {        
        this.categoryDetails=posts
      }
    );
  }

 
}
