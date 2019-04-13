import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { registration } from './registration.component';

describe('registration', () => {
  let component: registration;
  let fixture: ComponentFixture<registration>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ registration ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(registration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
