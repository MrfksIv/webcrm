import { RouterModule, Routes } from '@angular/router';

import { SnapshotComponent } from './reports/snapshot/snapshot.component';
import { CrmComponent } from './reports/crm/crm.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES : Routes = [
	{path: 'snapshot', component: SnapshotComponent} ,
	{path: 'crm', component: CrmComponent},
	{path: '', component: HomeComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
