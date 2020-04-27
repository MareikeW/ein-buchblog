// Eingaben müssen nach Abschicken gelöscht werden

class CommentsBox {
    constructor() {
        // Array, in dem alle Kommentare gespeichert werden
        this.commentsArray = JSON.parse(localStorage.getItem("commentsContainer")) || [];

        this.$form = document.querySelector("#comments-form");
        this.$authorName = document.querySelector("#fname-comment");
        this.$commentText = document.querySelector("#ftextarea-comment");
        this.$comments = document.querySelector("#comments");

        this.saveComments();
        this.addEventListeners();
    }

    // wenn auf den Submit-Button geklickt wird, werden die Eingaben in den Variablen gespeichert
    addEventListeners() {
        this.$form.addEventListener('submit', event => {
            // macht, dass nach "submit" die Seite nicht neu lädt
            event.preventDefault();
            
            var name = this.$authorName.value;
            var text = this.$commentText.value;
            // ruft Funktion, um neuen Kommentar dem Array hinzuzufügen
            this.addComment({ name, text });
        });
    }

    // fügt Author und Kommentartext ans Ende des bisherigen Arrays
    addComment({ name, text }) {
        const newComment = {
            name,
            text
        };
        this.commentsArray = [...this.commentsArray, newComment];
        // speichert Kommentar und zeigt ihn unter der Kommentarbox an
        this.saveComments();
        this.displayCommentsArray();
    }

    saveComments() {
        // neuer Kommentar wird lokal gespeichert
       localStorage.setItem('comments', JSON.stringify(this.commentsArray));
    }

    // zeigt neuen Kommentar an
    displayCommentsArray() {
        // HTML Layout für neuen Kommentar/ Style in CSS
        this.$comments.innerHTML = this.commentsArray
            .map(
                comment => `
                <div class="comment">
                <h3>${comment.name}</h3>
                <p>${comment.text}</p>
                </div>
                `
            ).join(""); // ohne "join" würde man die Kommas nach jedem Objekt sehen
       
    }

}

new CommentsBox();
