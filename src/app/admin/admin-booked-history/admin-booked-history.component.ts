import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { DispatcherService } from 'src/app/dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-admin-booked-history',
  templateUrl: './admin-booked-history.component.html',
  styleUrls: ['./admin-booked-history.component.css','../admin-home/admin-home.component.css']
})
export class AdminBookedHistoryComponent implements OnInit {
  bookings
  spaces
  user
  booked = false;
  constructor(private dispatcher: DispatcherService, private flashMessage: FlashMessagesService) { }

  ngOnInit(): void {
    this.dispatcher.getUserData().subscribe((data : any) =>{
      console.log(data)
      this.spaces = data.space
      this.user = data.user
      this.booked = true
      
    })
  }
  calcDuration(start, end){
    console.log()
    var a = moment(start);
    var b = moment(end);
    let hoursago = b.diff(a, 'hours')
    if(hoursago > 24){
      if(hoursago == 24 || hoursago < 48){
        return b.diff(a, 'days') + 'day'
      }
      return b.diff(a, 'days') + 'days'
    }else{
      return hoursago + 'hr'
    }

  }
  toDateString(date){
    return new Date(date).toLocaleDateString()
  }
}