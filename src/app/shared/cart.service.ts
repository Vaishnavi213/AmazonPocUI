import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../cart/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  public GetCart(model: Cart) {
    debugger
    return this.http.get('http://localhost:5000/api/cart');
  }
 
  public getCartfromApi(userId){
    return this.http.get('http://localhost:5000/api/cart/getCarts/'+userId)
  
  }
 
  public RemoveCart(cartId: any){
    return this.http.delete('http://localhost:5000/api/cart/'+cartId)
  }
   
  public CartTotal(model:Cart){
    return this.http.post('http://localhost:5000/api/cart',model);
  }
 
}
