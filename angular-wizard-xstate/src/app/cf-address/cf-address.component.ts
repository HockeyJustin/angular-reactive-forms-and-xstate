import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CfBaseComponent } from '../base/cf-base.component';

@Component({
  selector: 'app-cf-address',
  templateUrl: './cf-address.component.html',
  styleUrls: ['./cf-address.component.scss']
})
export class CfAddressComponent extends CfBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  get addressL1(): FormControl {
    return this.formGroup.get('addressL1') as FormControl;
  }

  get addressL2(): FormControl {
    return this.formGroup.get('addressL2') as FormControl;
  }

}
