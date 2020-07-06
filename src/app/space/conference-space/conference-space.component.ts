import { SampleData } from './../bed-space/bed-space.component';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conference-space',
  templateUrl: './conference-space.component.html',
  styleUrls: ['./conference-space.component.css']
})
export class ConferenceSpaceComponent implements OnInit {

  spaces =  SampleData
  model;
  constructor(private dispatcher: DispatcherService, private router: Router, private form: FormsModule) { }

  ngOnInit() {
    const path = this.router.url;
    const index = path.lastIndexOf('/') + 1;
    const space = path.substring(index);
    console.log(space);

    this.dispatcher.spaceType(space).subscribe((res: any) => {
      console.log(res);
      this.spaces = res.space;
    }, error => {
      console.log('Error', error);
    });
  }

  gotoBook(index) {
    console.log(index);
    if (this.dispatcher.isLoggedIn()) {
      this.router.navigate(['space/booking', { data: index }]);
    } else {     
      

    }
  }

}