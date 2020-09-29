import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';

@Component({
  selector: 'app-occupants',
  templateUrl: './occupants.component.html',
  styleUrls: ['./occupants.component.css','../admin-home/admin-home.component.css']
})
export class OccupantsComponent implements OnInit {
  spaces 
  constructor(private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    this.dispatcher.getOccupants().subscribe((data:any) =>{
      console.log(data)
      this.spaces = data.space
    })
  }

}
