import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewersListComponent } from './interviewers-list/interviewers-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    InterviewersListComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  exports: [
    InterviewersListComponent
  ]
})
export class InterviewersModule { }
