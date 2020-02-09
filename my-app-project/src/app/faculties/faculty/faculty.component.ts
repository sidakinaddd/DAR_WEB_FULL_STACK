import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Faculty } from '../faculty.types';
import { FacultyRestService } from 'src/app/shared/faculty-rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  form:FormGroup;
  formSubmitted=false;
  faculty:Faculty;
  constructor(
    private facultyRestService:FacultyRestService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl('',Validators.required),
    });

    this.route.data.subscribe(data => {
      if (data.faculty) {
        this.faculty=data.faculty;
        this.form.patchValue(data.faculty);
      }
    });

  }
  addFaculty() {
    this.formSubmitted = true;
    console.log(this.form)
    if (!this.form.valid) {
      return;
    }

    const newFaculty = {
      name: this.form.get('name').value,
    };

    if (this.faculty) {
      this.faculty = {...this.faculty, ...newFaculty};
      this.facultyRestService.updateFaculty(this.faculty)
        .subscribe(res => {
          this.router.navigate(['faculties']);
        });
      return;
    }
    this.facultyRestService.createFaculty(newFaculty)
      .subscribe(res => {
        console.log("ok");
        this.router.navigate(['faculties']);
      });
  }


}
