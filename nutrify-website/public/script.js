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
        if (!window.location.href.includes("index.html") && window.location.href.includes(".html")) {
            return redirect('dashboard');
        }
        pageLoad(true);
    } else {
        pageLoad(false);
    }
});

function pageLoad(u) {
    if (u == true) {
        document.getElementById("signin").innerHTML = "Sign Out";

        window.user = firebase.auth().currentUser;
        window.usersUser = users.doc(user.uid);
        window.emailsUser = emails.doc(user.displayName);
        window.userCart = ShoppingCart.doc(user.displayName).collection(user.displayName);
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
    xhttp('overview-graphs', 'overview-graphs');
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
}

function search() {
    var search = document.getElementById("search").value;

    if (search != "") {
        var text = search;
        window.location = "search.html?query=" + text.toString();
    } else {
        display('search');
    }
};

function redirect(pagePath) {
    window.location.replace(pagePath);
};

function display(elem) {
    $('#' + elem).toggle();
};
