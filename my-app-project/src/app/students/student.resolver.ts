import { Resolve } from '@angular/router';
import { Student } from '../students/students.types'
import { Injectable } from '@angular/core';
import { StudentRestService } from '../shared/student-rest.service'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class StudentResolver implements Resolve<Student>{
    constructor(private studentRestService:StudentRestService){}
    resolve(route:ActivatedRouteSnapshot): Observable<Student>{
        return this.studentRestService.getStudent(route.paramMap.get('id'));
        
    }
}