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
    if(this.text==="="){
      const result_action = new DisplayActions.ResultCalculated("")
      this.store.dispatch(result_action);
    }else if(this.text==="C"){
      const action= new DisplayActions.ResetScreen("");
      this.store.dispatch(action);
    }else{
      console.log("clicked");
      const action = new DisplayActions.DisplayChanged(this.text + "");
      this.store.dispatch(action);
    }
   
  }

}
