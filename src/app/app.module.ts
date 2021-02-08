import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ProductsortPipe } from './pipe/productsort.pipe';
import { PropertyfilterPipe } from './pipe/propertyfilter.pipe';
import { SinglepageComponent } from './page/singlepage/singlepage.component';
import { AdminComponent } from './page/admin/admin.component';
import { ProductdataeditorComponent } from './productdataeditor/productdataeditor.component';
import { DataRowComponent } from './data/data-row/data-row.component';
import { DataCellComponent } from './data/data-cell/data-cell.component';

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
    AllComponent,
    ProductsortPipe,
    PropertyfilterPipe,
    SinglepageComponent,
    AdminComponent,
    ProductdataeditorComponent,
    DataRowComponent,
    DataCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
