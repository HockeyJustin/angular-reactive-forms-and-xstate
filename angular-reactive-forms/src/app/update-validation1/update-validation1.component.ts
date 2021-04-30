import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-validation1',
  templateUrl: './update-validation1.component.html',
  styleUrls: ['./update-validation1.component.scss']
})
export class UpdateValidation1Component implements OnInit {

  @Input() public parentFormGroup: FormGroup;
  @Input() public parentNgForm: NgForm;

  constructor() { }

  ngOnInit(): void {

    this.optionB.valueChanges.subscribe(checked => {
      if (checked) {
        this.optionBExtra.setValidators([Validators.required, Validators.minLength(5)]);
      } else {
        this.optionBExtra.setValidators(null);
      }
      this.optionBExtra.updateValueAndValidity();
    });


  }

  get optionB(): FormControl {
    return this.parentFormGroup.get('updateValidation1').get('optionB') as FormControl;
  }

  get optionBExtra(): FormControl {
    return this.parentFormGroup.get('updateValidation1').get('optionBExtra') as FormControl;
  }

}
