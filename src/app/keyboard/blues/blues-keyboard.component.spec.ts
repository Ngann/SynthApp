import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluesKeyboardComponent } from './blues-keyboard.component';

describe('BluesKeyboardComponent', () => {
  let component: BluesKeyboardComponent;
  let fixture: ComponentFixture<BluesKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluesKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluesKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
