import { DispatcherService } from './dispatcher.service';
import {  Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  
  constructor(private dispatcher: DispatcherService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.dispatcher.isLoggedIn()){    
        // document.getElementById("triggerLogin").click()   
        this.dispatcher.showModal()
        return false;
      }else{
       
        return true
      }
  }
  
}
