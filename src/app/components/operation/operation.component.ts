import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  @Input()type: number ;
  @Input()text: string ;
  constructor() { }

  ngOnInit() {
  }


}
