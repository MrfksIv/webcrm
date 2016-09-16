import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberInt'
})
export class NumberIntPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if( !isNaN(value)) 
    	return parseFloat(value).toFixed(0); 
    else {
    	return value;
    }
  }

}
