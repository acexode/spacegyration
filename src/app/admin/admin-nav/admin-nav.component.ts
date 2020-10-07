import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css','../admin-home/admin-home.component.css']
})
export class AdminNavComponent implements OnInit {
  super_admin = false
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url.includes('super')){
      this.super_admin = true
    }
  }

}
