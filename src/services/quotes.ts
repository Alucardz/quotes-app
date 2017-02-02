import { Quote } from './../data/quote.interface';
export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(q: Quote) {
        this.favoriteQuotes.push(q);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(q: Quote) {
        const position = this.favoriteQuotes.findIndex((qElement: Quote) => {
            return qElement.id == q.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

}