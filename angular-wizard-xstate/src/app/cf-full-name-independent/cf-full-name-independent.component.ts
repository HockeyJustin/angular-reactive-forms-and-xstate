import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cf-full-name-independent',
  templateUrl: './cf-full-name-independent.component.html',
  styleUrls: ['./cf-full-name-independent.component.scss']
})
export class CfFullNameIndependentComponent implements OnInit {

  @Input() public formGroup: FormGroup;
  @Input() public parentNgForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  get firstName(): FormControl {
    return this.formGroup.get('firstName') as FormControl;
  }

}
