import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { Level4Component } from './level4/level4.component';

@NgModule({
  declarations: [
    AppComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]   
})
export class AppModule { }
