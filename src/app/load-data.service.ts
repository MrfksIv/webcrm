import { Injectable, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import * as d3 from 'd3';

@Injectable()
export class LoadDataService  {


	pushedData = new EventEmitter<string>();

	private loadedData;
	private snapshotFileName : string;
	private snapshotModified : string;
	private loading :boolean = false;
  	constructor() { }

  	loadFromCsv(fileName : string) {
  		this.loading = false; 
  		let that = this; 		
  		d3.csv(fileName, function(data) {
  			console.log(data);
  			that.loadedData = data;
		})
	}

	//same as above using arrow function
	loadFromCsv2 = fileName => {
		d3.csv(fileName, (data) => {
			//console.log(data);
			this.loadedData =data;
		}); 
	}


	getData() {
		return this.loadedData;
		
	}

	getStatus(){
		return this.loading;
	}

	pushData(value) {
		this.pushedData.emit(value);
	}

	setSnapshotName(name: string) {
		this.snapshotFileName = name;
	}

	setSnapShotModified(modified: string) {
		this.snapshotModified = modified;
	}

	getSnapshotName() {
		return this.snapshotFileName;
	}

	getSnapShotModified() {
		return this.snapshotModified;
	}
}

var mydelay = (text, del) => {
	setTimeout( () => {
		console.log(text);
	},del)
}


