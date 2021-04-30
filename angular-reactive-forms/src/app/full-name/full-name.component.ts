import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.scss']
})
export class FullNameComponent implements OnInit {

  @Input() public formGroup: FormGroup;
  @Input() public parentNgForm: NgForm;

  // City Names
  Titles: any = ['Mr', 'Mrs', 'Sir', 'Madam'];

  constructor() { }

  ngOnInit(): void {
  }


  changeTitle(e){
    this.title.setValue(e.target.value, {
      onlySelf: true
    });
  }

  get fullName(): FormControl{
    return this.formGroup?.get('firstName') as FormControl;
  }

  get title(): FormControl {
    return this.formGroup?.get('title') as FormControl;
  }



  check() {
    // var x = this.parentFormGroup.controls.fullName;
    // var y = this.parentFormGroup.controls.fullName.valid;
    // var z = this.parentFormGroup.get('fullName');
    // if (z) {
    //   var zzt = this.parentFormGroup.get('fullName').get('firstName');
    //   if (zzt) {
    //     var zzz = this.parentFormGroup.get('fullName').get('firstName').errors.required;
    //   }
    // }

    // var testGood = this.parentFormGroup?.get('fullName')?.get('firstName')?.errors?.required;
    // if (testGood) {
    //   var awer = "ddf";
    // }

    // var testBad = this.parentFormGroup?.get('fullName')?.get('fibble')?.errors?.required;
    // if (testBad) {
    //   var bewrt = "asdfasdf";
    // }


    // if (this.parentFormGroup.get('fullName') && this.parentFormGroup.get('fullName').get('firstName')
    //   && this.parentFormGroup.get('fullName').get('firstName').errors.required) {
    //   var xx = "test";
    // }



  }

}
