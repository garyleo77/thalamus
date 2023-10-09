import { Component } from '@angular/core';

@Component({
  selector: 'app-interviewers-list',
  templateUrl: './interviewers-list.component.html',
  styleUrls: ['./interviewers-list.component.css']
})
export class InterviewersListComponent {
  rows = [];
  columns = [{
    prop: 'name'
  }];
  constructor() {
    this.rows = [{ 
      name: 'Hiram Lodge',
    },{
      name: 'Cheryl Blossom',
    }]
  }
}
