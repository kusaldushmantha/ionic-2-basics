import {Quote} from "../data/quote.interface";

export class QuotesService {
    private favouriteQuotes: Quote[] = [];

    addQuoteToFavourites(quote: Quote){
        this.favouriteQuotes.push(quote);
        console.log(this.favouriteQuotes);
    }

    removeQuoteFromFavourites(quote: Quote){
        const quotePosition = this.favouriteQuotes.findIndex((quoteElement: Quote) => {
           return  quoteElement.id == quote.id;
        });
        this.favouriteQuotes.splice(quotePosition, 1);
    }

    getFavouriteQuote(){
        return this.favouriteQuotes.slice();
    }
}