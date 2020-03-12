import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from '../shared/categories.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Category } from '../shared/category.types';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  form: FormGroup;
  category: Category;
  formSubmitted=false;

  constructor(
    private categoriesService:CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit():void {

    // this.route.paramMap.subscribe(params=>{
    //   if(params.get('id')){
    //     this.categoriesService.getById(+params.get('id'))
    //   }
    // })
    this.form = new FormGroup({
      name: new FormControl('',Validators.required)
    });

    this.route.params.subscribe(params=>{
      if(params.id){
        this.categoriesService.getById(params.id)
        .subscribe(category=>{
          if(category){
            this.category=category;
            this.form.patchValue(category);
          }
        })
      }
    })
    
  }

  onSubmit(){
    this.formSubmitted=true;

    
    for(const i in this.form.controls){
      if(this.form.controls[i]){
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
      }
    }



    if(!this.form.valid){
      return;
    }
   
    const newCategry={
      name: this.form.get('name').value,
    }

    if(this.category){
      this.category= {...this.category, ...newCategry};
      this.categoriesService.update(this.category)
      .subscribe(res=>{
        this.router.navigate(['home','categories']);
      });
      return;
    }
    
    this.categoriesService.create(this.form.value)
    .pipe(catchError(()=>of(null)))
    .subscribe(res=>{
      if(res && res.id){
        this.router.navigate(['home','categories']);
      }
    })


  }

}
