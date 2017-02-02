import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Response, Http } from '@angular/http';
import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();

  }

  onViewQuote(q: Quote) {

    const modal = this.modalCtrl.create(QuotePage, q);
    modal.present();
    modal.onDidDismiss((unfavorite: boolean) => {
      if(unfavorite)
      {
        this.quotesService.removeQuoteFromFavorites(q);
      }
    })

  }
}
