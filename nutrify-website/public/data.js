"use strict",

setTimeout(function () {
    graph('overviewChart0', 'Meals');
    graph('overviewChart1', 'Nutrition');
    graph('overviewChart2', 'Fitness');
    graph('overviewChart3', 'Goals');

    var urlParams = new URLSearchParams(window.location.search);
    var largeChart0Graph = urlParams.get('largeChart0');

    if (largeChart0Graph) {
        graph('largeChart0', largeChart0Graph);
    } else {
        graph('largeChart0', 'Meals');
    }
}, 800);

function graph(elementID, dataID) {
    var context = document.getElementById(elementID).getContext('2d');
    
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

            if (elementID.includes("largeChart")) {
                xhttp('meal-form', elementID.substr(0, elementID.length - 1) + 'Input' + elementID[elementID.length - 1]);
            }
            break;
        case "Nutrition":
            var nutritionDataLabels = [];
            var nutritionData = [];

            var getNutritionRating = new nutritionRating();

            setTimeout(function () {
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                console.log(nutritionRatingMap);

                for (var c = 0; c < 7; c++) {
                    var d = new Date(new Date() - 86400000 * (6-c));
                    var date = d.getDate() + months[d.getMonth()] + d.getFullYear();
                    nutritionData.push(Math.floor(nutritionRatingMap.get(date)));

                    var dateLabel = d.getMonth() + "/" + d.getDate();
                    nutritionDataLabels.push(dateLabel);
                }

                var chart = new Chart(context, {
                    type: 'line',
                    data: {
                        labels: nutritionDataLabels,
                        datasets: [{
                            label: 'Daily Nutrition Rating',
                            backgroundColor: "#009c68",
                            borderColor: "#009c68",
                            data: nutritionData,
                            fill: false,
                        }]
                    },
                    options: {
                        responsive: true,
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Date'
                                }
                            }],
                            yAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Rating (Percentage)'
                                }
                            }]
                        }
                    }
                });
            }, 500);
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

            if (elementID.includes("largeChart")) {
                xhttp('fitness-form', elementID.substr(0, elementID.length - 1) + 'Input' + elementID[elementID.length - 1]);
            }
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
            
            if (elementID.includes("largeChart")) {
                xhttp('goal-form', elementID.substr(0, elementID.length - 1) + 'Input' + elementID[elementID.length - 1]);
            }
            break;
    }

    document.getElementById(elementID.substr(0, elementID.length-1) + 'Title' + elementID[elementID.length-1]).innerHTML = dataID;
};

function addMeal() {
    var meal = inputText('meal');
    var foods = inputText('food').replace(/, /g, ",").replace(/ ,/g, ",").split(",");
    foods = foods.filter(a => a !== "");

    var mop = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let today = mop.getDate() + months[mop.getMonth()] + mop.getFullYear();

    eval("usersUser.update({'dailyData." + today + ".meals." + meal + "': foods });");
};

var goalTemplates = new Map([
    ["Eat", [
        "meals per day"
    ]],
    ["(Nutrients) Consume", [
        "calories per meal",
        "calories per day",
        "calories per week"
    ]],
    ["Drink", [
        "cups of water per day",
        "cups of juice per day"
    ]],
    ["(Exercise) Do", [ // Miscellaneous Activities (without a standard verb like Run or Jog)
        "pushups per day",
        "situps per day",
    ]],
    ["Run", [
        "miles per hour",
        "miles per day",
        "miles per week",
        "hours per day"
    ]],
    ["Walk", [
        "miles per hour",
        "miles per day",
        "miles per week",
        "hours per day"
    ]],
    ["Jog", [
        "miles per hour",
        "miles per day",
        "miles per week",
        "hours per day"
    ]],
    ["Weightlift", [
        "pounds",
        "hours per day",
        "hours per week"
    ]]
]);

function goalActionChange() {
    var action = inputText("goalAction");

    var units = document.getElementById("goalUnits");
    var options = goalTemplates.get(action);

    units.innerHTML = "<option selected>Choose...</option>";
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var elem = document.createElement("option");
        elem.textContent = option;
        elem.value = option;
        units.appendChild(elem);
    }
}

function addGoal() {
    var action = inputText('goalAction');
    var amount = inputText('goalAmount');
    var units = inputText('goalUnits');

    if (action == "Choose...") {
        alert("Please select an action!");
        return console.error("Error: Goal form was submitted without an action; rejected submit.");
    } else if (units == "Choose...") {
        alert("Please select units!");
        return console.error("Error: Goal form was submitted without units; rejected submit.");
    } else {
        var validationResult = validate(action, amount, units);
        if (validationResult[0] != true) {
            alert(validationResult[1]);
            return console.error("Goal form was submitted without a valid amount; rejected submit.\n" + validationResult[1]);
        }
    }

    var goal = action + " " + amount + " " + units;
    usersUser.update({
        goal: goal
    });
};

