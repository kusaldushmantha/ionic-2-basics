import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {FavouritesPage} from "../pages/favourites/favourites";
import {LibraryPage} from "../pages/library/library";
import {QuotePage} from "../pages/quote/quote";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesPage} from "../pages/quotes/quotes";

@NgModule({
  declarations: [
    MyApp,
    FavouritesPage,
    LibraryPage,
    QuotePage,
    SettingsPage,
    TabsPage,
    QuotesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavouritesPage,
    LibraryPage,
    QuotePage,
    SettingsPage,
    TabsPage,
    QuotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
