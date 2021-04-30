import { createMachine, EventObject, interpret, Interpreter, StateMachine, StateValue } from 'xstate';

export class MoveBack {
  readonly type = 'BACK';
}
export class MoveNext {
  readonly type = 'NEXT';
}

export class MoveNextWithParams {
  readonly type = 'NEXT_WITH_PARAMS';
  constructor(public data: string) {}
}

export type MoveStateEvent = MoveBack | MoveNext | MoveNextWithParams;