import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './landing.component';
import { TopHeaderComponent } from './components/header/top-header.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AboutMeComponent } from '../about/about-me';

@NgModule({
  declarations: [
    LandingComponent,
    TopHeaderComponent,
    SocialMediaComponent,
    AboutMeComponent
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