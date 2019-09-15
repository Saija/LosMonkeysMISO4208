import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationsComponent } from './applications.component';
import { LoginComponent } from '../login/login.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { NoAppsFoundComponent } from './no-apps-found/no-apps-found.component';
import { AppListComponent } from './app-list/app-list.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsComponent,
    data: {
      title: 'Aplicaciones'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'new',
        component: NewApplicationComponent,
        data: {
          title: "Nueva App"
        }
      },
      {
        path: 'no-apps-found',
        component: NoAppsFoundComponent,
        data: {
          title: "Sin Apps"
        }
      },
      {
        path: 'list',
        component: AppListComponent,
        data: {
          title: "Listado"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
