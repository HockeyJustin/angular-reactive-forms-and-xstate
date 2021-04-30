import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateValue } from 'xstate';
import { StateMachineServiceService } from '../services/_xstate/state-machine-service.service';

@Component({
  selector: 'app-state-machine-page',
  templateUrl: './state-machine-page.component.html',
  styleUrls: ['./state-machine-page.component.scss']
})
export class StateMachinePageComponent implements OnInit, OnDestroy {

  stateValue: StateValue;
  currentState: string;

  stateChangedSubscription: any;

  constructor(private stateMachineService: StateMachineServiceService) { 

  }

  ngOnInit(): void {

    this.stateChangedSubscription = this.stateMachineService.stateChangedEvent.subscribe((state: StateValue) =>{
      this.stateValue = state;
      this.currentState = state.toString();
    });

    this.stateMachineService.initializeStateMachine();
    this.stateValue = this.stateMachineService.getInitialState()
    this.currentState = this.stateValue.toString();
  }

  ngOnDestroy(){
    this.stateChangedSubscription.unsubscribe();
  }


  moveBack(){
    this.stateMachineService.back();
  }

  moveNext(){
    this.stateMachineService.next();
  }

}
