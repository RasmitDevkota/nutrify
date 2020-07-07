var firebaseConfig = {
    apiKey: "AIzaSyBa7fz4J9CqmJlM8WQNbWv-8EvMvriI9n8",
    authDomain: "nutrify-ai.firebaseapp.com",
    databaseURL: "https://nutrify-ai.firebaseio.com",
    projectId: "nutrify-ai",
    storageBucket: "nutrify-ai.appspot.com",
    messagingSenderId: "235517598565",
    appId: "1:235517598565:web:c917a7848d40a6b482df8c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
db.enablePersistence();

var users = db.collection("users");
var emails = db.collection("emails");
var Products = db.collection("products");
var ShoppingCart = db.collection("cart");
var Orders = db.collection("orders");

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key == "Enter") {
        if (document.getElementById('search').value.toString().toLowerCase() != "" && document.getElementById('search').style.visibility != hidden) {
            search();
        }
    }
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        pageLoad(true);
    } else {
        pageLoad(false);
    }
});

function pageLoad(u) {
    if (window.location.href.includes("index.html") || !window.location.href.includes(".html")) {
        xhttp("indexNavbar", "navbarHeader");
    } else {
        xhttp("navbar", "navbarHeader");
    }

    xhttp("auth", "authDiv");
    xhttp("footer", "footerFooter");

    if (u == true) {
        document.getElementById("signin").innerHTML = "Sign Out";

        window.user = firebase.auth().currentUser;
        window.usersUser = users.doc(user.uid);
        window.emailsUser = emails.doc(user.displayName);
        window.userCart = ShoppingCart.doc(user.displayName).collection(user.displayName);

        if (window.location.href.includes("search.html")) {
            var urlParams = new URLSearchParams(window.location.search);
                var query = urlParams.get('query');
                results(query.toLowerCase());
        }
    } else {
        window.user = null;


    }
};

// function xhttp(source, tag) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById(tag).innerHTML += this.responseText;
//         }
//     };

//     xhttp.open("GET", `${source}.html`, true);
//     xhttp.send();
// }

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