import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  nowTime: any;

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.profileForm = this.fb.group({
      control1: [20],
      control2: [20],
      fullName: this.fb.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: [''],
      }),
      address: this.fb.group({
        street: ['', [Validators.required, Validators.minLength(2)]],
        city: [''],
        state: [''],
        zip: ['']
      }),
      updateValidation1: this.fb.group({
        optionA: [false],
        optionB: [false],
        optionBExtra: ['']
      }),
      updateValidationDisabled: this.fb.group({
        optionA_D: [false],
        optionB_D: [false],
        optionBExtra_D: [{value: '', disabled: true }, [Validators.required, Validators.minLength(5)]]
      }) 
    });
    this.profileForm.setValidators(this.comparisonValidator())

  }

  public comparisonValidator(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const control1 = group.controls['control1'];
      const control2 = group.controls['control2'];
      /* WARNING: Make sure types are the same e.g. "20" !== 20 */
      if (control1.value !== control2.value) {
        control2.setErrors({ notEquivalent: true });
      } else {
        control2.setErrors(null);
      }
      return;
    };
  }


  ngOnInit(): void {
    var d = new Date();
    this.nowTime = d.toLocaleTimeString();
    this.profileForm.valueChanges.subscribe(newVal => {

      var newAddressVal = 'P Shreman, 42 Wallaby Way';
      // WARNING - Checks must include setting val isn't x to avoid change loop.
      if (this.profileForm.value.fullName.firstName == 'test' &&
        this.profileForm.value.address.street !== newAddressVal) {
        this.profileForm.patchValue({ address: { street: newAddressVal } });
      }

    });
  }

  isDirtyCheck() {
    if (this.profileForm.dirty) {
      //this.profileForm.patchValue({ fullName: { lastName: 'dirty' } });
      alert('Dirty');
    } else{
      alert('NOT Dirty');
    }
  }


  onSubmit() {
    // NOTE: This is hit even if form is invalid, unless logic put on button.
    //alert('yatta!');
  }

}
