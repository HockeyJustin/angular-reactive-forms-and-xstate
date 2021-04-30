import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfAddressComponent } from './cf-address.component';

describe('CfAddressComponent', () => {
  let component: CfAddressComponent;
  let fixture: ComponentFixture<CfAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
