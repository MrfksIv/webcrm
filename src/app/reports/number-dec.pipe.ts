import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberDec'
})
export class NumberDecPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if( !isNaN(value)) 
    	return parseFloat(value).toFixed(2); 
    else {
    	return value;
    }

  }

}
