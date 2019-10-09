import { PipeTransform,Pipe } from '@angular/core';
import { Product } from '../product/product';

@Pipe(
    {
        name:'filterProduct'
    }
)
export class FilterProductPipe implements PipeTransform
{
    transform(product:Product[],searchText:string):Product[]
    {
        if(!product || !searchText)
        {
            return product;
        }
        return product.filter(product=>
            product.productName.toLowerCase().indexOf(searchText.toLowerCase())!== -1);
        }
}