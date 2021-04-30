import { Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateValue } from 'xstate';
import { CfBaseComponent } from '../base/cf-base.component';
import { CfAddressComponent } from '../cf-address/cf-address.component';
import { CfFullNameComponent } from '../cf-full-name/cf-full-name.component';
import { CfPhoneNumberComponent } from '../cf-phonenumber/cf-phonenumber.component';
import { CfNotesComponent } from '../cf-notes/cf-notes.component';
import { QuestionnaireVM } from '../models/questionnaire-vm';
import { QuestionnaireDataService } from '../services/questionnaire-data.service';
import { StateMachineServiceService } from '../services/_xstate/state-machine-service.service';

@Component({
  selector: 'app-questionnaire-page',
  templateUrl: './questionnaire-page.component.html',
  styleUrls: ['./questionnaire-page.component.scss']
})
export class QuestionnairePageComponent implements OnInit, OnDestroy {

  @ViewChild(CfFullNameComponent) fullNameComponent;
  @ViewChild(CfAddressComponent) addressComponent;
  @ViewChild(CfPhoneNumberComponent) phonenumberComponent;
  @ViewChild(CfNotesComponent) notesComponent;

  nowTime: any;
  profileForm: FormGroup;

  currentStep: string;
  stateChangedSubscription: any;

  constructor(private ngZone: NgZone,
    private fb: FormBuilder,
    private qDataService: QuestionnaireDataService,
    private stateMachineService: StateMachineServiceService) {

    this.profileForm = this.fb.group({
      fullName: this.fb.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: [''],
      }),
      address: this.fb.group({
        addressL1: ['', [Validators.required, Validators.minLength(2)]],
        addressL2: [''],
        postcodeZip: ['']
      }),
      phonenumber: this.fb.group({
        phonenumberName: [''],
        phonenumberAcctNo: ['']
      }),
      notes: this.fb.group({
        numberOfnotes: []
      })
    });

  }

  ngOnInit(): void {

    this.nowTime = new Date().toLocaleTimeString();

    this.stateChangedSubscription = this.stateMachineService.stateChangedEvent.subscribe((state: StateValue) =>{
      // handle if data x, then next again? e.g. if designation, but phonenumber = 'Nominative' => next
      this.currentStep = state.toString();
    });


    this.qDataService.getQuestionnaireData().subscribe((q: QuestionnaireVM) => {
      // Set value as setting everything here (would use patch if partial)
      this.ngZone.run(() => {
        this.nowTime = new Date().toLocaleTimeString() + '(D)';
      });

      this.profileForm.setValue({
        fullName: {
          title: q.fullName.title,
          firstName: q.fullName.firstName,
          lastName: q.fullName.lastName
        },
        address: {
          addressL1: q.address.addressL1,
          addressL2: q.address.addressL2,
          postcodeZip: q.address.postcodeZip
        },
        phonenumber:{
          phonenumberName: q.phonenumber.phonenumberName,
          phonenumberAcctNo: q.phonenumber.phonenumberAcctNo
        },
        notes:{
          numberOfnotes: q.notes.numberOfnotes
        }
      });

      this.stateMachineService.initializeStateMachine();

    })
  }

  ngOnDestroy(){
    this.stateChangedSubscription.unsubscribe();
  }


  moveBack(){
    this.stateMachineService.back();
  }

  moveNext(){

    var currentState = this.stateMachineService.getCurrentState();

    var currentChild: CfBaseComponent;

    if(currentState == 'fullName'){
      currentChild = this.fullNameComponent;
    } else if (currentState == 'address'){
      currentChild = this.addressComponent;
    } else if (currentState == 'phonenumber'){
      currentChild = this.phonenumberComponent;
    } else if (currentState == 'notes'){
      currentChild = this.notesComponent;
    }

    if(!currentChild.isValid()){
      return;
    }

    if(currentState !== 'notes'){
      this.stateMachineService.next();
    } else{
      this.onSubmit();
    }
    
  }

  onSubmit() {
  }


}
