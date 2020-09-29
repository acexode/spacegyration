import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-space-title',
  templateUrl: './space-title.component.html',
  styleUrls: ['./space-title.component.css']
})
export class SpaceTitleComponent implements OnInit {
  title = ''
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.routeConfig.path
    if(id.includes('private') || id.includes('open') || id.includes('shared') || id.includes('co-working')){
      this.title = id + ' work spaces'
    }else{
      this.title = id
    }

  }

}
