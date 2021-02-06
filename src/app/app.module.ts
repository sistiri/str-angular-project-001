import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { ListComponent } from './page/list/list.component';
import { HomeComponent } from './page/home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductFiverComponent } from './common/product-fiver/product-fiver.component';
import { ProductTableComponent } from './common/product-table/product-table.component';
import { FilterPipe } from './pipe/filter.pipe';
import { CategoryFilterPipe } from './pipe/category-filter.pipe';
import { ProductListComponent } from './common/product-list/product-list.component';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    ListComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductCardComponent,
    ProductFiverComponent,
    ProductTableComponent,
    FilterPipe,
    AdminComponent,
    CategoryFilterPipe,
    ProductListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
