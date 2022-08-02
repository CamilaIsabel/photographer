import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './landing.component';
import { TopHeaderComponent } from './components/header/top-header.component';

@NgModule({
  declarations: [
    LandingComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],

  exports: [
    LandingComponent,
  ]
})
export class LandingModule { }