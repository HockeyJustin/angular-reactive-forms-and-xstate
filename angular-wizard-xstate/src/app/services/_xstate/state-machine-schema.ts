import { createMachine, EventObject, interpret, Interpreter, StateMachine, StateValue } from 'xstate';

export interface StateMachineSchema {
  states: {
    fullName: {};
    address: {};
    phonenumber: {};
    notes: {};
  };
}

export type StateMachineAvailableStates = keyof StateMachineSchema["states"];