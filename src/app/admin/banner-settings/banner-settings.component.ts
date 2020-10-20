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
  AdvertForm: FormGroup;  
  BannerForm: FormGroup;  
  submitted = false; 
  banner = null; 
  AdvertLists = []
  isloaded = false
  disabledSubmitButton: boolean = true
  disabledBannerSubmitButton: boolean = true
 
  
  @HostListener('input') oninput() {
    // if (this.AdvertForm.valid) {
    //   this.disabledSubmitButton = false;
    // }
    if (this.BannerForm.valid) {
      this.disabledBannerSubmitButton = false;
    }
}
  constructor(private formBuilder: FormBuilder,private dispatcher: DispatcherService,private flashMessage: FlashMessagesService) { 
    this.AdvertForm = this.formBuilder.group({
      image: [[], Validators.required],
      name: ['', Validators.required],
      owner: ['', Validators.required],

      
    });
    
    this.BannerForm = this.formBuilder.group({
      banner: [[], Validators.required],
      heading: ['', Validators.required],
      subtext: ['', Validators.required],

      
    });
    
  }

ngOnInit() {
  this.getAdverts();
  this.getBanner()
}
getAdverts(){
  this.isloaded = true
  this.dispatcher.getAdverts().subscribe((data:any) => {
    console.log(data)
    this.AdvertLists = data.adverts
    this.isloaded = false
  })
}
getBanner(){
  this.isloaded = true
  this.dispatcher.getBanner().subscribe((data:any) => {
    console.log(data)
     this.banner = data.banners
    this.isloaded = false
  })
}
removeAdvert(id){
  console.log(id)
  this.dispatcher.removeAdverts(id).subscribe(e =>{
    this.AdvertLists = this.AdvertLists.filter(e => e._id != id)
  })
}
onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);

  const formData = new FormData();

  for (var i = 0; i < this.files.length; i++) { 
    formData.append("file[]", this.files[i]);
  }
  this.AdvertForm.patchValue({
    banner: formData
  })

 
}

onChangeCategory(e){
  // this.AdvertForm.get('category').setValue(e.target.value)
}
get spaceType() {
  return this.AdvertForm.get('type');
}
get category() {
  return this.AdvertForm.get('category');
}
  get f() { return this.AdvertForm.controls; }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.AdvertForm.get('checkArray') as FormArray;
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
  submitForm(type){    
    console.log(type)    
    const formData = new FormData();   
    for (var i = 0; i < this.files.length; i++) {
        formData.append("uploads", this.files[i], this.files[i].name);
    }    
    this.dispatcher.uploadImage( formData)
    .subscribe((res : any) => {   
          console.log(formData);
          if(type == 'banner'){
            console.log(res.images);       
            let formData = {...this.BannerForm.value}       
            console.log(formData)      
             // delete formData.checkArray
             formData.banner = res.images[0]
            this.dispatcher.newBanner(formData).subscribe(res =>{
              // this.successMsg()
              alert('Banner Saved')
              console.log(res)
              this.BannerForm.reset()
              this.files = []
              this.getBanner()
            }, error =>{
              this.errMsg(error)
              console.log(res)
            })
          }else if(type == 'advert'){
            console.log(res.images);       
            let formData = {...this.AdvertForm.value}       
            console.log(formData)      
             // delete formData.checkArray
             formData.image = res.images[0]
            this.dispatcher.newAdvert(formData).subscribe(res =>{
              // this.successMsg()
              alert('Advert Saved')
              console.log(res)
              this.AdvertForm.reset()
              this.files = []
              this.getAdverts()
            }, error =>{
              this.errMsg(error)
              console.log(res)
            })
          }
    })   

}
successMsg():void {
  this.flashMessage.show(`New space successfully added.`, { cssClass: 'alert-success', timeout: 20000 });
}
errMsg(error):void {

  this.flashMessage.show(`Error creating space ${error.error}`, { cssClass: 'alert-danger', timeout: 20000 });
}

}
