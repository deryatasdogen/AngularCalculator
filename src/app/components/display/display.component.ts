import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {
  
public display$: Observable<string>;

  constructor(private store:Store<{display: string}>) {}

  ngOnInit() {
    this.display$ = this.store.pipe(select('display'))
  }

}
