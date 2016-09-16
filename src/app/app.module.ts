import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { SnapshotComponent } from './reports/snapshot/snapshot.component';
import { CrmComponent } from './reports/crm/crm.component';

import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoadDataService } from './load-data.service';
import { MonthDatePipe } from './reports/month-date.pipe';
import { NumberDecPipe } from './reports/number-dec.pipe';
import { NumberIntPipe } from './reports/number-int.pipe';
import { ThousandSepPipe } from './reports/thousand-sep.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SnapshotComponent,
    CrmComponent,
    HomeComponent,
    MonthDatePipe,
    NumberDecPipe,
    NumberIntPipe,
    ThousandSepPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    
  ],
  providers: [LoadDataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
