import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeManagementPage } from './time-management.page';

describe('Tab1Page', () => {
    let component: TimeManagementPage;
    let fixture: ComponentFixture<TimeManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TimeManagementPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(TimeManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
