import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationComponent } from './operation.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
