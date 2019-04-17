import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TitleModule} from './title/title.module';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    ModalModule,
    TooltipModule,
    BsDropdownModule,
    BrowserModule,
    AppRoutingModule,
    TitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
