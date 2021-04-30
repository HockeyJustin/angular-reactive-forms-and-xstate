import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfNotesComponent } from './cf-notes.component';

describe('CfnotesComponent', () => {
  let component: CfNotesComponent;
  let fixture: ComponentFixture<CfNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
