import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  constructor(private router:Router,private Dbpro:ProductService) { }
   
  userName = localStorage.getItem('Custname');
  role = localStorage.getItem('role');
  token=localStorage.getItem('token');
  public temp:any;
  ngOnInit() {
    this.temp = this.token;
    console.log(this.temp, "temp");
  }

  logOut()
  {
    localStorage.removeItem('token');
    localStorage.clear();
    this.temp = '';
    console.log(this.temp, "temp");
    this.router.navigateByUrl('/home');
  }

  categoryDetails:any[];
  onEnter()
  {
    this.Dbpro.loadCategoryFromDB().subscribe
    (
      posts=>
      {        
        this.categoryDetails=posts
      }
    );
  }

}
