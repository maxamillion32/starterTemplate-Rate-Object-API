  
function rateFive(){

    var data = JSON.stringify({
        "rate": 5
    });

    var proj = new XMLHttpRequest();
    proj.withCredentials = true;

    proj.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    proj.open("PUT", "https://miiartist.stamplayapp.com/api/cobject/v1/project/5693c01d76fdc12145c041cf/rate");
    proj.setRequestHeader("accept", "application/json");
    proj.setRequestHeader("content-type", "application/json");

    proj.send(data);
}

function upvote(){
    var data = JSON.stringify({
        "type": "upvote"
    });

    var proj = new XMLHttpRequest();
    proj.withCredentials = true;

    proj.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    proj.open("PUT", "https://miiartist.stamplayapp.com/api/cobject/v1/project/5693c01d76fdc12145c041cf/vote");
    proj.setRequestHeader("accept", "application/json");
    proj.setRequestHeader("content-type", "application/json");
    proj.send(data);
}

function downvote(){
    var data = JSON.stringify({
        "type": "downvote"
    });

    var proj = new XMLHttpRequest();
    proj.withCredentials = true;

    proj.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    proj.open("PUT", "https://miiartist.stamplayapp.com/api/cobject/v1/project/5693c01d76fdc12145c041cf/vote");
    proj.setRequestHeader("accept", "application/json");
    proj.setRequestHeader("content-type", "application/json");
    proj.send(data);
}

function createObjectComment(){

    var comment = document.getElementById('comment').value;

    var data = JSON.stringify({
        "text": comment
    });

    var proj = new XMLHttpRequest();
    proj.withCredentials = true;

    proj.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    proj.open("PUT", "https://miiartist.stamplayapp.com/api/cobject/v1/project/5693c01d76fdc12145c041cf/comment");
    proj.setRequestHeader("accept", "application/json");
    proj.setRequestHeader("content-type", "application/json");
    proj.send(data);
}
