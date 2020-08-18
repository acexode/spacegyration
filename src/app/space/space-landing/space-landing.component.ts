import { Component, OnInit,HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DispatcherService } from 'src/app/dispatcher.service';

@Component({
  selector: 'app-space-landing',
  templateUrl: './space-landing.component.html',
  styleUrls: ['./space-landing.component.css']
})
export class SpaceLandingComponent implements OnInit {
  spaceType = [
    { value: 'Work Spaces', label: 'Work Spaces /Private / shared / open ' },
    { value: 'Event Spaces', label: 'Event Spaces / Meetings / Trainings / Seminars / Lectures ' },
    { value: 'Fun Spaces', label: 'Fun Spaces / Movies / Concerts / Club / Barbecue' },
    { value: 'Bed Spaces', label: 'Bed Spaces /Single / Executive / Suites / Apartments' },
    ];
  location = [
    { value: 'Abuja', label: 'Abuja' },
    { value: 'Lagos', label: 'Lagos' },
    { value: 'Portharcourt', label: 'Portharcourt' },
    
    ];
  capacity = [    
    { value: 5, label: '1-5 Pax' },
    { value: 10, label: '6-10 Pax' },
    { value: 30, label: '11-30 Pax' },
    { value: 50, label: '31-50 Pax' },
    { value: 100, label: '51-100 Pax' },
    { value: 250, label: '101-250 Pax' },
    { value: 500, label: '251-500 Pax' },
    { value: 750, label: '501-750 Pax' },
    { value: 1000, label: '751-1,000 Pax' },
  ];
  searchForm: FormGroup;
  search;
  disabledSubmitButton: boolean = true;
  constructor(private fb: FormBuilder, private router: Router, private dispatcher: DispatcherService) {
    this.searchForm = fb.group({
      'space': ['', Validators.required],
      'location': ['', Validators.required],
      'capacity': ['', Validators.required]
      });
   }

   ngOnInit() {    
   
    if (navigator.geolocation) {
      console.log(true);
      navigator.geolocation.watchPosition(position =>{
        console.log(position.coords.latitude);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.dispatcher.getLocationData(lat, lng).subscribe((res: any) => {
          this.searchForm.setValue({
            'space' : '',
            'location': res.fullLocation.split(',')[0]
          })
          console.log(res);
        })
      });
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }
  @HostListener('input') oninput() {
    console.log(this.searchForm)
    
    console.log(this.searchForm.value)
    this.searchForm.valueChanges.subscribe(obj => {
      console.log(obj)
      const {space, location, capacity} = obj;
      if (space.length) {
        this.disabledSubmitButton = false;
        console.log('valid')
      }else{
        console.log('invalid')
      }
    })
    
  }
  showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position.coords.longitude);
    this.dispatcher.getLocationData(lat, lng).subscribe(res => {
     console.log(res);
   });
  }
  goto(e){   
    // alert(e)
    const url = `space/${e}`;
    this.router.navigate([url]);
}
  onSubmit() {
    const {space, location, capacity} = this.searchForm.value;
    const url = `space/search`;
    console.log(space , location , capacity);
    this.router.navigate([url], {queryParams: {space, location, capacity}});
  }
}
