import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  constructor(private quoteService: QuotesService,
               private modalCtrl: ModalController,
               private settingService: SettingsService) {}

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

  getBackground(){
      return this.settingService.isAltBackGround() ? 'altQuoteBackground' : 'quoteBackground';
  }

}
