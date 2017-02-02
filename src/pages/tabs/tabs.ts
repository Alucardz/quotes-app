import { Component } from '@angular/core';
import { LibraryPage } from './../library/library';
import { FavouritesPage } from './../favourites/favourites';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root = FavouritesPage;
  tab2Root = LibraryPage;

}
