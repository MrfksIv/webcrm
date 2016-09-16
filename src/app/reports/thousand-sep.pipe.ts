import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSep'
})
export class ThousandSepPipe implements PipeTransform {

  	transform(value: any, args?: any): any {
    	if( !isNaN(value)) 
    		return this.numberWithCommas(value);
    	else {
    		return value;
    	}
  	}


	numberWithCommas(x) {
    	var parts = x.toString().split(".");
    	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    	return parts.join(".");	
	}

}
