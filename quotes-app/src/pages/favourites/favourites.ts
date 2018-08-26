import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {MenuController, ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  constructor(private quoteService: QuotesService,
               private modalCtrl: ModalController) {}

  quotes: Quote[];

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavouriteQuote();
  }

  onViewQuote(quote: Quote){
     const modal = this.modalCtrl.create(QuotePage, quote);
     modal.present();
     modal.onDidDismiss((remove: boolean) => {
         if(remove){
            this.onRemoveFromFavourites(quote);
         }
     });
  }

  onRemoveFromFavourites(quote: Quote){
      this.quoteService.removeQuoteFromFavourites(quote);
      this.quotes = this.quoteService.getFavouriteQuote();
  }

}
