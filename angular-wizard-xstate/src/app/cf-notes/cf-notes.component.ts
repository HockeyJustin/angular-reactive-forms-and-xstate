import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CfBaseComponent } from '../base/cf-base.component';

@Component({
  selector: 'app-cf-notes',
  templateUrl: './cf-notes.component.html',
  styleUrls: ['./cf-notes.component.scss']
})
export class CfNotesComponent extends CfBaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
