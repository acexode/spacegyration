import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-space-nav',
  templateUrl: './space-nav.component.html',
  styleUrls: ['./space-nav.component.css']
})
export class SpaceNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goto(e){   
    console.log(e)
    this.router.navigate(['space/' + e]);
    

  }
}
