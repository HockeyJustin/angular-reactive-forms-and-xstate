import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-theme2-handler',
  templateUrl: './theme2-handler.component.html',
  styleUrls: ['./theme2-handler.component.scss']
})
export class Theme2HandlerComponent implements OnInit {

  title = 'myApplication';
  dynamicFlag = false;
  dynamicCSSUrl: string;

  dynamicState: boolean;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.dynamicFlag = true;
    this.dynamicCSSUrl = '/assets/dynamic.css';
  }

  dynamicLoading(){

    if(this.dynamicCSSUrl == '/assets/dynamic.css'){
      this.dynamicCSSUrl = '/assets/dynamic-2.css';
    } else{
      this.dynamicCSSUrl = '/assets/dynamic.css';
    }
    
    
  }

}
