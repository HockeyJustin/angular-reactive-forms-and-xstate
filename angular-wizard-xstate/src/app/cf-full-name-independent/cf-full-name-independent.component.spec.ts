import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfFullNameIndependentComponent } from './cf-full-name-independent.component';

describe('CfFullNameIndependentComponent', () => {
  let component: CfFullNameIndependentComponent;
  let fixture: ComponentFixture<CfFullNameIndependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfFullNameIndependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfFullNameIndependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
