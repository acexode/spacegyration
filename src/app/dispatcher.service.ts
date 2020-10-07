import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import * as moment from 'moment-timezone';
import { JwtHelperService } from "@auth0/angular-jwt";
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {
  httpOptions
  base_url = 'http://localhost:4300'
  public helper = new JwtHelperService();
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
    };
   }
   getOccupants() {    
    return this.http.get(`${this.base_url}/api/occupants`, this.httpOptions);
  }
   check() {    
    return this.http.get(`${this.base_url}/api/check`, this.httpOptions);
  }
  users() {
    return this.http.get(``);
  }
  // signup new user
  signup(user) {
    return this.http.post(`${this.base_url}/api/signup`, user);
  }

  // login user
  login(user) {
    return this.http.post(`${this.base_url}/api/login`, user);
  }

  // forgot passsword
  forgotPassword(user) {
    return this.http.post(`${this.base_url}/api/forgot_password`, user);
  }
  updateUser(user){
    return this.http.put(`${this.base_url}/api/update-profile`,user, this.httpOptions)
  }
  // reset passsword
  resetPassword(user) {
    return this.http.post(`${this.base_url}/api/reset_password`, user);
  }

  // subscribe to newsletter
  subscribe(user) {
    return this.http.post(`${this.base_url}/api/subscribe`, user);
  }

  // search for space based on location and spacetype
  search(type, location) {
    return this.http.get(`${this.base_url}/api/space/search?space=${type}&location=${location}`);
  }
  // add space
  addSpace(space) {
    
    console.log(this.httpOptions)
    console.log(space)
    return this.http.post(`${this.base_url}/api/space/`, space, this.httpOptions);
  }
  uploadImage(formData) {    
    console.log(this.httpOptions)
    return this.http.post(`${this.base_url}/api/upload`, formData);
  }
  transaction(details) {    
    console.log(this.httpOptions)
    return this.http.post(`${this.base_url}/api/transactions`, details, this.httpOptions);
  }
  // search based on spacetype
  spaceType(space) {
    return this.http.get(`${this.base_url}/api/space/type?spaceType=${space}`);
  }

  // get all space in a location
  getLocationData(lat, lng) {
    return this.http.get(`${this.base_url}/api/space/locate?lat=${lat}&lng=${lng}`);
  }

  // get single space
  getOwnerSpaces() {
    return this.http.get(`${this.base_url}/api/spaces`, this.httpOptions);
  }
  // get single space
  getSingle(id) {
    return this.http.get(`${this.base_url}/api/space/${id}`);
  }
  // get spaces owned by current admin
  ownerSpaces() {
    return this.http.get(`${this.base_url}/api/ownerSpaces`, this.httpOptions);
  }
  // get spaces owned by current admin and booked
  bookedSPaces() {
    return this.http.get(`${this.base_url}/api/booked-spaces`, this.httpOptions);
  }
  payments() {
    return this.http.get(`${this.base_url}/api/payments`, this.httpOptions);
  }
  // get single space
  getUserProfile() {
    return this.http.get(`${this.base_url}/api/user-profile`, this.httpOptions);
  }
  // get single space
  getUserData() {
    return this.http.get(`${this.base_url}/api/user`, this.httpOptions);
  }
   // all bookings
   Bookings(){
    return this.http.get(`${this.base_url}/api/bookings`, this.httpOptions);
  }
  //delete booking
  deleteBooking(spaceId,bookingId){
    const options = {
      headers: this.httpOptions.headers,
      body: {
        spaceId,
        bookingId
      },
    };
    return this.http.delete(`${this.base_url}/api/space/` + spaceId);
  }
  extendBooking(spaceId, bookingId) {
    const msg = {
        spaceId,
        bookingId,
        headers: this.httpOptions.headers,
        msg : 'Requesting extension for booking'
      };
    return this.http.post(`${this.base_url}/api/email` + spaceId, msg );
  }

  // check if a space is available
  checkAvailability(msg) {
    return this.http.post(`${this.base_url}/api/email`, msg);
  }

  // check if user is logged in
  isLoggedIn() {
    const token = localStorage.getItem('token');
    let isExpired = this.helper.isTokenExpired(token);
    console.log(this.helper.decodeToken(token))
    console.log(isExpired)
    if (isExpired) {
      console.log('expired')
      return true;
    } else {
      return false;
    }
  }

  // Function to receive booking data (WAT) and convert to JS Date object
 dateUTC = (dateString) => {
  // Ensure date data is saved in WAT and then converted to a Date object in UTC
  // momentTimezone.tz.names();
    return moment.tz(dateString, 'Africa/Lagos').toDate();

}

bookSpace(data, prevBooking) {
  console.log(data);
  console.log(data.price);
  console.log(this.httpOptions);
  // convert to UTC Date Object
  const bookStart = this.dateUTC(data.startDate);
  const bookEnd = this.dateUTC(data.endDate);

  // Convert booking Date objects into a number value
  const newBookingStart = bookStart.getTime();
  const newBookingEnd = bookEnd.getTime();
  console.log(newBookingStart);
  console.log(newBookingEnd);
  
  // Check whether the new booking times overlap with any of the existing bookings
  let bookingClash = false;
  if (prevBooking.length > 0 ) {
    prevBooking.forEach(booking => {

      // Convert existing booking Date objects into number values
      const existingBookingStart = new Date(booking.bookingStart).getTime();
      const existingBookingEnd = new Date(booking.bookingEnd).getTime();

      // Check whether there is a clash between the new booking and the existing booking
      if (newBookingStart >= existingBookingStart && newBookingStart < existingBookingEnd ||
          existingBookingStart >= newBookingStart && existingBookingStart < newBookingEnd) {
            // Switch the bookingClash variable if there is a clash
            return bookingClash = true;
      }
    });

  }
  // Ensure the new booking is valid (i.e. the start time is before the end time, and the booking cois for a future time)
  const validDate = newBookingStart < newBookingEnd && newBookingStart > new Date().getTime();
  console.log(validDate)
  console.log(bookingClash)
  // If a recurring booking as been selected, ensure the end date is after the start date
  const dateString = data.recurringData[0];

  const validRecurring = (data.recurringData.length > 0) ?
    this.dateUTC(dateString).getTime() > newBookingEnd : true;
  console.log(validRecurring)
  // Save the booking to the database and return the booking if there are no clashes and the new booking time is not in the past
  if (!bookingClash && validDate && validRecurring ) {
    console.log('http');
    return this.http.put(`${this.base_url}/api/book/${data.spaceId}`, {
      bookingStart: bookStart,
      bookingEnd: bookEnd,
      spaceId: data.spaceId,
      recurring: data.recurringData,
      price : data.price

    }, this.httpOptions).toPromise();
    //  .catch(err => alert(err.response.data.error.message.match(/error:.+/i)[0]))
  }





}
// new banner
newBanner(banner) {
  return this.http.post(`${this.base_url}/api/banner`, banner);
}
// new banner
getBanners() {
  return this.http.get(`${this.base_url}/api/banners`);
}
removeBanners(id) {
  return  this.http.delete(`${this.base_url}/api/banner/` + id);
}
showModal():void { 
  $("#signupLogin").modal('toggle');
}
}

