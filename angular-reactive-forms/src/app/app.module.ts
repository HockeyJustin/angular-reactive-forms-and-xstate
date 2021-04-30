import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { FullNameComponent } from './full-name/full-name.component';
import { AddressComponent } from './address/address.component';
import { ParentComponent } from './parent/parent.component';
import { CircularObjectToJsonPipe } from './helpers/circular-json-pipe';
import { UpdateValidation1Component } from './update-validation1/update-validation1.component';
import { UpdateValidationDisabledComponent } from './update-validation-disabled/update-validation-disabled.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    FullNameComponent,
    AddressComponent,
    ParentComponent,
    CircularObjectToJsonPipe,
    UpdateValidation1Component,
    UpdateValidationDisabledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
