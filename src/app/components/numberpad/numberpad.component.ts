import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

//export interface INumberpad{
  //cols: number;
  //rows: number;
  //text: string;
//}
@Component({
  selector: 'app-numberpad',
  templateUrl: './numberpad.component.html',
  styleUrls: ['./numberpad.component.scss']
})

export class NumberpadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//   numberButtons:INumberpad[]=[
//     {text:'1',cols: 1, rows:1},
//     {text:'2',cols: 1, rows:1},
//     {text:'3',cols: 1, rows:1},
//     {text:'4',cols: 1, rows:1},
//     {text:'5',cols: 1, rows:1},
//     {text:'6',cols: 1, rows:1},
//     {text:'7',cols: 1, rows:1},
//     {text:'8',cols: 1, rows:1},
//     {text:'9',cols: 1, rows:1},
//     {text:'0',cols: 1, rows:1}
//   ];
 }
