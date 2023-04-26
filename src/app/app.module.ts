import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomVdoComponent } from './components/welcom-vdo/welcom-vdo.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SelfyCamraComponent } from './components/selfy-camra/selfy-camra.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import {WebcamModule} from 'ngx-webcam';

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
// import { FileSaverModule } from 'ngx-filesaver';
// import { saveAs } from 'file-saver';
@NgModule({
  declarations: [
    AppComponent,
    WelcomVdoComponent,
    RegistrationFormComponent,
    SelfyCamraComponent,
    ThankyouComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule,
    
    HttpClientModule,
    
    // FileSaverModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
