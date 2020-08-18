import { FormsModule } from '@angular/forms';
// import { SampleData } from './../../sample';
import { Component, OnInit, NgModule, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';
import { Router } from '@angular/router';
export const SampleData  = [{
  spaceType: 'Bed Space',
  details : {
    capacity: '1-5',
    name: 'Single bed space',
    img: ['assets/img/deluxe.jpg', 'assets/img/family.jpg', 'assets/img/king.jpg'],
    location: 'Central Business District, Abuja',
    description: 'Beautifully furnished bed space with smart room gadgets',
    price: '1,000,000',
    },
    assets: {
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
    },
    bookings: [],
    _id: 1      

},
{
  spaceType: 'Bed Space',
  details : {
    capacity: '6-10',
    name: 'Cottage',
    img: ['assets/img/small.jpg', 'assets/img/deluxe.jpg', 'assets/img/family.jpg'],
    location: 'IBB Way, Abuja',
    description: 'Beautifully furnished office with electronic gadgets',
    price: '1,500,000',
    },
    assets: {
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
    },
    bookings: [],
    _id: 2
},
{
  spaceType: 'Bed Space',
  details : {
    capacity: '11-30',
    name: 'Double bed space',
    img: ['assets/img/luxury.jpg', 'assets/img/deluxe.jpg', 'assets/img/family.jpg'],
    location: 'State Housing lane,Calabar',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
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
    },
    bookings: [],
    _id: 3
},
{
  spaceType: 'Bed Space',
  details : {
    capacity: '31-50',
    name: 'Double bed space',
    img: ['assets/img/single1.jpg', 'assets/img/deluxe.jpg', 'assets/img/family.jpg'],
    location: 'Sir Abubakar way, Lagos',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
      wifi: true,
      lunch: false, 
      dinner: false,
      alcohol: false,
      halal: false, 
      vegeterian: false,
      snacks: false,
      AC: true,
      projector: true,
      tv: true,
      breakfast: true,
      whiteBoard: true
    },
    bookings: [],
    _id: 4
},
{
  spaceType: 'Conference Space',
  details : {
    capacity: '51-100',
    name: 'Maitama conference space',
    img: ['assets/img/king.jpg', 'assets/img/deluxe.jpg', 'assets/img/family.jpg'],
    location: 'Central Area Portharcourt',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
      wifi: true,
      lunch: false, 
      dinner: false,
      alcohol: false,
      halal: false, 
      vegeterian: false,
      snacks: false,
      AC: false,
      projector: true,
      tv: false,
      breakfast: false,
      whiteBoard: true
    },
    bookings: [],
    _id: 5
},
{
  spaceType: 'Office Space',
  details : {
    capacity: '101-250',
    name: 'Private-Office space',
    img: ['assets/img/family.jpg', 'assets/img/deluxe.jpg', 'assets/img/king.jpg'],
    location: 'Sani Abacha expressway, Kano',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
      wifi: true,
      lunch: false, dinner: false,alcohol: false,halal: false, vegeterian: false,snacks: false,
      AC: true,
      projector: false,
      tv: true,
      breakfast: true,
      whiteBoard: false
    },
    bookings: [],
    _id: 6
},
{
  spaceType: 'Office Space',
  details : {
    capacity: '101-250',
    name: 'Private-Office space',
    img: ['assets/img/family.jpg', 'assets/img/deluxe.jpg', 'assets/img/king.jpg'],
    location: 'Sani Abacha expressway, Kano',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
      wifi: true,
      lunch: false, dinner: false,alcohol: false,halal: false, vegeterian: false,snacks: false,
      AC: true,
      projector: false,
      tv: true,
      breakfast: true,
      whiteBoard: false
    },
    bookings: [],
    _id: 6
},

]
@Component({
  selector: 'app-bed-space',
  templateUrl: './bed-space.component.html',
  styleUrls: ['./bed-space.component.css']
})
export class BedSpaceComponent implements OnInit {
  @ViewChild('loginSignup', { static: false }) signupLogin:ElementRef;
  items = [];
  p: number = 1;
  public pagesArray: Array<number> = [];
  public currentPage: number = 1;
  itemsPerPage: 6
  spaces = SampleData;
    config: any = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.spaces.length
    };
  model;
  searchText = ''
  locationFilter = {abuja: false, lagos: false, portharcourt: false };
  amenitiesFilter =  {wifi: false,AC: false, projector: false,tv: false,whiteBoard: false, breakfast: false,lunch: false, dinner: false,alcohol: false,halal: false, vegeterian: false,snacks: false} 
  foodFilter =  {}
  constructor(private dispatcher: DispatcherService, private router: Router, private form: FormsModule) { }

  ngOnInit() {
    console.log(this.signupLogin)   
    
    const path = this.router.url;
    const index = path.lastIndexOf('/') + 1;
    const space = path.substring(index);
    console.log(space);
    const pagesAmount = Math.ceil(
      this.spaces.length / 6
    );
    this.pagesArray = new Array(pagesAmount).fill(1);
    console.log(this.pagesArray)
    this.dispatcher.spaceType(space).subscribe((res: any) => {
      console.log(res);
      this.spaces = res.space;
      const pagesAmount = Math.ceil(
        this.spaces.length / 6
      );
      this.pagesArray = new Array(pagesAmount).fill(1);
    }, error => {
      console.log('Error', error);
    });
  }

  gotoBook(index) {
    console.log(index);
    if (this.dispatcher.isLoggedIn()) {
      //alert('helo')
      document.getElementById("triggerLogin").click()
    } else {     
       this.router.navigate(['space/booking', { data: index }]);

    }
  }
  setLocation(location){
    let newLo = {...this.locationFilter}
    console.log(this.locationFilter[location.toLowerCase()])
    if(this.locationFilter[location.toLowerCase()] == true){
      console.log(location.toLowerCase())
      this.searchText = location
    }else{
      this.searchText = ''
      console.log('location false')
    }
  }
  setAmenities(amenities){ 
    console.log(this.spaces)
  
    if(this.amenitiesFilter[amenities] == true){
      console.log(amenities.toLowerCase())
      this.spaces = this.spaces.filter(e => e.assets[amenities] )
      console.log(this.spaces)
      
      // this.searchText = amenities
    }else{
      if(this.spaces.length != SampleData.length){
        this.searchText = ''
        this.spaces = SampleData
      }
      console.log('location false')
    }
  }
  public setPage(pageNumber: number): void {
    if (pageNumber === this.currentPage)
      return;
    this.currentPage = pageNumber;
    this.spaces = this.spaces.slice(this.currentPage-1, this.spaces.length)
    console.log(this.spaces)
  }
  numPages()
{
    return Math.ceil(this.spaces.length / this.itemsPerPage);
}
}
