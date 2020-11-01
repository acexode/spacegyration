import { Router } from '@angular/router';
import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as moment from 'moment'
moment().format();
@Component({
  selector: 'app-booked-spaces',
  templateUrl: './booked-spaces.component.html',
  styleUrls: ['./booked-spaces.component.css','../user-page/user-page.component.css']
})
export class BookedSpacesComponent implements OnInit {
  bookings
  spaces
  user
  booked = false;
  isloaded: boolean = false;
  constructor(private dispatcher: DispatcherService, private flashMessage: FlashMessagesService,private router: Router) { }

  ngOnInit(): void {
    this.isloaded = true
    setTimeout(()=>{
      this.dispatcher.getUserData().subscribe((data : any) =>{
        console.log(data)
        this.spaces = data.space
        this.user = data.user
        this.booked = true
        this.isloaded = false
        
      })

    },1000)
  }
  calcDuration(start, end){
    var a = moment(start);
    var b = moment(end);
    return b.diff(a)

  }
  gotoBook(index) {
    console.log(index);   
    this.router.navigate(['space/booking', { data: index }]);
  }

}
