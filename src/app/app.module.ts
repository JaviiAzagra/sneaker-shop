import { CountdownTimerModule } from './../../projects/countdown-timer/src/lib/countdown-timer.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { HttpClientModule } from '@angular/common/http';
import { HoodiesComponent } from './pages/hoodies/hoodies.component';
import { SubfooterComponent } from './components/subfooter/subfooter.component';
import { AdidasComponent } from './components/adidas/adidas.component';
import { NikeComponent } from './components/nike/nike.component';
import { BalenciagaComponent } from './components/balenciaga/balenciaga.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SneakersComponent,
    HoodiesComponent,
    SubfooterComponent,
    AdidasComponent,
    NikeComponent,
    BalenciagaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
