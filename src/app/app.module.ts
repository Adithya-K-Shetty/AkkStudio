import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IntroComponent } from './components/dashboard/intro/intro.component';
import { TypedeleteComponent } from './components/typedelete/typedelete.component';
import { GameComponent } from './components/dashboard/game/game.component';
import { NewreleaseComponent } from './components/dashboard/newrelease/newrelease.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ContactComponent } from './components/dashboard/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    IntroComponent,
    TypedeleteComponent,
    GameComponent,
    NewreleaseComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
