import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }
  AddUsertoDb(user : any) 
  {
    return this.http
    .post('http://localhost:5000/api/register/',user)
    .subscribe( ResponseData => {
                  console.log(ResponseData);
                }
     );
  } 

  getUsers() {
    return this.http.get('http://localhost:5000/api/customers');
   }

  Login(logOn : any) {
    return this.http.post('http://localhost:5000/api/Login1', logOn);
  }

  public AddAddressInfo(addresses: any) 
  {
    console.log(addresses);
    return this.http.post('http://localhost:5000/api/addresses', addresses)
  }
}
