import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRestService } from '../shared/user-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor( 
    private router:Router,
    private userRestService:UserRestService
    ) { }

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
    const authUser = {
      username:this.form.get('login').value,
      password:this.form.get('password').value
    };
    
    this.userRestService.auth(authUser).subscribe(res => {
      
      console.log(res['token']);
      localStorage.setItem('token',res['token']);
      this.router.navigate(['/']);
    });
    
  }
  logout(){
    localStorage.clear();
  }

}
