import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DispatcherService } from './dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private dispatcher: DispatcherService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.dispatcher.isLoggedIn() && this.dispatcher.userRole() == "super-admin"){    
        // document.getElementById("triggerLogin").click()   
        this.dispatcher.showModal()
        return false;
      }else{
       
        return true
      }
  }
  
}
