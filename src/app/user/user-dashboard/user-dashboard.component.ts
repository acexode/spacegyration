import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css', '../user-page/user-page.component.css']
})
export class UserDashboardComponent implements OnInit {
  url = "assets/js/app.js";
  loadAPI: Promise<unknown>;

  constructor() {
    
   }

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
  }
  loadScript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;    
    document.getElementsByTagName("head")[0].appendChild(node);
}

}
