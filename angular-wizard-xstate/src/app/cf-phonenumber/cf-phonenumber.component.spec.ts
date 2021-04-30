import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfPhoneNumberComponent } from './cf-phonenumber.component';

describe('CfphonenumberComponent', () => {
  let component: CfPhoneNumberComponent;
  let fixture: ComponentFixture<CfPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfPhoneNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
