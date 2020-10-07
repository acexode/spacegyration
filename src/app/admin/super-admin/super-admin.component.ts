import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // location.reload();
    console.log('object')
    $.getScript('/src/assets/js/app.js');
  }

}
