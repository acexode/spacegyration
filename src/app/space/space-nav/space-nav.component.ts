import { DispatcherService } from 'src/app/dispatcher.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-space-nav',
  templateUrl: './space-nav.component.html',
  styleUrls: ['./space-nav.component.css']
})
export class SpaceNavComponent implements OnInit {
  isLoggedIn = false
  constructor(private router: Router, private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    this.isLoggedIn = !this.dispatcher.isLoggedIn()
    console.log(this.isLoggedIn)
  }
  goto(e, title =''){   
    console.log(e)
    this.router.navigate(['space/' + e]);
  }
  gotoProfile(){
    const token = localStorage.getItem('token');
    let user = this.dispatcher.helper.decodeToken(token)
    if(user.role == 'user'){
      this.router.navigate(['/user'])
    }else if(user.role == 'admin'){
      this.router.navigate(['/admin'])
    }else if(user.role == 'super-admin'){
      this.router.navigate(['/super-admin'])
    }    
  }
  logout(){
    localStorage.clear();
    location.reload();
  }
}
