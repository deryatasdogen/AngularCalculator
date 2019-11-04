import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatButtonToggleModule,} from '@angular/material';
import { ButtonComponent } from './button.component';
import { StoreModule, Store } from '@ngrx/store';
import { displayReducer } from '../display.reducer';
import * as DisplayActions from '../display.action'; 


describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ButtonComponent 
      ],
      imports: [
        StoreModule.forRoot({ display: displayReducer }),
        MatButtonToggleModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create button component', () => {
    expect(component).toBeTruthy();
  });
  it('should call display fuction when button is clicked', () => {
    spyOn(component,'displayNumber');
    let button = fixture.debugElement.nativeElement.querySelector('mat-button-toggle');
    button.click();
    expect(component.displayNumber).toHaveBeenCalled();
  });
  it('should dispatch display changed action', () => {
    const spy = spyOn(component,'displayNumber').and.callThrough();
    component.text='3';
    component.displayNumber();
    expect(spy).toHaveBeenCalledWith();
  })
  it('should dispatch result calculated action', () => {
    const spy = spyOn(component,'displayNumber').and.callThrough();
    component.text='=';
    console.log(component.text);
    component.displayNumber();
    expect(spy).toHaveBeenCalledWith();

  })
  it('should dispatch reset screen action', () => {
    const spy = spyOn(component,'displayNumber').and.callThrough();
    component.text='C';
    component.displayNumber();
    expect(spy).toHaveBeenCalledWith();

  })
});
