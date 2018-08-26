import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  constructor(private quoteService: QuotesService) {}

  quotes: Quote[];

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavouriteQuote();
  }

}
