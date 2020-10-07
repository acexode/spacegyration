import { Component, OnInit,HostListener } from '@angular/core';
import { FormControl, FormGroup,FormArray, FormBuilder, Validators } from '@angular/forms';
import { DispatcherService } from 'src/app/dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-banner-settings',
  templateUrl: './banner-settings.component.html',
  styleUrls: ['./banner-settings.component.css']
})
export class BannerSettingsComponent implements OnInit {

  files: File[] = [];  
  bannerForm: FormGroup;  
  submitted = false; 
  BannerList = []
  isloaded = false
  disabledSubmitButton: boolean = true
 
  
  @HostListener('input') oninput() {
    if (this.bannerForm.valid) {
      this.disabledSubmitButton = false;
    }
}
  constructor(private formBuilder: FormBuilder,private dispatcher: DispatcherService,private flashMessage: FlashMessagesService) { 
    this.bannerForm = this.formBuilder.group({
      banner: [[], Validators.required],
      heading: ['', Validators.required],
      subtext: ['', Validators.required],

      
    });
    
  }

ngOnInit() {
  this.getBanners()
}
getBanners(){
  this.isloaded = true
  this.dispatcher.getBanners().subscribe((data:any) => {
    console.log(data)
    this.BannerList = data.banners
    this.isloaded = false
  })
}
removeBanner(id){
  console.log(id)
  this.dispatcher.removeBanners(id).subscribe(e =>{
    this.BannerList = this.BannerList.filter(e => e._id != id)
  })
}
onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);

  const formData = new FormData();

  for (var i = 0; i < this.files.length; i++) { 
    formData.append("file[]", this.files[i]);
  }
  this.bannerForm.patchValue({
    banner: formData
  })

 
}

onChangeCategory(e){
  // this.bannerForm.get('category').setValue(e.target.value)
}
get spaceType() {
  return this.bannerForm.get('type');
}
get category() {
  return this.bannerForm.get('category');
}
  get f() { return this.bannerForm.controls; }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.bannerForm.get('checkArray') as FormArray;
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
       let bannerData = {...this.bannerForm.value}       
       console.log(bannerData)      
        // delete bannerData.checkArray
        bannerData.banner = res.images[0]
          console.log(bannerData);
        this.dispatcher.newBanner(bannerData).subscribe(res =>{
          // this.successMsg()
          alert('Banner Saved')
          console.log(res)
          this.bannerForm.reset()
          this.files = []
          this.getBanners()
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
