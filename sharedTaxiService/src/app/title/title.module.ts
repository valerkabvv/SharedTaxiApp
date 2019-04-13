import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { registration } from './registration/registration.component';

@NgModule({
  declarations: [TitleComponent, AuthorizationComponent, registration],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports:[
    TitleComponent
  ]
})
export class TitleModule { }
