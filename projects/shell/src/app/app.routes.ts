import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProgramDetailsComponent } from './program/program-details/program-details.component';
import { InterviewersListComponent } from './interviewers/interviewers-list/interviewers-list.component';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    children: [

      {
        path: '',
        component: ProgramDetailsComponent,
        outlet: 'program',
      },
      {
        path: '',
        component: InterviewersListComponent,
        outlet: 'interviewers',
      },
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'mfe1',
            exposedModule: './Module',
          }).then((m) => m.MfeModule),
        pathMatch: 'full',
        data: {
          users: [{
            name: 'Andrés Brainstem',
            timeAvailable: '1h 30m',
            timeRequested: '2h',
            timeOverage: '30m',
            },{
              name: 'Batilda Brain',
              timeAvailable: '1h 30m',
              timeRequested: '2h',
              timeOverage: '30m',
            },{
              name: 'Chandra Cortex',
              timeAvailable: '1h 30m',
              timeRequested: '2h',
              timeOverage: '30m',
          }]
        },
      },
      {
        path: '',
        outlet: 'mfe1',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'mfe1',
            exposedModule: './Module',
          }).then((m) => m.MfeModule),
        pathMatch: 'full',
        data: {
          users: [{
            name: 'Archie Andrews',
            timeAvailable: '30m',
            timeRequested: '1h 30m',
            timeOverage: '1h',
              },{
                name: 'Betty Cooper',
                timeAvailable: '1h',
                timeRequested: '1h 30m',
                timeOverage: '30m',
            },{
              name: 'Veronica Lodge',
              timeAvailable: '30m',
              timeRequested: '45m',
              timeOverage: '15m',
          }]
        },
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
