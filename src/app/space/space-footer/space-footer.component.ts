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
 
  qLink = [{title: "Take a tour", url: "https://blog.lifthub.org/", },{title:"Opportunities", url:"https://blog.lifthub.org/opportunities/"},{title:"Community", url:"https://blog.lifthub.org/"}] 
  //gInfo = ["Blog","Forum","Businesses"] 
  Company = [
    {
      title:'Our Missions',
      url:'space/mission'
    },
    {
      title:'Careers',
      url:'https://blog.lifthub.org/opportunities/'
    },
    {
      title:'Newsroom',
      url:'https://blog.lifthub.org/news/'
    },
  ]
  gInfo = [
    {
      title:'Blog',
      url:'https://blog.lifthub.org'
    },
    {
      title:'Forum',
      url:'https://blog.lifthub.org/opportunities/'
    },
    {
      title:'Busineses',
      url:'https://blog.lifthub.org'
    },
  ]

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
