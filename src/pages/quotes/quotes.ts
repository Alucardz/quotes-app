import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Quotes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {

  quotes: Quote[];
  categoryTitle: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {
    this.quotes = navParams.data.quotes;
    this.categoryTitle = navParams.data.category;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      subTitle: "Are you sure?",
      message: "Are you sure you want to add the quote?",
      buttons: [{
        text: "Yes, go ahead",
        handler: () => {
          this.quotesService.addQuoteToFavorites(selectedQuote);
        }
      },
      {
        text: "No I changed my mind",
        role: "cancel",
        handler: () => {
          console.log("cancel");
        }
      }]
    });



    alert.present();
  }

  onRemoveFromFavorite(q: Quote) {
    return this.quotesService.removeQuoteFromFavorites(q);
  }

  isFavorite(q: Quote) {
    return this.quotesService.isQuoteFavorite(q);
  }

}
