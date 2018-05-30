import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RandomForestComponent } from './random-forest/random-forest.component';
import { SVMComponent } from './svm/svm.component';
import { BaggingComponent } from './bagging/bagging.component';
import { AboutComponent } from './about/about.component';
import { HTTPClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomForestComponent,
    SVMComponent,
    BaggingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HTTPClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
