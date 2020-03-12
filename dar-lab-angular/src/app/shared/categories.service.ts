import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category.types';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService{

    host = 'http://localhost:8080';
    constructor(private httpClient: HttpClient){}

    getAll():Observable<Category[]>{
        return this.httpClient.get<Category[]>(`${this.host}/categories`);
    }

    create(category:Category){
        return this.httpClient.post<Category>(`${this.host}/categories`,category);
    }

    getById(id:number){
        return this.httpClient.get<Category>(`${this.host}/categories/${id}`);
    }
    update(category:Category){
        return this.httpClient.put<any>(`${this.host}/categories/${category.id}`,category);
    }
}