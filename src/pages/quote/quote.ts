import { Quote } from './../../data/quote.interface';
import { QuotesService } from './../../services/quotes';
import { ViewController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  text: string;
  person: string;
  selectedQuote: Quote;
  constructor(private viewCtrl: ViewController, private navParams: NavParams,
    private quotesService: QuotesService) {

  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person')
    this.text = this.navParams.get('text')
  }

  onClose(unfavorite: true) {
    this.viewCtrl.dismiss(unfavorite);
  }

  onUnfavorite(q: Quote) {
    this.quotesService.removeQuoteFromFavorites(this.navParams.data) 
  }
}
