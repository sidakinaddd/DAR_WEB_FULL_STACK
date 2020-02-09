import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../students.types';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent implements OnInit {
  @Input()student :Student;
  constructor() { }

  ngOnInit() {
  }

}
