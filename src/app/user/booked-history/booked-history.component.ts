import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as moment from 'moment'
@Component({
  selector: 'app-booked-history',
  templateUrl: './booked-history.component.html',
  styleUrls: ['./booked-history.component.css', '../user-page/user-page.component.css']
})
export class BookedHistoryComponent implements OnInit {  
  bookings
  spaces
  user
  booked = false;
  isloaded = false
  constructor(private dispatcher: DispatcherService, private flashMessage: FlashMessagesService) { }

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
    console.log(start)
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
