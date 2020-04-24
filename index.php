<? php
    //wenn der submit-Button geklickt wurde
    if (isset($_GET['submit'])) {
        echo $_GET['comment-text'];
        echo $_GET['name'];
    }

?>