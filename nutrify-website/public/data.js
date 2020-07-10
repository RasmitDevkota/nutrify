setTimeout(function () {
    graph('overviewChart0', 'Meals');
    graph('overviewChart1', 'Nutrition');
    graph('overviewChart2', 'Fitness');
    graph('overviewChart3', 'Goals');
    graph('largeChart0', 'Meals');
}, 100);

function graph(elementID, dataID) {
    var context = document.getElementById(elementID).getContext('2d');

    setTimeout(function () {
        usersUser.get().then(function (doc) {
            console.log(doc.data());
        });
    }, 6000)
    
    switch (dataID) {
        case "Meals":
            var chart = new Chart(context, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'Meals',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            break;
        case "Nutrition":
            var chart = new Chart(context, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'Nutrition',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            break;
        case "Fitness":
            var chart = new Chart(context, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'Fitness',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            break;
        case "Goals":
            var chart = new Chart(context, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'Goals',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            break;
    }

    document.getElementById(elementID.substr(0, elementID.length-1) + 'Title' + elementID[elementID.length-1]).innerHTML = dataID;
}

var test = db.collection('temporaryCollection').doc('temporaryDocument');
var nutrientIds = [1005, 1293, 1003, 1258, 1079, 2000, 1062, 1087, 1099, 1089, 1090, 1101, 1091, 1092, 1103, 1093, 1095, 1120, 1123, 1122, 1180, 1177, 1167, 1170, 1166, 1104, 1175, 1178, 1162, 1110, 1109, 1185, 1057, 1253, 1104, 1213];
var nutrientUnits = ["G", "G", "G", "G", "G", "G", "KCAL", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "IU", "G", "G", "G", "IU", "G", "G", "G", "G", "G", "G"];

function trueA() {
    var valInput = document.getElementById("food").value;
    if (typeof valInput !== "undefined") {
        var entity = "";
        for (let j = 0; j < valInput.length; j++) {
            if (valInput[j] == " ") {
                entity += "%20";
            } else {
                entity += valInput[j];
            }
        }
        if (entity == "") {
            entity = "food";
        }
        fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=3gxUJxixMLQ0VcnleWLIzaXbkjU3a7CgwbU34cvM&query=' + entity)
            .then(res => res.json())
            .then((out) => {
                hey(out);
            }).catch(err => console.error(err));
    }
}

function hey(out) {
    var total;
    if (out.foods.length != 0) {
        document.getElementById("list").innerHTML = "";
    }
    for (let i = 0; i <= out.foods.length; i++) {
        var owner = out.foods[i].brandOwner;
        if (typeof owner === "undefined") {
            owner = "";
        } else {
            owner = " | " + out.foods[i].brandOwner;
        }
        var button = document.createElement("button");
        button.innerHTML = out.foods[i].description + owner;
        button.className = "inner";
        total = out.foods[i].description + owner;
        button.onclick = function() {
            //grab nutrients and send them to database
            addentFlow(out, i);
        };
        var list = document.getElementById("list");
        list.appendChild(button);
    }
}

function addentFlow(out, i) {
    var mop = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let today = mop.getDate() + months[mop.getMonth()] + mop.getFullYear();
    var food = out.foods[i].description;
    eval("test.update({'dailyData." + today + ".food': firebase.firestore.FieldValue.arrayUnion('" + food + "')});");


    var nutrientVal;
    console.log(out.foods[i].foodNutrients);
    //grab specific nutrients
    for (let t = 0; t < out.foods[i].foodNutrients.length; t++) {
        for (let z = 0; z < nutrientIds.length; z++) {
            if (out.foods[i].foodNutrients[t].nutrientId == nutrientIds[z]) {
                //convert units to that in the array of nutrientUnits
                if (out.foods[i].foodNutrients[t].unitName == nutrientUnits[z]) {
                    nutrientVal = out.foods[i].foodNutrients[t].value;
                } else if (out.foods[i].foodNutrients[t].unitName == "MG") { //milligram
                    nutrientVal = out.foods[i].foodNutrients[t].value / 1000;
                } else if (out.foods[i].foodNutrients[t].unitName == "UG") { //microgram
                    nutrientVal = out.foods[i].foodNutrients[t].value / 1000000;
                } else { //kJ to KCAL converter
                    nutrientVal = out.foods[i].foodNutrients[t].value / 4.184;
                }
                //z is the nutrient we are incrementing
                eval("test.update({'dailyData." + today + ".nutrients." + z + "': firebase.firestore.FieldValue.increment(" + nutrientVal + ")});");
            }
        }
    }
    //add food name to database
    //TBD function
}


const webcamElement = document.getElementById('webcam');
let net;
let constant;
let happy = true;
let limit;
async function app() {
    net = await mobilenet.load();
    const webcamConfig = {
        facingMode: 'environment'
    };
    const webcam = await tf.data.webcam(webcamElement, webcamConfig);
    let time = 0;
    var complete;
    while (happy) {
        time++;
        const img = await webcam.capture();
        const result = await net.classify(img);

        fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=3gxUJxixMLQ0VcnleWLIzaXbkjU3a7CgwbU34cvM&query=' + `${result[0].className}`)
            .then(res => res.json())
            .then((ses) => {
                limit = ses;
                happy = false;
                //remove the top after := only for debugging purposes
                if (`${result[0].probability}` > 0.4) { //check distinct probability
                    for (let m = 0; m < ses.foods.length; m++) {
                        if (ses.foods[m].description.includes(`${result[0].className}`) == true) {
                            happy = false;
                            document.getElementById("ml").style.display = "block";
                            vowels = ["a", "e", "i", "o", "u"];
                            for (let a = 0; a < 5; a++) {
                                if (`${result[0].className}` [0] == vowels[a]) {
                                    complete = "an ";
                                }
                            }
                            if (typeof complete === "undefined") {
                                complete = "a ";
                            }
                            document.getElementById("name").innerHTML = complete + `${result[0].className}`;
                        }
                    }
                }

            }).catch(err => console.error(err));
        img.dispose();
        setTimeout(function() {
            //pause := don't make messy for client
        }, 2000);
        await tf.nextFrame();
    }
}

app();

function assemble() {
    document.getElementById("top").innerHTML = "Select Correct Item:";
    document.getElementById("entOp").style.display = "none";
    document.getElementById("array").style.display = "block";

    var totalIt;
    if (limit.foods.length != 0) {
        document.getElementById("list").innerHTML = "";
    }
    for (let i = 0; i <= limit.foods.length; i++) {
        var ownerB = limit.foods[i].brandOwner;
        if (typeof ownerB === "undefined") {
            ownerB = "";
        } else {
            ownerB = " | " + limit.foods[i].brandOwner;
        }
        var buttonB = document.createElement("button");
        buttonB.innerHTML = limit.foods[i].description + ownerB;
        buttonB.className = "inner";
        totalIt = limit.foods[i].description + ownerB;
        buttonB.onclick = function() {
            console.log(limit.foods[i]);
        };
        var array = document.getElementById("array");
        array.appendChild(buttonB);
    }
}