import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

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
