import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';

@Component({
  selector: 'app-available-spaces',
  templateUrl: './available-spaces.component.html',
  styleUrls: ['./available-spaces.component.css','../admin-home/admin-home.component.css']
})
export class AvailableSpacesComponent implements OnInit {
  spaces 
  p: number = 1; 
  isloaded = false
  constructor(private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    this.isloaded = true
    this.dispatcher.getOwnerSpaces().subscribe((data:any)=>{
      console.log(data)
      this.spaces = data.spaces
      this.isloaded = false
    })
  }

}
