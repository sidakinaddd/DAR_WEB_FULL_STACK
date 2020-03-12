import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';
import { Category } from '../shared/category.types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private categoriesService: CategoriesService){}

  categories: Category[];

  ngOnInit() :void {
    this.categoriesService.getAll().subscribe(data=>{
      this.categories=data;
      console.log(this.categories);
    })
  }

}
