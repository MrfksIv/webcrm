import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthDate'
})
export class MonthDatePipe implements PipeTransform {

	monthObj = {
		"_01": "Jan",
		"_02": "Feb",
		"_03": "Mar",
		"_04": "Apr",
		"_05": "May",
		"_06": "Jun",
		"_07": "Jul",
		"_08": "Aug",
		"_09": "Sep",
		"_10": "Oct",
		"_11": "Nov",
		"_12": "Dec",
	}

  	transform(value: any, args?: any): any {
    
  		if (typeof value === "string" && value.slice(0,2)==="M_") {
  			return this.monthObj[value.slice(value.length-3, value.length)] +" "+ value.slice(4,6);
  		}
    	return value;
  	}

}
