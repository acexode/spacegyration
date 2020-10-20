import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { constructor } from 'moment-timezone';
import { DispatcherService } from '../dispatcher.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  signupUser = {email: '', username:'', password: ''}; 
  errMsg;
  successMsg;
  data:any;
  disabledSubmitButton: boolean = true;
  token = ''
  resetPasswordForm: FormGroup;
  LoginForm: FormGroup;
  mustMatch = ''
  constructor( private router: Router,private dispatch: DispatcherService,private route: ActivatedRoute) {
   }
 
  
  @HostListener('input') oninput() {
    if (this.resetPasswordForm.valid) {
      this.disabledSubmitButton = false;
    }
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(e  =>{
      this.token = e.token
    })
    this.resetPasswordForm = new FormGroup({     
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required] )
    },
    
  );
  this.confirmPassword.valueChanges.subscribe(e =>{
    if(e != this.password.value){
      this.confirmPassword.setErrors({'error': 'Password doesnt Match'})
      this.mustMatch = this.confirmPassword.getError('error')
    }
  })
  }
  get password() {
    return this.resetPasswordForm.get('password');
  }
  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;

  return pass === confirmPass ? null : { notSame: true }     
}

  resetPassword(){
    console.log(this.resetPasswordForm.valid)
    console.log(this.resetPasswordForm.value)
    let obj = {
      password: this.password.value,
      token: this.token
    }
    this.dispatch.resetPassword(obj).subscribe((e:any) =>{
      this.successMsg = e.message
    })
  }
}
