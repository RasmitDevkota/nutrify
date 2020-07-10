firebase.initializeApp({
    apiKey: "AIzaSyBa7fz4J9CqmJlM8WQNbWv-8EvMvriI9n8",
    authDomain: "nutrify-ai.firebaseapp.com",
    databaseURL: "https://nutrify-ai.firebaseio.com",
    projectId: "nutrify-ai",
    storageBucket: "nutrify-ai.appspot.com",
    messagingSenderId: "235517598565",
    appId: "1:235517598565:web:c917a7848d40a6b482df8c"
});

var db = firebase.firestore();
db.enablePersistence();

var users = db.collection("users");
var emails = db.collection("emails");

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (!window.location.href.includes("index.html") && window.location.href.includes(".html") && !window.location.href.includes("dashboard.html")) {
            return redirect('dashboard.html');
        }
        pageLoad(true);
    } else {
        pageLoad(false);
    }
});

function pageLoad(u) {
    if (u) {
        window.user = firebase.auth().currentUser;
        window.userIcon = (user.photoURL) ? user.photoURL : "nouser.png";
        window.usersUser = users.doc(user.uid);
        window.emailsUser = emails.doc(user.displayName);
    } else {
        window.user = null;
    }
};

if (matchMedia && window.location.href.includes('index.html') || !window.location.href.includes('.html')) {
    const mq = window.matchMedia("(orientation: landscape)");
    mq.addListener(orientationChange);
    orientationChange(mq);
}

if (window.location.href.includes('index.html') || !window.location.href.includes('.html')) {
    if (mq.matches) {
        xhttp('index-landscape', 'main-content');
    }
}

function orientationChange(mq) {
    if (mq.matches) {
        xhttp('index-landscape', 'main-content');
    } else {
        xhttp('index-portrait', 'main-content');
    }
}

if (window.location.href.includes("dashboard.html")) {
    setTimeout(function () {
        document.getElementById("toastUsername").innerHTML = user.displayName;
        document.getElementById("toastIcon").src = userIcon;
        document.getElementById("profileIcon").src = userIcon;
    }, 1000);

    // Load Graph Data
    xhttp('overview-graphs', 'overview-graphs');

    // Load News Cards API
    xhttp('news-cards', 'news-cards');

    var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=US&' + 'category=health&' +
        'sortBy=popularity&' +
        'apiKey=e55f2d04dbae45d4bc5c253924f6d3ed';

    var xhttp = new XMLHttpRequest();
    var articles = [];
    xhttp.onreadystatechange =  function () {
        if (this.readyState == 4 && this.status == 200) {
            articles = JSON.parse(this.responseText).articles;

            for (i = 0; i < 4; i++) {
                var dateArray = new Date(new Date(articles[0]["publishedAt"]) - new Date().getTimezoneOffset()).toString().split(' ')
                var date = dateArray[1] + " " + dateArray[2] + " " + dateArray[3];

                document.getElementById('newsImage' + i).src = articles[i]["urlToImage"];
                document.getElementById('newsTitle' + i).innerHTML = articles[i]["title"];
                document.getElementById('newsButton' + i).href = articles[i]["url"];
                document.getElementById('newsInfo' + i).innerHTML = articles[i]["source"]["name"] + " | " + date;
            }
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

function xhttp(source, tag) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(tag).innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", `${source}.html`, true);
    xhttp.send();
};

function redirect(pagePath) {
    window.location.replace(pagePath);
};

function display(elem) {
    $('#' + elem).toggle();
};

function inputText(id) {
    return document.getElementById(id).value;
}