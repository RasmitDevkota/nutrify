firebase.initializeApp({
    apiKey: "AIzaSyBVT22t-x2H76119AHG8SgPU0_A0U-N1uA",
    authDomain: "my-scrap-project.firebaseapp.com",
    databaseURL: "https://my-scrap-project.firebaseio.com",
    projectId: "my-scrap-project",
    storageBucket: "my-scrap-project.appspot.com",
    messagingSenderId: "334998588870",
    appId: "1:334998588870:web:6b218e9655ade3a6c536c7",
    measurementId: "G-66W8QQ9W35"
});

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
        if (document.getElementById('search').value.toString().toLowerCase() != "") {
            search();
        } else if (document.getElementById('popupsignin').style.display != "none") {
            signIn();
        } else if (document.getElementById('signup').style.display != "none") {
            handleSignUp();
        } else if (document.getElementById('pwreset').style.display != "none") {
            sendPasswordReset();
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

        if (window.location.href.includes("products.html")) {
            var urlParams = new URLSearchParams(window.location.search);
            var query = urlParams.get('query');
            results(query.toLowerCase());
        } else if (window.location.href.includes("productsPage.html")) {
            var urlParams = new URLSearchParams(window.location.search);
            var query = urlParams.get('query');
            product(query.toLowerCase());
        } else if (window.location.href.includes("cart.html")) {
            showCart();
        } else if (window.location.href.includes("c2c.html")) {
            c2cStart();
        } else {
            console.log("info page?");
        }
    } else {
        window.user = null;

        if (window.location.href.includes("products.html")) {
            var urlParams = new URLSearchParams(window.location.search);
            var query = urlParams.get('query');
            results(query.toString());
        } else if (window.location.href.includes("cart.html")) {
            document.getElementById("cartItems").innerHTML = "<h1 style='text-align: center'>Not signed in! Sign in to use cart.<h1>";
            document.getElementById("totalPrice").innerHTML = "Total Price: $0.00";
        } else if (window.location.href.includes("c2c.html")) {
            c2cStart();
        }
    }
};

function xhttp(source, tag) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(tag).innerHTML += this.responseText;
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