var fitnessTemplates = new Map([
    ["Do", [ // Miscellaneous Activities (without a standard verb like Run or Jog)
        "pushups",
        "situps",
    ]],
    ["Run", [
        "miles",
        "hours"
    ]],
    ["Walk", [
        "miles",
        "hours"
    ]],
    ["Jog", [
        "miles",
        "hours"
    ]],
    ["Weightlift", [
        "pounds",
        "hours"
    ]]
]);

function fitnessTimeFormatChange() {
    var selection = document.getElementById("fitnessTimeFormat").checked;

    if (selection) {
        display('fitnessTimeDuration');
        display('fitnessTimeRange');
    } else {
        display('fitnessTimeRange');
        display('fitnessTimeDuration');
    }
};

function fitnessActionChange() {
    var action = inputText("fitnessAction");

    var units = document.getElementById("fitnessUnits");
    units.innerHTML = "<option selected>Choose...</option>";

    if (action != "Choose...") {
        units.disabled = false;
        var options = fitnessTemplates.get(action);

        units.innerHTML = "<option selected>Choose...</option>";
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            var elem = document.createElement("option");
            elem.textContent = option;
            elem.value = option;
            units.appendChild(elem);
        }
    } else {
        units.disabled = true;
    }
};

function logFitnessActivity() {
    var action = inputText('fitnessAction');
    var amount = inputText('fitnessAmount');
    var units = inputText('fitnessUnits');

    if (action == "Choose...") {
        alert("Please select an action!");
        return console.error("Error: Fitness form was submitted without an action; rejected submit.");
    } else if (units == "Choose...") {
        alert("Please select units!");
        return console.error("Error: Fitness form was submitted without units; rejected submit.");
    } else {
        var validationResult = validate(action, amount, units);
        if (validationResult[0] != true) {
            alert(validationResult[1]);
            return console.error("Fitness form was submitted without a valid amount; rejected submit.\n" + validationResult[1]);
        }
    }

    var selection = document.getElementById("fitnessTimeFormat").checked;
    if (selection) {
        var startTime = inputText('startTimeInput');
        var endTime = inputText('endTimeInput');

        var startDate = new Date();
        startDate.setHours(startTime.substr(0, 2));
        startDate.setMinutes(startTime.substr(3, 5));
        startDate.setSeconds(0);

        var endDate = new Date();
        endDate.setHours(endTime.substr(0, 2));
        endDate.setMinutes(endTime.substr(3, 5));
        endDate.setSeconds(0);

        var time = (endDate - startDate) / 60000;

        if (time < 1) {
            alert("Time duration can not be negative or equal to 0! Please try again!");
            return console.error("Error: Fitness time was submitted without a valid amount; rejected submit.");
        } else {
            var log = {
                timeFormat: "range",
                startTime: startTime,
                endTime: endTime,
                action: action,
                amount: amount,
                units: units
            }
        }
    } else {
        var time = inputText('fitnessRecordTime');

        if (!time) {
            alert("Please enter a time! Please try again!");
            return console.error("Error: Fitness time was submitted without a valid amount; rejected submit.");
        } else {
            var log = {
                timeFormat: "specific",
                recordTime: time,
                action: action,
                amount: amount,
                units: units
            }
        }
    }

    var mop = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = mop.getDate() + months[mop.getMonth()] + mop.getFullYear();

    eval("usersUser.update({'dailyData." + today + ".fitness': firebase.firestore.FieldValue.arrayUnion(log)});");
};

function validate(action, amount, units) {
    if (amount < 0 || amount.includes("-")) {
        return [false, "Error: amount cannot be a negative number."];
    } else if (!action) {
        
    } else {
        return [true];
    }
};

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

