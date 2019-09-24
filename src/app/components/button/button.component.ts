import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select} from '@ngrx/store';
import * as DisplayActions from '../display.action';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()type: number ;
  @Input()text: string ;

  constructor(private store: Store<{ display: string }>) {
    
  }
  

  ngOnInit() {
  }

  displayNumber() {
    console.log("clicked");
    const action = new DisplayActions.DisplayChanged(this.text + "");
    this.store.dispatch(action);
  }

}
