import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { ApplicationsComponent } from './applications.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { NewApplicationComponent } from './new-application/new-application.component';
import { NoAppsFoundComponent } from './no-apps-found/no-apps-found.component';
import { AppListComponent } from './app-list/app-list.component';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ApplicationsService } from '../../services/applications.service';
import { CurrentUserService } from '../../services/current-user.service';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ ApplicationsComponent, NewApplicationComponent, NoAppsFoundComponent, AppListComponent ],
  providers: [
    CurrentUserService,
    ApplicationsService
  ],
})
export class ApplicationsModule { }