class nutritionRating {
    constructor() {
        var calc = 0;
        var nutrientTotal = [];
        var catastrophe = "";
        var RegularDiet = ["150=350", "2.2=7.7", "0~30;0=10.8|31~60;11.16=21.6|61~100;21.96=36|101~150;21=54|150~200;21=72|201~275;21=80|255~500;30=120", "16=22", "25=30", "M;0=36|F;0=25", "M;2400=2900|F;1800=2300", "M;19-50;1=2.5|M;51-70;1=2|M;71-150;1.2=2|W;0-50;1=2.5|W;51-1501.2=2", "0.0018=0.010", "2-11;0.0115=0.0137|12-19;0.014=0.016|M;20-150;0.0163=0.0182|W;20-150;0.0126=0.0135", "1-3;0.07=0.09|4-8;0.11=0.13|9-13;0.24|F;14-18;0.34=0.38|F;19-30;0.29=0.33|F;31-150;0.3=0.34|M;14-150;0.39=0.43", "1-8;0.0010=0.002|M;9-150;0.0019=0.0023|F;9-150;0.0016=0.0018", "0.8=1.2", "3.5=5", "0.000050=0.00007", "1.5=2.3", "F;0.0007=9|M;0.0010=0.0012", "0.003=0.01", "0.008=0.012", "0.008=0.021", "M;.5=.6|F;.375=0.475", "0.0004=0.0008", "0.013=0.02", "0.005=1", "M;0.0010=0.0015|F;0.0009=0.0013", "700=10000", "0.0013=0.0017", "0.0000020=0.0000028", "0.065=2", "600=2000", "0.006=0.014", "0.00007=0.00013", "0=0.04", "0.2=0.4", "0.5=1", "0.1=0.4"];

        var age = "13";
        var weight = "100";
        var gender = "M";

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        window.nutritionRatingMap = new Map();

        var test = db.collection('temporaryCollection').doc('temporaryDocument');
        test.get().then(function (doc) {
            for (var c = 0; c < 7; c++) {
                var d = new Date(new Date() - 86400000 * c);
                var date = d.getDate() + months[d.getMonth()] + d.getFullYear();

                var dailyData = doc.data().dailyData;
                var data = (dailyData) ? dailyData[date] : null;
                var nutrients = (data) ? data.nutrients : null;

                if (!data || !nutrients) {
                    console.log("User does not have nutrition data for the date " + date);
                    window.nutritionRatingMap.set(date, 0);
                    continue;
                }

                for (var i = 0; i < 36; i++) {
                    catastrophe = "";
                    var force = RegularDiet[i];
                    var classArray = [];
                    var comp = "";

                    for (var l = 0; l < force.length; l++) {
                        if (force[l] == "|" || l + 1 == force.length) {
                            if (l + 1 == force.length) {
                                comp += force[l];
                            }
                            classArray.push(comp);
                            comp = "";
                        }
                        else {
                            comp += force[l];
                        }
                    }

                    var finalAge = "", finalWeight = "", finalGender = "", finalValue = "", prop = "", countUp = 0;
                    var bunny = true;

                    for (var z = 0; z < classArray.length; z++) {
                        var chaste = classArray[z];

                        for (var m = 0; m < chaste.length; m++) {
                            if (chaste[m] == ";" || m + 1 == chaste.length) {
                                if (m + 1 == chaste.length) {
                                    prop += chaste[m];
                                }
                                if (prop == "M" || prop == "F") {
                                    finalGender = prop;
                                }
                                else if (prop.includes("-") == true) {
                                    finalAge = prop;
                                }
                                else if (prop.includes("~") == true) {
                                    finalWeight = prop;
                                }
                                else if (prop.includes("=") == true) {
                                    finalValue = prop;
                                }
                                prop = "";
                            }
                            else {
                                prop += chaste[m];
                            }
                        }

                        if (finalAge != "") {
                            countUp++;
                        }

                        if (finalGender != "") {
                            countUp++;
                        }

                        if (finalWeight != "") {
                            countUp++;
                        }

                        if ([0, 1, 2, 3].includes(countUp)) {
                            function system(compute, initital, boy) {
                                var startVal = "", endVal = "", cat = "";

                                for (var k = 0; k < compute.length; k++) {
                                    if (compute[k] == boy || k + 1 == compute.length) {
                                        if (k + 1 == compute.length) {
                                            cat += compute[k];
                                            endVal = parseFloat(cat, 10);
                                        } else {
                                            startVal = parseFloat(cat, 10);
                                        }
                                        cat = "";
                                    } else {
                                        cat += compute[k];
                                    }
                                }

                                if (initital <= endVal && initital >= startVal) {
                                    calc++;
                                }

                                if (boy == "=") {
                                    catastrophe = startVal;
                                }
                            }

                            if (finalAge != "") {
                                system(finalAge, age, "-");
                            }

                            if (finalWeight != "") {
                                system(finalWeight, weight, "~");
                            }

                            if (finalGender != "" && finalGender == gender) {
                                calc++;
                            }

                            if (finalValue != "") {
                                system(finalValue, nutrients[i], "=");
                            }

                            if (calc == (countUp + 1)) {
                                bunny = false;
                            }
                        }

                        calc = 0; //reinitialize variable for the next loop
                        countUp = 0;
                    }

                    if (bunny == true && catastrophe != "") {
                        //Client doing bad on these nutrients
                        var criss = (nutrients[i] / catastrophe) * 100;
                        if (isNaN(criss) == true) {
                            criss = 0;
                        }
                        nutrientTotal.push(criss);
                    }
                    else if (bunny = false) {
                        nutrientTotal.push(100);
                    }

                    bunny = true;

                    if (i == 35) {
                        var sum = 0;

                        for (var o = 0; o < nutrientTotal.length; o++) {
                            sum += nutrientTotal[o];
                        }

                        var average = sum / 36;
                        window.nutritionRatingMap.set(date, average);
                        continue;
                    }
                }
            }
        }).catch(function (e) {
            console.error(e);
        });
    }
}