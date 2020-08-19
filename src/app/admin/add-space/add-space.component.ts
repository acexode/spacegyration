import { Component, OnInit,HostListener } from '@angular/core';
import { FormControl, FormGroup,FormArray, FormBuilder, Validators } from '@angular/forms';
import { DispatcherService } from 'src/app/dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-space',
  templateUrl: './add-space.component.html',
  styleUrls: ['./add-space.component.css','../admin-home/admin-home.component.css']
})
export class AddSpaceComponent implements OnInit {
  files: File[] = [];  
  spaceForm: FormGroup;
  selectSpaceType
  categoryType
  bedSpace
  workSpace
  eventSpace
  funSpace
  submitted = false; 
  disabledSubmitButton: boolean = true
  amenities: Array<any> = [
    { name: 'TV', value: 'tv' },
    { name: 'Air-condition', value: 'air_condition' },
    { name: 'Refrigerator', value: 'refrigerator' },
    { name: 'Sound System', value: 'sound_system' },       
    { name: 'Projector', value: 'projector' },    
    { name: 'WhiteBoard', value: 'whiteBoard' },
    { name: 'Gym', value: 'gym' }
   
  ]; 
  services: Array<any> = [    
    { name: 'Wifi', value: 'wifi' },  
    { name: 'Breakfast', value: 'breakfast', cost: '', disabled:true },
    { name: 'Lunch', value: 'lunch', cost: '', disabled:true }, 
    { name: 'Dinner', value: 'dinner', cost: '', disabled:true },   
    { name: 'Snacks & Drinks', value: 'snacks_drinks', cost: '', disabled:true },
    { name: 'External Catering', value: 'external_catering', cost: '', disabled:true },
    { name: 'Airport Transfer', value: 'airport_transfer', cost: '', disabled:true },
    
  ]; 
  @HostListener('input') oninput() {
    if (this.spaceForm.valid) {
      this.disabledSubmitButton = false;
    }
}
  constructor(private formBuilder: FormBuilder,private dispatcher: DispatcherService,private flashMessage: FlashMessagesService) { 
    this.spaceForm = this.formBuilder.group({
      images: [[], Validators.required],
      title: ['', Validators.required],
      type: ['Select Type', Validators.required],
      category: ['Select Category', Validators.required],
      size: ['', Validators.required],      
      capacity: ['', Validators.required],      
      address: ['', Validators.required],      
      state: ['', Validators.required],      
      city: ['', Validators.required],      
      wifi: ['', Validators.required],      
      price: ['', Validators.required],      
      discount: ['', Validators.required],  
      description: ['', Validators.required],  
      breakfast: ['', Validators.required],  
      lunch: ['', Validators.required],  
      dinner: ['', Validators.required],  
      snacks_drinks: ['', Validators.required],  
      external_catering: ['', Validators.required],  
      airport_transfer: ['', Validators.required],  
      checkArray: this.formBuilder.array([], [Validators.required])
      
    });
    
  }

