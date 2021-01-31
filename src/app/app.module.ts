import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { Cat04Component } from './page/cat04/cat04.component';
import { ProductbrowserComponent } from './productbrowser/productbrowser.component';
import { ProductfilterPipe } from './pipe/productfilter.pipe';
import { AllComponent } from './page/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductComponent,
    ProductlistComponent,
    Cat03Component,
    Cat04Component,
    ProductbrowserComponent,
    ProductfilterPipe,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
