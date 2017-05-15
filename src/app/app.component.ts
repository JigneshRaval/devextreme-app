import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  
 private style: string;
  
  ngOnInit() {
    //Default
   // this.changeStyle('dx.light.css');
  }
 /* 
  onChange() {
    if(this.style === 'dx.light.css')
      this.changeStyle('dx.ios7.default.css');
    else
      this.changeStyle('dx.light.css');
  }
  
  changeStyle(style) {
    this.style = style;
    var a;
    //Change value of the meta tag
    var links = document.querySelectorAll("link");
    for(var i=0; i < links.length; i++) {
        var link = links[i];
        if(link.getAttribute("rel").indexOf("style") != -1 && link.getAttribute("title")) {
              link.disabled = true;
              
        }
        if(link.getAttribute("title") === this.style)
                 link.disabled = false; 
    }
  }*/
}