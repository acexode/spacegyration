import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DispatcherService } from '../dispatcher.service';

@Component({
  selector: 'app-signup-space',
  templateUrl: './signup-space.component.html',
  styleUrls: ['./signup-space.component.css']
})
export class SignupSpaceComponent implements OnInit {
  adminForm : FormGroup
  data: any;
  @ViewChild('signupSuccess', {static : true}) signupSuccess:ElementRef;
  constructor(private formBuilder: FormBuilder,private dispatcher: DispatcherService,private flashMessage: FlashMessagesService, private router: Router) { 
    this.adminForm = this.formBuilder.group({
      company: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],      
      password: ['', Validators.required],      
      confirmPassword: ['', Validators.required], 
      accept: [false]  
    });
    
  }


  ngOnInit(): void {
  }
  submitForm(){    
    
    this.dispatcher.registerAdmin(this.adminForm.value).subscribe((e =>{
      this.dispatcher.login(this.adminForm.value).subscribe(token =>{
        this.data = token['token']
        localStorage.setItem('token', this.data);        
        this.signupSuccess.nativeElement.click()     
      });
    }))
  }
  navigate(){
    let element: HTMLElement = document.getElementsByTagName("BODY")[0] as HTMLElement;
    element.click()
    window.location.href = 'admin'
  }

}
