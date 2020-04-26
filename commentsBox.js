// Eingaben müssen nach Abschicken gelöscht werden

class CommentsBox {
    constructor() {
        this.commentsArray = JSON.parse(localStorage.getItem("commentsContainer")) || [];
        this.name = "";
        this.text = "";

        this.$form = document.querySelector("#comments-form");
        this.$authorName = document.querySelector("#fname-comment");
        this.$commentText = document.querySelector("#ftextarea-comment");
        this.$comments = document.querySelector("#comments");

        this.saveComments();
        this.addEventListeners();
    }

    addEventListeners() {
        this.$form.addEventListener('submit', event => {
            // stoppt, dass nach "submit" die Seite nicht neu lädt
            event.preventDefault();
            
            var name = this.$authorName.value;
            var text = this.$commentText.value;
            
            this.addComment({ name, text });
            
        });
    }

    addComment({ name, text }) {
        const newComment = {
            name,
            text
        };
        this.commentsArray = [...this.commentsArray, newComment];
        this.saveComments();
        this.displayCommentsArray();
    }

    saveComments() {
       localStorage.setItem('comments', JSON.stringify(this.commentsArray));
    }

    displayCommentsArray() {
        //const hasComments = this.commentsArray.length > 0;
        this.$comments.innerHTML = this.commentsArray
            .map(
                comment => `
                <div class="comment">
                <h3>${comment.name}</h3>
                <p>${comment.text}</p>
                </div>
                `
            ).join("");
       
    }

}

new CommentsBox();
