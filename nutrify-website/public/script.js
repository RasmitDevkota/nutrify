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
        pageLoad(true);
    } else {
        pageLoad(false);
    }
});

window.newsApiKey = "e55f2d04dbae45d4bc5c253924f6d3ed";

function pageLoad(u) {
    if (mq.matches) {
        xhttp('index-landscape', 'main-content');
    }

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

if (matchMedia && window.location.href.includes('index.html') || !window.location.href.includes('.html')) {
    const mq = window.matchMedia("(orientation: landscape)");
    mq.addListener(orientationChange);
    orientationChange(mq);
}

function orientationChange(mq) {
    if (mq.matches) {
        xhttp('index-landscape', 'main-content');
    } else {
        xhttp('index-portrait', 'main-content');
    }
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

// function trueA() {
//     var valInput = document.getElementById("food").value;
//     if (typeof valInput !== "undefined") {
//         var entity = "";
//         for (let j = 0; j < valInput.length; j++) {
//             if (valInput[j] == " ") {
//                 entity += "%20";
//             } else {
//                 entity += valInput[j];
//             }
//         }
//         fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=3gxUJxixMLQ0VcnleWLIzaXbkjU3a7CgwbU34cvM&query=' + entity)
//             .then(res => res.json())
//             .then((out) => {
//                 hey(out);
//             }).catch(err => console.error(err));
//     }
// }

// function hey(out) {
//     var total;
//     if (out.foods.length != 0) {
//         document.getElementById("list").innerHTML = "";
//     }
//     for (let i = 0; i <= out.foods.length; i++) {
//         var owner = out.foods[i].brandOwner;
//         if (typeof owner === "undefined") {
//             owner = "";
//         } else {
//             owner = " | " + out.foods[i].brandOwner;
//         }
//         var button = document.createElement("button");
//         button.innerHTML = out.foods[i].description + owner;
//         button.className = "inner";
//         total = out.foods[i].description + owner;
//         button.onclick = function () {
//             console.log(out.foods[i]);
//         };
//         var list = document.getElementById("list");
//         list.appendChild(button);
//     }
// }

// const webcamElement = document.getElementById('webcam');
// let net;
// let constant;
// let happy = true;
// let limit;

// async function app() {
//     net = await mobilenet.load();
//     const webcamConfig = { facingMode: 'environment' };
//     const webcam = await tf.data.webcam(webcamElement, webcamConfig);
//     let time = 0;
//     var complete;
//     while (happy) {
//         time++;
//         const img = await webcam.capture();
//         const result = await net.classify(img);

//         fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=3gxUJxixMLQ0VcnleWLIzaXbkjU3a7CgwbU34cvM&query=' + `${result[0].className}`)
//             .then(res => res.json())
//             .then((ses) => {
//                 limit = ses;
//                 if (`${result[0].probability}` > 0.4) { //check distinct probability
//                     for (let m = 0; m < ses.foods.length; m++) {
//                         if (ses.foods[m].description.includes(`${result[0].className}`) == true) {
//                             happy = false;
//                             document.getElementById("ml").style.display = "block";
//                             vowels = ["a", "e", "i", "o", "u"];
//                             for (let a = 0; a < 5; a++) {
//                                 if (`${result[0].className}`[0] == vowels[a]) {
//                                     complete = "an ";
//                                 }
//                             }
//                             if (typeof complete === "undefined") {
//                                 complete = "a ";
//                             }
//                             document.getElementById("name").innerHTML = complete + `${result[0].className}`;
//                         }
//                     }
//                 }

//             }).catch(err => console.error(err));
//         img.dispose();
//         setTimeout(function () {
//             //pause := (???????go?????????) don't make messy for client
//         }, 2000);
//         await tf.nextFrame();
//     }
// }

// app();

// function assemble() {
//     document.getElementById("top").innerHTML = "Select Correct Item:";
//     document.getElementById("entOp").style.display = "none";
//     document.getElementById("array").style.display = "block";

//     var totalIt;
//     if (limit.foods.length != 0) {
//         document.getElementById("list").innerHTML = "";
//     }
//     for (let i = 0; i <= limit.foods.length; i++) {
//         var ownerB = limit.foods[i].brandOwner;
//         if (typeof ownerB === "undefined") {
//             ownerB = "";
//         } else {
//             ownerB = " | " + limit.foods[i].brandOwner;
//         }
//         var buttonB = document.createElement("button");
//         buttonB.innerHTML = limit.foods[i].description + ownerB;
//         buttonB.className = "inner";
//         totalIt = limit.foods[i].description + ownerB;
//         buttonB.onclick = function () {
//             console.log(limit.foods[i]);
//         };
//         var array = document.getElementById("array");
//         array.appendChild(buttonB);
//     }
// }