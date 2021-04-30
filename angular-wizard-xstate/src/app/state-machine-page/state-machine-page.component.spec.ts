import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMachinePageComponent } from './state-machine-page.component';

describe('StateMachinePageComponent', () => {
  let component: StateMachinePageComponent;
  let fixture: ComponentFixture<StateMachinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateMachinePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMachinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
