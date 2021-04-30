import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CfBaseComponent } from '../base/cf-base.component';

@Component({
  selector: 'app-cf-phonenumber',
  templateUrl: './cf-phonenumber.component.html',
  styleUrls: ['./cf-phonenumber.component.scss']
})
export class CfPhoneNumberComponent extends CfBaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }


}
