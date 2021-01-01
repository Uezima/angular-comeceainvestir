import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { LandingRoutingModule } from './pages/landing/landing-routing.module';
import { LandingLayoutComponent } from './layouts/landing/landing-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BigTitleComponent } from './shared/components/big-title/big-title.component';
import { InlineTopicComponent } from './shared/components/inline-topic/inline-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BigTitleComponent,
    InlineTopicComponent
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
