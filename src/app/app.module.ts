import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingModule } from './components/landing/landing.module';
import { AboutMeComponent } from './components/about/about-me';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import {FooterModule} from './components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
  
  ],
  imports: [
    BrowserModule,
    LandingModule,
    PortfolioModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
