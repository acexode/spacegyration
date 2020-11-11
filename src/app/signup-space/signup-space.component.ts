import { Component, OnInit } from '@angular/core';
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
  constructor(private formBuilder: FormBuilder,private dispatcher: DispatcherService,private flashMessage: FlashMessagesService) { 
    this.adminForm = this.formBuilder.group({
      company: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],      
      password: ['', Validators.required],      
      confirmPassword: ['', Validators.required], 
      accept: [false, Validators.required]  
    });
    
  }


  ngOnInit(): void {
  }
  submitForm(){
    console.log(this.adminForm.value)
  }

}
