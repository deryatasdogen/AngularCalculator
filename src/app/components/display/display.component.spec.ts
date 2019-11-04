import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { StoreModule } from '@ngrx/store';
import { displayReducer } from '../display.reducer';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComponent ],
      imports: [ StoreModule.forRoot({ display: displayReducer }), ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    

  }));

  it('should create DisplayComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit method', ()=> {
    const spy = spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  })
});
