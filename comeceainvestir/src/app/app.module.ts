import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { LandingRoutingModule } from './pages/landing/landing-routing.module';
import { LandingLayoutComponent } from './layouts/landing/landing-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
