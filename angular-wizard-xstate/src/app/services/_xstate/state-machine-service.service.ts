import { EventEmitter, Injectable } from '@angular/core';
import { createMachine, interpret, Interpreter, StateMachine, StateValue } from 'xstate';
import { MoveBack, MoveNext, MoveNextWithParams, MoveStateEvent } from './state-machine-events';
import { StateMachineSchema } from './state-machine-schema';

@Injectable({
  providedIn: 'root'
})
export class StateMachineServiceService {

  stateMachine: StateMachine<any, StateMachineSchema, MoveStateEvent>;
  stateService: Interpreter<any, StateMachineSchema, MoveStateEvent>;

  public stateChangedEvent: EventEmitter<StateValue>;

  constructor() {
    this.stateChangedEvent = new EventEmitter<StateValue>();
  }

  initializeStateMachine(){
    this.stateMachine = createMachine({
      id: 'participantApplicationWizard',
      initial: 'fullName',
      states: {
        fullName: {
          on: {
            NEXT: 'address'
          }
        },
        address: {
          on: {
            BACK: 'fullName',
            NEXT: 'phonenumber'
          }
        },
        phonenumber: {
          on: {
            BACK: 'address',
            NEXT: 'notes'
          }
        },
        notes: {
          on: {
            BACK: 'phonenumber',
          }
        }
      }
    });

    this.stateService = interpret(this.stateMachine)
      .onTransition((state) => {
        console.log(state.value);
        this.stateChangedEvent.emit(state.value);
      })
      .start();
  }


  getInitialState() {
    return this.stateService.initialState.value.toString();
  }

  getCurrentState() {
    return this.stateService.state.value;
  }

  back() {
    this.stateService.send(new MoveBack());
  }

  next() {
    this.stateService.send(new MoveNext());
  }

  nextWithData(){
    this.stateService.send(new MoveNextWithParams('something'));
  }

}
