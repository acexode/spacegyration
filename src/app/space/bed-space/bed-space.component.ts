import { FormsModule } from '@angular/forms';
// import { SampleData } from './../../sample';
import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
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
    location: 'Central Business District, Abuja',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
      wifi: true,
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
    location: 'Central Business District, Abuja',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
      wifi: true,
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
    location: 'Central Business District, Abuja',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
      wifi: true,
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
    location: 'Central Business District, Abuja',
    description: 'Beautifully furnished double bed space with smart room gadgets',
    price: '1,200,000',
    },
    assets: {
      wifi: true,
      projector: true,
      tv: true,
      breakfast: false,
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
  spaces = SampleData;
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
