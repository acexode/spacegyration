import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space-footer',
  templateUrl: './space-footer.component.html',
  styleUrls: ['./space-footer.component.css']
})
export class SpaceFooterComponent implements OnInit {
  date = new Date();
  year;
  Company = ["Our Missions","Careers","Newsroom"] 
  qLink = ["Take a tour","Opportunities","Community"] 
  gInfo = ["Blog","Forum","Businesses"] 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.year = this.date.getFullYear()
  }
  goto(e){

  }
  openLogin() {
    
  }
  openSignup() {
    
  }
}
