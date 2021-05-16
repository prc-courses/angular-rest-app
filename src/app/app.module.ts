import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent} from './items/items.component';
import { ItemsListComponent } from './items/items-list.component';
import { ItemDetailComponent } from './items/item-detail.component';
import { ItemsService } from './common/items.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
