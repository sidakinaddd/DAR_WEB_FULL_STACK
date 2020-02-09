import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty.types';
import { Router } from '@angular/router';
import { FacultyRestService } from 'src/app/shared/faculty-rest.service'

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {
  searchQuery='';
  faculties: Faculty[];
  facultiesToShow:Faculty[];
  constructor(
    private facultyRestService: FacultyRestService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.facultyRestService.getFaculties()
      .subscribe(faculties => {
        this.faculties = faculties;
        this.facultiesToShow = [...this.faculties];
      });

  }
  facultyClicked(faculty: Faculty) {
    this.router.navigate(['faculties/faculty', faculty.id]);
  }

  search() {
    if (!this.searchQuery) {
      this.facultiesToShow = [...this.faculties];
    }
    this.facultiesToShow = this.facultiesToShow.filter(f => f.name.includes(this.searchQuery));
  }
  delFaculty(curFaculty:Faculty){
    this.facultyRestService.deleteFaculty(curFaculty).subscribe(res=>{
      this.facultyRestService.getFaculties().subscribe(res=>{
        this.faculties=res;
        this.facultiesToShow=[...this.faculties];
      })
    })
    this.router.navigate(['faculties']);
  }
  // delStudent(student:Student){
  
  //   this.studentRestService.deleteStudent(student).subscribe(res=>{
  //     this.studentRestService.getStudents().subscribe(res=>{
  //       this.students=res;
  //       this.studentsToShow=[...this.students];
  //       // this.students=res;
  //     })
  //     // this.router.navigate(['students']);
  //     // this.students=res;
  //   })
  //   // this.router.navigate(['students']);

  // }

}
