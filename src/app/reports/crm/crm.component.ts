import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../load-data.service';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {

  constructor(private loadService: LoadDataService) { }

  ngOnInit() {
  }

  print() {
  	console.log(this.loadService.getData());
  }

}
