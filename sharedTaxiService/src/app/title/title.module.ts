import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegistrationComponent} from './registration/registration.component';
import {ValidationServiceService} from './validation-service.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [TitleComponent, AuthorizationComponent, RegistrationComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    TitleComponent
  ],
  providers: [
    ValidationServiceService
  ]
})
export class TitleModule { }
