import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoadDataService } from '../../load-data.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { MonthDatePipe } from '../month-date.pipe';
import { NumberDecPipe } from '../number-dec.pipe';
import { NumberIntPipe } from '../number-int.pipe';
import { ThousandSepPipe } from '../thousand-sep.pipe';

import * as d3 from 'd3';


@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css'],
})
export class SnapshotComponent implements OnInit  {

	private name : string;
	private lastRun : string;
	public data;
	public loaded = false;
	headers = [];

	stores = [];
	filteredStores= [];
	tableData = [];
	filteredTableData = [];

	allMonths = [];
	filteredMonths = [];
	objectData = [];

	elem;

	constructor(private loadService: LoadDataService, private viewContainerRef : ViewContainerRef) { }

  	ngOnInit() {
  		this.data = this.loadService.getData()
  		console.log("init called");
  		this.refresh();  
  		this.elem = this.viewContainerRef.element.nativeElement;
  	}

  	refresh() {
  		this.data = this.loadService.getData();
  	//	console.log(this.data);
  		if(this.data){
  			this.getHeaders();
  			this.getTableData();
  		}
  	}

	getHeaders() {
		let t = 0;
		for (let key in this.data[0]) {
			if(t !== 2) 
				this.headers.push(key);
				if (t >=3)
					this.allMonths.push(key);
			t++;	
		}
		console.log(this.allMonths);
	}

	getTableData() {
		let tempStores = [];
		for(let i=0; i < this.data.length; i++){
			
			let tempArr = []
			let t=0;
			let obj = {};
			
			for (let key in this.data[i]){
				if(t !== 2) {
					tempArr.push(this.data[i][key]);
					obj[key] = this.data[i][key];
				}
					
				if(key==='store' && tempStores.indexOf(this.data[i][key]) === -1){
					tempStores.push(this.data[i][key]);
					this.stores.push({name: this.data[i][key], selected:true});
				}
				t++;
			}
			
			this.tableData.push(tempArr);
			this.objectData.push(obj);

		}
		this.filteredStores = this.stores.filter( function(elem){ return elem.selected});
		this.getFilteredData();
	}

	getFilteredData(){
		this.filteredStores = this.stores.filter( function(elem){ return elem.selected});
		console.log(this.filteredStores[0].name);
		
		let that = this;
		
		this.filteredTableData = this.tableData.filter( function(elem) {
			for (let i=0; i < that.filteredStores.length; i++) {
				if (elem.indexOf(that.filteredStores[i].name) !== -1)
					return true;
			}
			return false;
				
		});

		console.log(this.filteredTableData); 
	}

	test(){
		console.log("trigger!");
		d3.select(this.elem).select("h3").append("table")
			.;
  	
	}

}


