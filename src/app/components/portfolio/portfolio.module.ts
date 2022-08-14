import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhotoComponent } from './components/photo/photo.component';
import {PortfolioComponent} from './portfolio.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    PhotoComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

  exports: [
    PortfolioComponent,
  ]
})
export class PortfolioModule { }