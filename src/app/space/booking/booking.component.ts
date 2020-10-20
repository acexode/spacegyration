import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from 'src/environments/environment';

import { DispatcherService } from 'src/app/dispatcher.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
declare const M: any;
declare const getpaidSetup: any;
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  spaceData
  @ViewChild('startPicker') pickerStart;
  @ViewChild('endPicker') pickerEnd;
  @ViewChild('recurringDatePicker') recurringDatePicker;
  success = false;
  disabledSubmitButton = true; 
  DAY = 86400000;
  form: FormGroup;
  checkinOptions: FlatpickrOptions = {
    enableTime: true,
    altInputClass: 'date-picker',    
    dateFormat: 'd.m.Y',
    // defaultDate: new Date(),    
  };

  checkoutOptions: FlatpickrOptions = { 
    enableTime: true,   
    dateFormat: 'd.m.Y',
    defaultDate: new Date()
    
  };
  recurringOption: FlatpickrOptions = { 
    enableTime: true,   
    dateFormat: 'd.m.Y',    
    
  };
    checkInDate;
    checkInTime;
    checkOutDate;
    checkOutTime;
    recurringDate;
    allAmenities = [
      {label: 'Air Condition', value: 'air_condition', path: 'assets/img/aircon-icon.png'},
      {label: 'Refrigerator', value: 'refrigerator', path: 'assets/img/refrigerator.png'},
      {label: 'Projector', value: 'projector', path: 'assets/img/projector-icon.png'},
      {label: 'Sound system', value: 'sound_system', path: 'assets/img/sound-icon.png'},
      {label: 'TV', value: 'tv', path: 'assets/img/tv.png'},
      {label: 'WhiteBoard', value: 'whiteBoard', path: 'assets/img/whiteboard.png'},
      {label: 'Gym', value: 'gym', path: 'assets/img/gym.png'},     
    ]
    spaceAmenities = []
    errMsg = false;
    spacePrice  = 1000
    paymentSuccessful = false
    services = 0
    serviceList = []
    user
    serviceObject = {
      wifi: true,
      lunch: false, 
      dinner: false,
      alcohol: false,
      halal: false, 
      vegeterian: false,
      snacks: false,
      AC: true,
      projector: false,
      tv: true,
      breakfast: true,
      whiteBoard: false
    }
  similar: any;
  constructor(private dispatcher: DispatcherService, private route: ActivatedRoute, private formBuilder: FormBuilder, private flashMessage: FlashMessagesService, private router: Router) {
    this.form = formBuilder.group({
      checkin: [new Date(), Validators.required],
      checkout: [new Date(), Validators.required],
      recurringType: '',
      recurringDate: null
    });

    // Start Date Changes
    this.form.controls.checkin.valueChanges.subscribe(changes => {
      // console.log('start: ', changes);
      if (!changes[0]) return;
      const selectedDate = changes[0].getTime();
      const monthLaterDate = selectedDate + (this.DAY*30);
      // console.log(monthLaterDate > Date.now() ? new Date() : new Date(monthLaterDate));
      // this.pickerEnd.flatpickr.set({
      //   maxDate: monthLaterDate > Date.now() ? new Date() : new Date(monthLaterDate),
      //   minDate: new Date(selectedDate + this.DAY),
      // });
      // this.pickerEnd.flatpickr.setDate(monthLaterDate > Date.now() ? new Date() : new Date(monthLaterDate));
      // console.log(this.pickerEnd.flatpickr);
    });

    // End Date Changes
    this.form.controls.checkout.valueChanges.subscribe(changes => {
      console.log('end: ', changes);
      if (!changes[0]) return;
      // const selectedDate = changes[0].getTime();
      // this.pickerStart.flatpickr.set({
      //   maxDate: new Date( selectedDate - this.DAY)
      // });

    });
   }

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    setTimeout(() => this.success = true, 10000);
    this.dispatcher.getSingle(id).subscribe((data: any) => {
      this.spaceData = data.space;
      this.spacePrice = data.space.details.price
      console.log(data)
      let amenities = []
      let services = []
      for (const property in this.spaceData.assets) {
        if(this.spaceData.assets[property] == true){
          amenities.push(property)
        }
      }
      for (const property in this.spaceData.services) {
          this.serviceList.push({name: property, value : this.spaceData.services[property]})
      }
      console.log(this.serviceList)      
      this.spaceAmenities = this.allAmenities.filter(e =>{
        return amenities.includes(e.value)       
      })
      console.log(this.spaceAmenities)
      this.dispatcher.spaceType(data.space.category).subscribe((category:any) =>{
        console.log(category)
        this.similar = category.space
      })
      // console.log(data.space);
      // console.log(this.spacePrice);
      // console.log(this.minDate());
      // init form
      
    }); 
    this.dispatcher.getUserData().subscribe((data:any) => {
      console.log(data);
      this.user = data.user
    })
    console.log(this.checkInDate);
    //console.log(M.DatePicker.getInstance(this.elem('#checkInDate')))
  }

  // return id of elements 
  elem(elm) {
    return document.querySelector(elm);
   
  }

  // return last item in booking array of space
  minDate() {
    if (this.spaceData.bookings.length === 0) {
      return new Date();
    } else {
      // set date to last bookingEnd
      const lastItem = this.spaceData.bookings[this.spaceData.bookings.length - 1].bookingEnd;
      console.log(lastItem);     
      return new Date(lastItem);
    }
  }


  bookSpace = ({ startDate, endDate, spaceId, recurringData, price }) => {
    const existingBookings = this.spaceData.bookings ;
    console.log(existingBookings);
    // Check if there is a clash and, if not, save the new booking to the database
    try {
      this.dispatcher.bookSpace(
        { startDate, endDate, spaceId, recurringData, price },
        existingBookings
      ).then((space: any) => {
           // If the new booking is successfully saved to the database
           if (space) {
             this.payWithRave(space);
              // console.log(payWithRave());

           }
      });

    } catch (err) {
      // If there is a booking clash and the booking could not be saved
      alert(
        `Your booking could not be saved. Please ensure it does not clash with an existing booking
         and that it is a valid time in the future.`
      );
      console.log(err);
      console.log(err.response.data.error.message.match(/error:.+/i)[0]);
    }
  }

  handleEndDate(dateArray) {
    const recurringEndDate = [];
    dateArray.forEach(item => {
      recurringEndDate.push(parseInt(item));
    });
    return recurringEndDate;
  }
  // Format the recurring data into an array
  handleRecurringData(type, date) {
    let recurringData = [];
    if (type !== 'none' && type !== null) {
      recurringData = [ date, type];
      // recurringData[0][1] = recurringData[0][1] - 1
    } else {
        recurringData = [];
    }
    return recurringData;
  }
  payWithRave(space) {
    console.log('initialize payment');
    let lastBooking = space.bookings[space.bookings.length - 1];
    console.log(lastBooking);
    console.log('current space');
    console.log(space);

    const x = getpaidSetup({
        PBFPubKey: environment.PBFPubKey,       
        customer_email: this.user.email,
        amount: this.services + this.spacePrice,
       // customer_phone: '',
        currency: 'NGN',        
        txref: 'rave-123456',
        meta: [{
            metaname: 'flightID',
            metavalue: 'AP1234'
        }],
        onclose : (response) => {

            if(this.paymentSuccessful){
              alert('payment successful');
            }else{
              this.dispatcher.deleteBooking(lastBooking.spaceId, lastBooking._id).subscribe(() => {
                alert('booking failed');
              });
            }
        },
        callback : (response) => {
            let txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
            console.log(response);
            if (response.tx.chargeResponseCode === '00' ||  response.tx.chargeResponseCode === '0' ) {
                // redirect to a success page
                console.log(response);
                const details = {
                  amount: response.tx.amount,
                  spaceId:  lastBooking.spaceId,
                  customer: lastBooking.user,
                  name : space.details.name,
                  bookingStart : lastBooking.bookingStart,
                  bookingEnd : lastBooking.bookingEnd,
                  owner : space.owner_id,
                  txref : response.txref
                }
                this.paymentSuccessful = true
                console.log('details');
                console.log(details);
                // alert('payment successful');              
                this.dispatcher.transaction(details).subscribe(data =>{
                  this.onSuccess.emit(space.spaceType);
                  this.router.navigate(['/user/booked-history']);
                })
            } else {
                // redirect to a failure page.
                this.dispatcher.deleteBooking(lastBooking.spaceId, lastBooking._id).subscribe(() => {
                  alert('booking failed');
                });
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}
  FieldsChange(event:any){
  console.log(event.currentTarget.id);
  if(event.currentTarget.checked){
        // this.serviceObject[event.currentTarget.id] = true
        this.services  += parseInt(event.currentTarget.value);
  }else{
    // this.serviceObject[event.currentTarget.id] = false
    this.services -= parseInt(event.currentTarget.value);
  }
  
      
  }
  onSubmit() {    
    const startDate = this.form.value.checkin[0];
    const endDate = this.form.value.checkout[0];
    const recurringType = this.form.value.recurringType;
    console.log(recurringType)
    console.log(this.form.value.recurringDate)
    let recurringData = [];
    let recurringDate
    if(this.form.value.recurringDate != null){
      recurringDate = this.form.value.recurringDate[0];
      recurringData = this.handleRecurringData(recurringType, recurringDate);
      
    }
    // console.log(this.form.value)  
    // console.log(startDate,endDate)    
    // console.log(recurringType)
    // console.log(recurringData)
    // console.log(recurringDate)

    if (startDate === '' || endDate === '') {
       this.errMsg = true;
     } else {
      this.errMsg = false;
      const data = {
        startDate,
        endDate,
        spaceId:  this.spaceData._id,
        price : this.services + this.spacePrice,
        recurringData
      };
      console.log(data);
      this.bookSpace(data);
     }

  }


}


