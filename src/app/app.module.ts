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
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list.component';
import { WidgetDetailComponent } from './widgets/widget-detail.component';
import { ItemsService } from './common/items.service';
import { WidgetsService } from './common/widgets.service';
import { FilterArrayPipe, FilterWidgetsPipe, WidgetNamesPipe } from './common/pipes';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailComponent,
    FilterArrayPipe,
    FilterWidgetsPipe,
    WidgetNamesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ItemsService,
    WidgetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