  ngOnInit() {
    this.selectSpaceType = [
    { value: 'Work Spaces', label: 'Work Spaces' },
    { value: 'Event Spaces', label: 'Event Spaces' },
    { value: 'Fun Spaces', label: 'Fun Spaces' },
    { value: 'Bed Spaces', label: 'Bed Spaces' },
    ];
    
    this.bedSpace = [      
    { value: 'Single bedrooms with one bed', label: 'Single bedrooms with one bed' },
    { value: 'Single bedrooms with double beds', label: 'Single bedrooms with double beds' },
    { value: 'Executive bedrooms', label: 'Executive bedrooms' },
    { value: 'Executive suites', label: 'Executive suites' },
    { value: 'Luxury suite', label: 'Luxury suite' },
    { value: 'Apartments', label: 'Apartments' },
    ];
    this.workSpace = [       
      { value: 'Private offices', label: 'Private offices' },
      { value: 'Shared offices', label: 'Shared offices' },
      { value: 'Co-working spaces', label: 'Co-working spaces' },
      { value: 'Open workspaces', label: 'Open workspaces' },
      ];
    this.eventSpace = [      
      { value: 'Picnics', label: 'Picnics' },
      { value: 'Meetings', label: 'Meetings' },
      { value: 'Private meeting', label: 'Private meeting' },
      { value: 'Board meeting', label: 'Board meeting' },
      { value: 'Group meeting', label: 'Group meeting' },
      { value: 'Receptions', label: 'Receptions' },
      { value: 'Conference spaces', label: 'Conference spaces' },
      { value: 'Trainings', label: 'Trainings' },
      { value: 'Seminars', label: 'Seminars' },
      { value: 'Meetups', label: 'Meetups' },
      { value: 'Lectures', label: 'Lectures' }
      ];
    this.funSpace = [      
      { value: 'Restaurant', label: 'Restaurant' },
      { value: 'Pub', label: 'Pub' },
      { value: 'Bar', label: 'Bar' },
      { value: 'Coffee shop', label: 'Coffee shop' },
      { value: 'Library', label: 'Library' },
      { value: 'Movies', label: 'Movies' },
      { value: 'Concerts', label: 'Concerts' },
      { value: 'Boat ride', label: 'Boat ride' },
      { value: 'Book a club', label: 'Book a club' },
      { value: 'Book a table at a club', label: 'Book a table at a club' },
      { value: 'Bonfire night', label: 'Bonfire night' },
      { value: 'Barbecue party', label: 'Barbecue party' },
      { value: 'Stargazing', label: 'Stargazing' },
    ]
    this.categoryType = this.workSpace

}
onChange(value) {
  switch(this.spaceType.value) {
    case this.selectSpaceType[0].value:
      this.categoryType = this.workSpace       
      break;
    case this.selectSpaceType[1].value:
      this.categoryType = this.eventSpace       
      break;
    case this.selectSpaceType[2].value:
      this.categoryType = this.funSpace      
      break;
    case this.selectSpaceType[3].value:
      this.categoryType = this.bedSpace        
      break;      
    default:
      this.categoryType = this.workSpace
  }    
  // this.categoryType = value
}
onChangeCategory(e){
  // this.spaceForm.get('category').setValue(e.target.value)
}
get spaceType() {
  return this.spaceForm.get('type');
}
get category() {
  return this.spaceForm.get('category');
}
  get f() { return this.spaceForm.controls; }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.spaceForm.get('checkArray') as FormArray;
    console.log(checkArray.value)
    console.log(e.target.checked)
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onChangeService(e) {
    let temp = [...this.services]
    const servicesArray: FormArray = this.spaceForm.get('servicesArray') as FormArray;
    console.log(e.target.name, e.target.value)
    servicesArray.controls.forEach((item: FormControl,i) => {
      if (item.value == e.target.value) {
        servicesArray.removeAt(i);
        return;
      }
      i++;
    });
  }
  
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file[]", this.files[i]);
    }
    this.spaceForm.patchValue({
      images: formData
    })

   
}

onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}
  submitForm(){    
    console.log(this.files)
    const formData = new FormData();   
    for (var i = 0; i < this.files.length; i++) {
        formData.append("uploads", this.files[i], this.files[i].name);
    }    
    this.dispatcher.uploadImage( formData)
    .subscribe((res : any) => {          
       console.log(res.images);       
       let spaceData = {...this.spaceForm.value}       
       console.log(spaceData)
       console.log(spaceData.checkArray)
        for (var i = 0; i < spaceData.checkArray.length; i++) {
            spaceData[spaceData.checkArray[i]] = true
        }
        // delete spaceData.checkArray
        spaceData.images = res.images
          console.log(spaceData);
        this.dispatcher.addSpace(spaceData).subscribe(res =>{
          this.successMsg()
          console.log(res)
          this.spaceForm.reset()
        }, error =>{
          this.errMsg(error)
          console.log(res)
        })
    })   

}
successMsg():void {
  this.flashMessage.show(`New space successfully added.`, { cssClass: 'alert-success', timeout: 20000 });
}
errMsg(error):void {

  this.flashMessage.show(`Error creating space ${error.error}`, { cssClass: 'alert-danger', timeout: 20000 });
}

}
