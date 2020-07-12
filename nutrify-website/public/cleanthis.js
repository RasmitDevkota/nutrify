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
        button.onclick = function () {
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

    var curHr = mop.getHours()
    if (curHr < 12) {
        dur = "BR"; //Breakfast
    } else if (curHr < 18) {
        dur = "LU";  //Lunch
    } else {
        dur = "DI"; //Dinner
    }

    var food = out.foods[i].description + "[" + dur + "]";
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
                                if (`${result[0].className}`[0] == vowels[a]) {
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
        setTimeout(function () {
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
        buttonB.onclick = function () {
            console.log(limit.foods[i]);
        };
        var array = document.getElementById("array");
        array.appendChild(buttonB);
    }
}
