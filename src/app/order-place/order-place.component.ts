import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.css']
})
export class OrderPlaceComponent implements OnInit {

  constructor(private ad:UserService) { }

  ngOnInit() {
  }
  AddAddress(nf:NgForm) {
    console.log(nf.value);
    this.ad.AddAddressInfo(nf.value).subscribe(ResponseData => 
      {
          console.log(ResponseData);
      }
        ) ; 
  }

}
