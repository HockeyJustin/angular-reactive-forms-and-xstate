import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme2HandlerComponent } from './theme2-handler.component';

describe('Theme2HandlerComponent', () => {
  let component: Theme2HandlerComponent;
  let fixture: ComponentFixture<Theme2HandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Theme2HandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme2HandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
