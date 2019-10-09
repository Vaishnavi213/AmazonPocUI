import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../product/product';
import { Cart } from '../cart/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService
 {
   constructor(private http: HttpClient) { }

   getProductbyId(id:number)
  {
  return this.http.get('http://localhost:5000/api/products/'+id);
  }

  AddToCart(item : any) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});                
    return this.http.post('http://localhost:5000/api/cart',item,{headers : headers})
  }
   
  public AddproducttoDb(products: any) 
  {
    console.log(products);
    return this.http.post('http://localhost:5000/api/products', products)
  }

   public GetProduct() {
     return this.http.get('http://localhost:5000/api/products')
   }

  

   public updateProductInDb( id:number,prod:Product){
     console.log(prod);
    return this.http.put('http://localhost:5000/api/products'+'/'+id, prod);
  }

  public deleteProductinDb(id:number){
    return this.http.delete('http://localhost:5000/api/products/' +id);
  }
  
  loadCategoryFromDB() {
    return this.http.get('http://localhost:5000/api/categories')
    .pipe(
      map(responseData => {
        const postsArray: any[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }
}
  