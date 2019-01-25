import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Display } from './display.page';

describe('Tab1Page', () => {
  let component: Display;
  let fixture: ComponentFixture<Display>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Display],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Display);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
