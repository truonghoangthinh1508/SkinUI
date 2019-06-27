import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1Page } from '../pages/page1/page1';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { Page4Page } from '../pages/page4/page4';
import { Page5Page } from '../pages/page5/page5';
import { Page6Page } from '../pages/page6/page6';
import { Page7Page } from '../pages/page7/page7';
import { Page8Page } from '../pages/page8/page8';
import { Page9Page } from '../pages/page9/page9';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Page1Page,
    LoginPage,
    SignupPage,
    Page4Page,
    Page5Page,
    Page6Page,
    Page7Page,
    Page8Page,
    Page9Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1Page,
    LoginPage,
    SignupPage,
    Page4Page,
    Page5Page,
    Page6Page,
    Page7Page,
    Page8Page,
    Page9Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}