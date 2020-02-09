import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor( private router:Router) { }

  ngOnInit() {

    this.form=new FormGroup({
      login: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    })
  }
  login(){
    if(!this.form.valid){
      return;
    }
    
       var ok=false;
      for(var i=0;i<localStorage.length;i++){
         var key=localStorage.key(i);
         var value=localStorage.getItem(key);
         if(key==this.form.controls['login'].value && value==this.form.controls['password'].value){
            ok=true;
            break;
         }
      }
      // 
      if(ok){
        this.router.navigate(['/']);
        console.log(ok);
      }else{
        console.log("not ok");
      }
  }
  logout(){
    localStorage.clear();
  }

}
