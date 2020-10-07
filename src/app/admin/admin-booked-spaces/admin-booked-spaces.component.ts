import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as moment from 'moment'
@Component({
  selector: 'app-admin-booked-spaces',
  templateUrl: './admin-booked-spaces.component.html',
  styleUrls: ['./admin-booked-spaces.component.css','../admin-home/admin-home.component.css']
})
export class AdminBookedSpacesComponent implements OnInit {
  bookings
  spaces
  user
  booked = false;
  isloaded = false
  constructor(private dispatcher: DispatcherService, private flashMessage: FlashMessagesService) { }

  ngOnInit(): void {
    this.isloaded = true
    this.dispatcher.bookedSPaces().subscribe((data : any) =>{
      console.log(data)
      this.spaces = data.spaces
      this.user = data.user
      this.booked = true
      this.isloaded = false
    })
  }
  calcDuration(end){
    console.log()
    var a = moment(new Date());
    var b = moment(end);
    let hoursago = b.diff(a, 'hours')
    if(hoursago > 24){
      if(hoursago == 24 || hoursago < 48){
        return b.diff(a, 'days') + 'day left'
      }
      return b.diff(a, 'days') + 'days left'
    }else if(hoursago > 1){
      return hoursago + 'hr left'
    }else{
      return "expired"
    }

  }
  toDateString(date){
    return new Date(date).toLocaleDateString()
  }

}
