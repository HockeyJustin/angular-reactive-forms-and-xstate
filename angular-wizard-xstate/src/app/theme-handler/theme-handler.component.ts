import { Component, NgZone, OnInit } from '@angular/core';
import { StyleDataService } from '../services/style-data.service';

@Component({
  selector: 'app-theme-handler',
  templateUrl: './theme-handler.component.html',
  styleUrls: ['./theme-handler.component.scss']
})
export class ThemeHandlerComponent implements OnInit {

  overrideStyle: string;

  constructor(private ngZone: NgZone, private styleDataService: StyleDataService) { }

  ngOnInit(): void {
    // this.ngZone.run(() =>{
    //   this.overrideStyle = "<style>body{background-color:red;}</style>";
    // });

    this.styleDataService.getStyleData().subscribe((retVal: JSON) =>{
      this.ngZone.run(() =>{
        // We need to be ultra sure this content is safe!
        var yVal = this.cleanRawInput(retVal["body.background-color"]);
        var style = "<style>body{background-color:" + yVal +";}</style>";
        this.overrideStyle =style;
      })
    });
  }

  cleanRawInput(data:string){
    if(data){
      data = data.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    }
    return data;
  }

}
