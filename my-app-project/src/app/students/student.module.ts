import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { StudentResolver } from './student.resolver';

const routes:Route[]=[
  {path:'',component:StudentListComponent},
  {path:'student/:id',component:StudentComponent},
  {path:'student',component:StudentComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [StudentComponent]
})

export class AppRoutingModule {}

@NgModule({
  declarations: [
    StudentListComponent,
    StudentListItemComponent,
    StudentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    StudentResolver,
  ]
})
export class StudentsModule { }
