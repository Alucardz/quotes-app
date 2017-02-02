import { JsonpModule } from '@angular/http';
import { QuotesService } from './../services/quotes';
import { QuotePage } from './../pages/quote/quote';
import { QuotesPage } from './../pages/quotes/quotes';
import { SettingsPage } from './../pages/settings/settings';
import { TabsPage } from './../pages/tabs/tabs';
import { LibraryPage } from './../pages/library/library';
import { FavouritesPage } from './../pages/favourites/favourites';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    FavouritesPage,
    LibraryPage,
    TabsPage,
    SettingsPage,
    QuotesPage,
    QuotePage
  ],
  imports: [
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavouritesPage,
    LibraryPage,
    TabsPage,
    SettingsPage,
    QuotesPage,
    QuotePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, QuotesService]
})
export class AppModule { }
