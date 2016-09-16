import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../load-data.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { MonthDatePipe } from '../month-date.pipe';
import { NumberDecPipe } from '../number-dec.pipe';
import { NumberIntPipe } from '../number-int.pipe';
import { ThousandSepPipe } from '../thousand-sep.pipe';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css'],
})
export class SnapshotComponent implements OnInit {

	private name : string;
	private lastRun : string;
	public data;
	public loaded = false;
	headers = [];

	stores = [];
	tableData = [];
	tableData2 = [];

	constructor(private loadService: LoadDataService) { }

  	ngOnInit() {
  		this.data = this.loadService.getData()
  		console.log("init called");

  		this.refresh();
  		
  	}

  	refresh() {
  		this.data = this.loadService.getData();
  		console.log(this.data);
  		if(this.data){
  			this.getHeaders();
  			this.getTableData();
  			//remove the below later
  			//this.getTableData2();
  		}
  	}

  	clear() {
  		this.data = [];
  	}



  	test() {
  		//console.log(this.loadService.getData());

  		let stream1$ = new Observable( observer => {
  			this.data = this.loadService.getData();
  			observer.next(this.loadService.getData());
  		});

  		stream1$.subscribe(dataReceived => {

  			//this.data = dataReceived;
  			this.loaded=true;

  		});
  	}


	getHeaders() {
		
		for (let key in this.data[0]) {
			this.headers.push(key);
		}

	}

	getTableData() {
		for(let i=0; i < this.data.length; i++){
			let tempArr = []
				let t=0;
				for (let key in this.data[i]){
					if(t !== 2)
						tempArr.push(this.data[i][key]);
					
					if(key==='store' && this.stores.indexOf(this.data[i][key]) === -1)
						this.stores.push(this.data[i][key]);
					t++;
				}
			
			this.tableData.push(tempArr);
			console.log(this.stores);
		}
	}

	getTableData2(){
		this.tableData2 = this.data.splice(1);
		console.log("---2:-----");
		console.log(this.tableData2);
	}

}


