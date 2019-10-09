import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private Dbpro:ProductService) {}

  ngOnInit() {
  }
  AddProduct(nf:NgForm) {
    console.log("inside add product");
    console.log(nf.value);
    this.Dbpro.AddproducttoDb(nf.value).subscribe(ResponseData => 
      {
          console.log(ResponseData);
      }
        ) ; 
  }

  categoryDetails:any[];
  onEnter()
  {
    this.Dbpro.loadCategoryFromDB().subscribe
    (
      posts=> { this.categoryDetails=posts }
    );
  }

}

