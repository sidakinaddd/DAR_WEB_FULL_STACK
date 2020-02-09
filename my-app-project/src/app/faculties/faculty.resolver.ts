import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Faculty } from '../faculties/faculty.types'
import { FacultyListItemComponent } from './faculty-list-item/faculty-list-item.component';
import { Injectable } from '@angular/core';
import { FacultyRestService } from '../shared/faculty-rest.service';
import { Observable } from 'rxjs'

@Injectable()
export class FacultyResolver implements Resolve<Faculty>{
    constructor(private facultyRestService:FacultyRestService){}
    resolve(route:ActivatedRouteSnapshot): Observable<Faculty>{
        return this.facultyRestService.getFaculty(route.paramMap.get('id'));
        
    }
}