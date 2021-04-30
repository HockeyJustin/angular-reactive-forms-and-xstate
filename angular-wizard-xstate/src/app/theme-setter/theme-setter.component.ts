import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-theme-setter',
  templateUrl: './theme-setter.component.html',
  styleUrls: ['./theme-setter.component.scss']
})
export class ThemeSetterComponent implements OnInit {

  btnBkg = 'green';

  themeForm: FormGroup;

  constructor(private ngZone: NgZone,
    private fb: FormBuilder) {

    this.themeForm = this.fb.group({
      button1: this.fb.group({
        backgroundColor: [''],
        color:['']
      }),
      button2: this.fb.group({
        backgroundColor: ['']
      })
    });

  }

  ngOnInit(): void {
    this.themeForm.patchValue({
      button1: {
        backgroundColor: 'green'
      }
    });
  }

  // NOTE: Sanitise all fields very carefully before saving.
  //       This will be rendered as raw html, which is very sensitive!


  get button1BkgColor(): FormControl {
    return this.thisButton1Elm.get('backgroundColor') as FormControl;
  }

  get button1Color(): FormControl {
    return this.thisButton1Elm.get('color') as FormControl;
  }


  get thisButton1Elm(): FormControl{
    return this.themeForm.get('button1') as FormControl;
  }



}
