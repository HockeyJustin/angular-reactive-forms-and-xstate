import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateValidation1Component } from './update-validation1.component';

describe('UpdateValidation1Component', () => {
  let component: UpdateValidation1Component;
  let fixture: ComponentFixture<UpdateValidation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateValidation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateValidation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
