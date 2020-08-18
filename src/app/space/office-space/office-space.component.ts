import { SampleData } from './../bed-space/bed-space.component';
import { FormsModule } from '@angular/forms';
// import { SampleData } from './../../sample';
import { Component, OnInit, NgModule, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-office-space',
  templateUrl: './office-space.component.html',
  styleUrls: ['./office-space.component.css']
})
export class OfficeSpaceComponent implements OnInit {

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
      this.router.navigate(['space/booking', { data: index }]);
    } else {     
      document.getElementById("triggerLogin").click()

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
