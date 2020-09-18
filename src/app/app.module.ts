import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutComponent} from './Layout/layout.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {AddItemComponent} from './Layout/AddItem/add-item.component';
import {ItemComponent} from './Layout/Item/item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AddItemComponent,
    ItemComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
