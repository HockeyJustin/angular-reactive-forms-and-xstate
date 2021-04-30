import { Component, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { StateValue } from 'xstate';
import { CfFullNameComponent } from '../cf-full-name/cf-full-name.component';
import { QuestionnaireVM } from '../models/questionnaire-vm';
import { QuestionnaireDataService } from '../services/questionnaire-data.service';
import { StateMachineServiceService } from '../services/_xstate/state-machine-service.service';

@Component({
  template: ``
})
export abstract class CfBaseComponent {

  @Input() public formGroup: FormGroup;
  @Input() public parentNgForm: NgForm; // only need this for form.submitted (not really relevant for our wizard)

  // Is it time to show validation messages?
  hasValidated: boolean;

  constructor() {
  }

  public isValid(){
    this.hasValidated = true;
    return this.formGroup.valid;
  }

}
