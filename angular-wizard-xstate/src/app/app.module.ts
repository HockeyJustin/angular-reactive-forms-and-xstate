import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnairePageComponent } from './questionnaire-page/questionnaire-page.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CfFullNameComponent } from './cf-full-name/cf-full-name.component';
import { CfAddressComponent } from './cf-address/cf-address.component';
import { StateMachinePageComponent } from './state-machine-page/state-machine-page.component';
import { CfPhoneNumberComponent } from './cf-phonenumber/cf-phonenumber.component';
import { CfNotesComponent } from './cf-notes/cf-notes.component';
import { ThemeHandlerComponent } from './theme-handler/theme-handler.component';
import { SafeHtmlUseCarefullyPipe } from './base/safe-html-use-carefully';
import { Theme2HandlerComponent } from './theme2-handler/theme2-handler.component';
import { ThemeSetterComponent } from './theme-setter/theme-setter.component';
import { CfFullNameIndependentComponent } from './cf-full-name-independent/cf-full-name-independent.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnairePageComponent,
    AnotherPageComponent,
    CfFullNameComponent,
    CfAddressComponent,
    StateMachinePageComponent,
    CfPhoneNumberComponent,
    CfNotesComponent,
    ThemeHandlerComponent,
    SafeHtmlUseCarefullyPipe,
    Theme2HandlerComponent,
    ThemeSetterComponent,
    CfFullNameIndependentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
