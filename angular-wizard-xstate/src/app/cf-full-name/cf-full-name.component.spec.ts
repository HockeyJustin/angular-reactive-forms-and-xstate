import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfFullNameComponent } from './cf-full-name.component';

describe('CfFullNameComponent', () => {
  let component: CfFullNameComponent;
  let fixture: ComponentFixture<CfFullNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfFullNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfFullNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
