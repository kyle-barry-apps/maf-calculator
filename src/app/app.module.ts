import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeartRateComponent } from './components/heart-rate/heart-rate.component';
import { FormComponent } from './components/form/form.component';

import { DataService } from './services/data.service'; // Adjust the path


@NgModule({
  declarations: [
    AppComponent,
    HeartRateComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
