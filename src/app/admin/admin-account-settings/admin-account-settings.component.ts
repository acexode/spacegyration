import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DispatcherService } from 'src/app/dispatcher.service';

@Component({
  selector: 'app-admin-account-settings',
  templateUrl: './admin-account-settings.component.html',
  styleUrls: ['./admin-account-settings.component.css','../admin-home/admin-home.component.css']
})
export class AdminAccountSettingsComponent implements OnInit {

  form: FormGroup;
  user;
  showSuccessAlert = false
  constructor(private dispatcher: DispatcherService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dispatcher.getUserProfile().subscribe((data:any) =>{
      console.log(data)
      this.user = data.user[0]
      this.form = this.formBuilder.group({
        name: [this.user.username, Validators.required],
        email: [this.user.email, Validators.required],
        address: this.user.address,
        state: this.user.state,
        city: this.user.city,
        phone: this.user.phone,
      });
    })
  }
  onSubmit(){
    console.log(this.form.value)
    this.dispatcher.updateUser(this.form.value).subscribe((data:any) =>{
      this.showSuccessAlert = true
      this.user = data.user
      setTimeout(()=>{
        this.showSuccessAlert = false
      },3500)
      console.log(data)
    })
  }

}
