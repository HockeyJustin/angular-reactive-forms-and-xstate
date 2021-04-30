import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CfBaseComponent } from '../base/cf-base.component';

@Component({
  selector: 'app-cf-full-name',
  templateUrl: './cf-full-name.component.html',
  styleUrls: ['./cf-full-name.component.scss']
})
export class CfFullNameComponent extends CfBaseComponent implements OnInit {

  Titles: any = ['Mr', 'Mrs', 'Sir', 'Madam'];

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  changeTitle(e){
    this.title.setValue(e.target.value, {
      onlySelf: true
    });
  }

  get title(): FormControl {
    return this.formGroup.get('title') as FormControl;
  }

  get firstName(): FormControl {
    return this.formGroup.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.formGroup.get('lastName') as FormControl;
  }

}
