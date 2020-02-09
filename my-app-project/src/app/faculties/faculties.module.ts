import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyListItemComponent } from './faculty-list-item/faculty-list-item.component';

import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultyResolver } from '../faculties/faculty.resolver';
const routes:Route[]=[
  {path:'',component :FacultyListComponent},
  {path:'faculty/:id',component:FacultyComponent,
  resolve:{
    faculty:FacultyResolver
  }
  },
  {path:'faculty',component:FacultyComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [FacultyComponent]
})

export class AppRoutingModule {}
@NgModule({
  declarations: [FacultyComponent, FacultyListComponent, FacultyListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    FacultyResolver
  ]
})
export class FacultiesModule { }
