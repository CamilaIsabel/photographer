import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InformationComponent } from './component/information/information.component';
import {FooterComponent} from './footer.component';


@NgModule({
  declarations: [
    FooterComponent,
    InformationComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

  exports: [
   FooterComponent,
  
  ]
})
export class FooterModule { }