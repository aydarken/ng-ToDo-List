import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {HeaderComponent} from './header/header.component';
import {ListComponent} from './lists/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
