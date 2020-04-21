
// Gibt irgendein Zitat aus der Liste aus
var quotes = [
    {quote: `Von allen Welten, die der Mensch erschaffen hat, ist die der Bücher die Gewaltigste.`, author: "Heinrich Heine"},
    {quote: `Ein klassisches Werk ist ein Buch, das die Menschen loben, aber nie lesen`, author: "Ernest Hemingway"},
    {quote: `Gewisse Bücher scheinen geschrieben zu sein, nicht damit man daraus lerne, sondern damit man wisse, dass der Verfasser etwas gewusst hat.`, author: "Johann Wolfgang von Goethe"},
    {quote: `So etwas wie moralische oder unmoralische Bücher gibt es nicht. Bücher sind gut oder schlecht geschrieben. Weiter nichts.`, author: "Oscar Wilde"}
]

class BookQuotes {
    constructor(){
        this.pickQuoteFromRandomQuote = pickedQuoteAndAuthor;
        this.pickedQuote = pickedQuote;
    }

    

randomQuote(quotes) {
    var pickedQuoteAndAuthor = quotes[Math.floor(Math.random()*quotes.length)];
    return pickedQuoteAndAuthor;   
}


pickQuoteFromRandomQuote(pickedQuoteAndAuthor) {

}
//console.log(randomQuote(quotes));

//document.getElementById("quote").innerHTML = randomQuote(quotes);


}

randomQuote(quotes);

