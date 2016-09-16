import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadDataService } from '../load-data.service';
import { Observable } from 'rxjs/Rx';
import * as d3 from 'd3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  providers: []
})

export class HomeComponent implements OnInit{


  private test: string = "ohmymy";

  private name : string;
  private lastRun : string;
  
  private data;
  private status: string = "not loaded yet";

  constructor(private loadService: LoadDataService) {

  }

  ngOnInit () {
    this.name = this.loadService.getSnapshotName();
      this.lastRun = this.loadService.getSnapShotModified();
  }


  onSubmit(f : NgForm) {
    this.loadService.loadFromCsv('reports_csv/'+this.name);
      var that = this;
      setTimeout(function(){
        that.data = that.loadService.getData();
      },100);

      console.log(this.data);
    }


  onChange(event) {
      console.log(event.srcElement.files[0]);
      this.loadService.setSnapshotName(event.srcElement.files[0].name);
      this.loadService.setSnapShotModified(this.formatDate(event.srcElement.files[0].lastModifiedDate));
  
      this.name = this.loadService.getSnapshotName();
      this.lastRun = this.loadService.getSnapShotModified();
  }
 


  formatDate(date : Date) {
  	return (date.getMonth() + 1) + 
    "/" +  date.getDate() +
    "/" +  date.getFullYear();
  }

}


