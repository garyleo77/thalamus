import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramDetailsComponent } from './program-details/program-details.component';



@NgModule({
  declarations: [
    ProgramDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgramDetailsComponent
  ]
})
export class ProgramModule { }
