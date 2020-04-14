import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonianKeyboardComponent } from './ionian-keyboard.component';

describe('IonianKeyboardComponent', () => {
  let component: IonianKeyboardComponent;
  let fixture: ComponentFixture<IonianKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonianKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonianKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
