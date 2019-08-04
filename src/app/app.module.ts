import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { OperationComponent } from './components/operation/operation.component';
import { ButtonComponent } from './components/button/button.component';
import { NumberpadComponent } from './components/numberpad/numberpad.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    OperationComponent,
    ButtonComponent,
    NumberpadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
