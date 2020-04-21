
// Liste mit allen Zitaten
const quotes = [
    {quote: `Von allen Welten, die der Mensch erschaffen hat, ist die der Bücher die Gewaltigste.`, author: "Heinrich Heine"},
    {quote: `Ein klassisches Werk ist ein Buch, das die Menschen loben, aber nie lesen`, author: "Ernest Hemingway"},
    {quote: `Gewisse Bücher scheinen geschrieben zu sein, nicht damit man daraus lerne, sondern damit man wisse, dass der Verfasser etwas gewusst hat.`, author: "Johann Wolfgang von Goethe"},
    {quote: `So etwas wie moralische oder unmoralische Bücher gibt es nicht. Bücher sind gut oder schlecht geschrieben. Weiter nichts.`, author: "Oscar Wilde"}
]

// Wählt ein Key/Value-Paar aus der Liste aus
function getRandomQuote(quotes){
    return quotes[Math.floor(Math.random()*quotes.length)]; 
}

// Ausgewähltes Key/Value-Paar wird in neuer Variable gespeichert
const subText = getRandomQuote(quotes);

// Verlinkung zu HTML Elementen für Zitat und Autor
var changeQuote = document.getElementById("quote");
var changeAuthor = document.getElementById("author");

// Key/Value-Paar wird aufgeteilt, in String umgewandelt und getrennt gespeichert
const authorText = JSON.stringify(subText.author);
const quoteText = JSON.stringify(subText.quote);

// Die Anführungszeichen am Anfang und Ende des Autors werden entfernt
// & ins HTML-Dokument übertragen
changeAuthor.innerHTML = authorText.slice(1,-1);

// Fügt das Zitat ins HTML ein
changeQuote.innerHTML = quoteText;
