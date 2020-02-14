import { CanActivate,ActivatedRouteSnapshot, Router } from '@angular/router'
import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
    constructor(private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot):boolean{
        const auth=localStorage.getItem('token');
        if(auth){
            return true;
        }else{
            this.router.navigate(['/login'])
            return false;
        }
        
    }
 
}
//registration
//log out