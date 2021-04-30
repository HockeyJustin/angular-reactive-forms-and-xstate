import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() public parentFormGroup: FormGroup;
  @Input() public parentNgForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }


  get street(): FormControl{
    return this.parentFormGroup?.get('address')?.get('street') as FormControl;
  }

}
