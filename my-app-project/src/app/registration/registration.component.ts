import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form:FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {
    this.form=new FormGroup({
      login:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    })
  }
  register(){
    if(this.form.invalid){
      return;
    }else{
      // console.log("ok");
      localStorage.setItem(this.form.controls['login'].value,this.form.controls['password'].value);
      // localStorage.setItem('password',);
      this.router.navigate(['/login']);
    }
  }

}
