import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-validation-disabled',
  templateUrl: './update-validation-disabled.component.html',
  styleUrls: ['./update-validation-disabled.component.scss']
})
export class UpdateValidationDisabledComponent implements OnInit {

  @Input() public parentFormGroup: FormGroup;
  @Input() public parentNgForm: NgForm;

  constructor() { }

  ngOnInit(): void {
    this.optionBExtra_D.disable();
    this.optionB_D.valueChanges.subscribe(checked => {
      checked ? this.optionBExtra_D.enable() : this.optionBExtra_D.disable()
    });
  }


  get optionB_D(): FormControl {
    return this.parentFormGroup.get('updateValidationDisabled').get('optionB_D') as FormControl;
  }

  get optionBExtra_D(): FormControl {
    // Note: You can get the value of this whether it's enabled or disabled -> var x = this.optionBExtra_D.value;
    return this.parentFormGroup.get('updateValidationDisabled').get('optionBExtra_D') as FormControl;
  }

}
