import { DispatcherService } from './../../dispatcher.service';
import { Component, OnInit,HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  signupUser = {email: '', username:'', password: ''};
  loginUser = {username:'', password: ''};
  errMsg;
  successMsg;
  data:any;
  disabledSubmitButton: boolean = true;
  constructor( private router: Router,private dispatch: DispatcherService) {
   }
   SignupForm: FormGroup;
   LoginForm: FormGroup;

  ngOnInit(): void {
    this.SignupForm = new FormGroup({
      signupEmail: new FormControl('', [Validators.email, Validators.required]),
      signupUsername: new FormControl('', Validators.required),
      signupPassword: new FormControl('', Validators.required)
    });
    this.LoginForm = new FormGroup({      
      loginUsername: new FormControl('', Validators.required),
      loginUserPassword: new FormControl('', Validators.required)
    });
  }
  @HostListener('input') oninput() {
    if (this.SignupForm.valid) {
      this.disabledSubmitButton = false;
    }
    if (this.LoginForm.valid) {
      this.disabledSubmitButton = false;
    }
  }
  get signupEmail() {
    return this.SignupForm.get('signupEmail');
  }
  get signupUsername() {
    return this.SignupForm.get('signupUsername');
  }

  get signupPassword() {
    return this.SignupForm.get('signupPassword');
  }
  get loginUsername(){
    return this.LoginForm.get('loginUsername')
  }
  get loginUserPassword(){
    return this.LoginForm.get('loginUserPassword')
  }
  signup(){
   
    this.signupUser.email =  this.signupEmail.value;
    this.signupUser.username =  this.signupUsername.value;
    this.signupUser.password =  this.signupPassword.value;
    console.log(this.signupUser)
    this.dispatch.signup(this.signupUser).subscribe(res =>{
      console.log(res)
      this.successMsg = res['message'];
      this.dispatch.login(this.signupUser).subscribe(token =>{
        this.data = token['token']
        localStorage.setItem('token', this.data);
        document.getElementById("closeModal").click()      
        // this.router.navigate(['space']);
      });
    }, err => {
      this.errMsg = err.error.message;
      console.log(err);
    });
  }
  login(){
    
    this.loginUser.username =  this.loginUsername.value;
    this.loginUser.password =  this.loginUserPassword.value;
    console.log(this.signupUsername.value)
    console.log(this.signupPassword.value)
    console.log(this.loginUser)
    this.dispatch.login(this.loginUser).subscribe(res => {
      console.log(res)
      this.data = res['token']
      localStorage.setItem('token', this.data); 
      document.getElementById("closeModal").click()
      // this.router.navigate(['space'])
    },err => {
      console.log(err)

      this.errMsg = err.error.message;
      setTimeout(()=>{
        
      },3500)
    });
  }
  forget(){
    this.router.navigate(['forgot-password'])
  }

}
