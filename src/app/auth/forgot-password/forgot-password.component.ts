import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DispatcherService } from 'src/app/dispatcher.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user = {email: ''}; 
  errMsg;
  successMsg;
  data:any;
  disabledSubmitButton: boolean = true;
  constructor( private router: Router,private dispatch: DispatcherService) {
   }
   forgotForm: FormGroup;


  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      userEmail: new FormControl('', [Validators.email, Validators.required])  
    });
   
  }
  @HostListener('input') oninput() {
    if (this.forgotForm.valid) {
      this.disabledSubmitButton = false;
    }
    
  }
  get userEmail() {
    return this.forgotForm.get('userEmail');
  }
 
  forgot(){
   
    this.user.email =  this.userEmail.value;
    
    this.dispatch.forgotPassword(this.user).subscribe(res =>{
      console.log(res)
      this.successMsg = res['message'];
      
    }, err => {
      this.errMsg = err.error.message;
      console.log(err);
    });
  }
 
  

}
