import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorBluesKeyboardComponent } from './minor-blues-keyboard.component';

describe('MinorBluesKeyboardComponent', () => {
  let component: MinorBluesKeyboardComponent;
  let fixture: ComponentFixture<MinorBluesKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorBluesKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorBluesKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
