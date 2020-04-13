import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaisComponent } from './componentes/pais/pais.component';
import { DashboardCardComponent } from './componentes/dashboard-card/dashboard-card.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { SumaryCountryService } from './services/sumary-country.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PaisComponent,
    DashboardCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,Ng2GoogleChartsModule
  ],
  providers: [SumaryCountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
