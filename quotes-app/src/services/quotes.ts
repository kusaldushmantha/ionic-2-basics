import {Quote} from "../data/quote.interface";
import quotes from "../data/quotes";

export class QuotesService {
    private favouriteQuotes: Quote[] = [];

    addQuoteToFavourites(quote: Quote){
        this.favouriteQuotes.push(quote);
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