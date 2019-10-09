import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from '../product';
import { NgForm } from '@angular/forms';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  constructor(private activateroute:ActivatedRoute,private productService:ProductService ) { }
  proId
  product: Product ;
  productId : any ;
  productName: any ;
  price: any ;
  image: any ;
  description: any ;
  quantity: any ;

  ngOnInit() {
    this.onUpdate();
  }

  onUpdate()
  {
    this.proId = +this.activateroute.snapshot.paramMap.get('id');
   // console.log(this.proId);
    this.productService.getProductbyId(this.proId).subscribe(
      (responsed:any)=>
      {
      console.log("Inside response")
      console.log(responsed)
      this.product=responsed;
      this.productId=this.product.productId;
      this.productName=this.product.productName;
      this.price=this.product.price;
      this.image=this.product.image;
      this.description=this.product.description;
      this.quantity=this.product.quantity;
    
      console.log(this.product)
     },
     (errorRespo) => {
      console.log("inside produc")
     }
     );
  }

  updateProduct(nf:NgForm)
  {
    this.productService.updateProductInDb(this.proId,nf.value)
    .subscribe()
  };
}
