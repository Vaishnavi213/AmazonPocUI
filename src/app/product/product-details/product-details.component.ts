import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  productId: any;
  description: any[];
  constructor(private pro: ProductService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.router.snapshot.paramMap.get('productid');
    console.log(this.productId);
    if (this.productId) {
      this.pro.getProductbyId(this.productId).subscribe(
        (res: any) => {
          console.log(res),
            this.product = res;
            this.description = this.product.description;
            

          console.log(this.description);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}