import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../students/students.types';
import { Faculty } from '../faculties/faculty.types';


@Injectable({
  providedIn: 'root'
})
export class FacultyRestService {

  host = 'http://ca-api.witharts.kz';

  constructor(private http: HttpClient) {

  }

  getFaculty(id: string): Observable<Faculty> {
    return this.http.get<Faculty>(`${this.host}/faculties/${id}`);
  }

  getFaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(`${this.host}/faculties`);
  }
  createFaculty(data: Faculty): Observable<Faculty> {
    return this.http.post<Faculty>(`${this.host}/faculties`, data);
  }

  updateFaculty(data: Faculty): Observable<Faculty> {
    console.log(data)
    return this.http.put<Faculty>(`${this.host}/faculties/${data.id}`, data);
  }
  deleteFaculty(data:Faculty){
      return this.http.delete(`${this.host}/faculties/${data.id}`);
  }
}