import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateValidationDisabledComponent } from './update-validation-disabled.component';

describe('UpdateValidationDisabledComponent', () => {
  let component: UpdateValidationDisabledComponent;
  let fixture: ComponentFixture<UpdateValidationDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateValidationDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateValidationDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
