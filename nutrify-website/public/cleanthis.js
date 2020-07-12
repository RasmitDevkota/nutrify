var calc = 0;
var cute = [];
var catastrophe = "";
var test = db.collection("temporaryCollection").doc("temporaryDocument");
var nutrientUnits = ["G", "G", "G", "G", "G", "G", "KCAL", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "IU", "G", "G", "G", "IU", "G", "G", "G", "G", "G", "G"];
var nutrientNames = ["Carbohydrates", "Polyunsaturated Fats", "Proteins", "Saturated Fats", "Dietary Fibers", "Sugars", "Kilocalories", "Calcium", "Fluoride", "Iron", "Magnesium", "Manganese", "Phosphorus", "Potassium", "Selenium", "Sodium", "Zinc", "CryptoXanthin", "Lutein Zeaxanthin", "Lycopene", "Choline", "Folate", "Niacin", "Pantothenic Acid", "Riboflavin", "Vitamin A", "Vitamin B-6", "Vitamin B-12", "Vitamin C", "Vitamin D", "Vitamin E", "Vitamin K", "Caffeine", "Cholesterol", "Fatty Acid (EPA)", "Leucine"]
var RegularDiet = ["150=350", "2.2=7.7", "0~30;0=10.8|31~60;11.16=21.6|61~100;21.96=36|101~150;21=54|150~200;21=72|201~275;21=80|255~500;30=120", "16=22", "25=30", "M;0=36|F;0=25", "M;2400=2900|F;1800=2300", "M;19-50;1=2.5|M;51-70;1=2|M;71-150;1.2=2|W;0-50;1=2.5|W;51-1501.2=2", "0.0018=0.010", "2-11;0.0115=0.0137|12-19;0.014=0.016|M;20-150;0.0163=0.0182|W;20-150;0.0126=0.0135", "1-3;0.07=0.09|4-8;0.11=0.13|9-13;0.24|F;14-18;0.34=0.38|F;19-30;0.29=0.33|F;31-150;0.3=0.34|M;14-150;0.39=0.43", "1-8;0.0010=0.002|M;9-150;0.0019=0.0023|F;9-150;0.0016=0.0018", "0.8=1.2", "3.5=5", "0.000050=0.00007", "1.5=2.3", "F;0.0007=9|M;0.0010=0.0012", "0.003=0.01", "0.008=0.012", "0.008=0.021", "M;.5=.6|F;.375=0.475", "0.0004=0.0008", "0.013=0.02", "0.005=1", "M;0.0010=0.0015|F;0.0009=0.0013", "700=10000", "0.0013=0.0017", "0.0000020=0.0000028", "0.065=2", "600=2000", "0.006=0.014", "0.00007=0.00013", "0=0.04", "0.2=0.4", "0.5=1", "0.1=0.4"];

function adventure() {
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = date.getDate() + months[date.getMonth()] + date.getFullYear();

    test.get().then(function (doc) {
        var foodItems = doc.data().dailyData[date].food;
        console.log(foodItems);
    });

    nutritionalSync(date);
}

function nutritionalSync(date) {
    var age = "13";
    var weight = "100"; // lb., whole number [0,500]
    var gender = "M";

    test.get().then(function (doc) {
        var nutrients = doc.data().dailyData[date].nutrients;

        for (let i = 0; i < 36; i++) {
            catastrophe = "";
            var force = RegularDiet[i];
            var classArray = [];
            var comp = "";

            for (let l = 0; l < force.length; l++) {
                if (force[l] == "|" || l + 1 == force.length) {
                    if (l + 1 == force.length) {
                        comp += force[l];
                    }
                    classArray.push(comp);
                    comp = "";
                } else {
                    comp += force[l];
                }
            }

            var finalAge = "", finalWeight = "", finalGender = "", finalValue = "", prop = "", countUp = 0;
            var bunny = true;

            for (let z = 0; z < classArray.length; z++) {
                var chaste = classArray[z];
                
                for (let m = 0; m < chaste.length; m++) {
                    if (chaste[m] == ";" || m + 1 == chaste.length) {
                        if (m + 1 == chaste.length) {
                            prop += chaste[m];
                        }
                        if (prop == "M" || prop == "F") {
                            finalGender = prop;
                        } else if (prop.includes("-") == true) {
                            finalAge = prop;
                        } else if (prop.includes("~") == true) {
                            finalWeight = prop;
                        } else if (prop.includes("=") == true) {
                            finalValue = prop;
                        }
                        prop = "";
                    } else {
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

                if (countUp == 0) {
                    predetermined(finalAge, finalGender, finalWeight, finalValue, age, gender, weight, nutrients[i], i, 1);
                    if (calc == 1) {
                        console.log("You are doing well on " + nutrientNames[i]);
                        bunny = false;
                    }
                } else if (countUp == 1) {
                    predetermined(finalAge, finalGender, finalWeight, finalValue, age, gender, weight, nutrients[i], i, 2);
                    if (calc == 2) {
                        console.log("You are doing well on " + nutrientNames[i]);
                        bunny = false;
                    }
                } else if (countUp == 2) {
                    predetermined(finalAge, finalGender, finalWeight, finalValue, age, gender, weight, nutrients[i], i, 3);
                    if (calc == 3) {
                        console.log("You are doing well on " + nutrientNames[i]);
                        bunny = false;
                    }
                } else if (countUp == 3) {
                    predetermined(finalAge, finalGender, finalWeight, finalValue, age, gender, weight, nutrients[i], i, 4);
                    if (calc == 4) {
                        console.log("You are doing well on " + nutrientNames[i]);
                        bunny = false;
                    }
                }

                calc = 0; //reinitialize variable for the next loop
                countUp = 0;
            }

            if (bunny == true & catastrophe != "") {
                //Client doing bad on these nutrients
                var criss = (nutrients[i] / catastrophe) * 100;
                if (isNaN(criss) == true) {
                    criss = 0;
                }
                cute.push(criss);
            } else if (bunny = false) {
                cute.push(100);
            }
            bunny = true;
            if (i == 35) {
                last();
            }
        }
    })
}

function last() {
    var sum = 0;

    for (let o = 0; o < cute.length; o++) {
        sum += cute[o];
    }

    var average = sum / 36;
    console.log(average + "%"); // FINALLY! WHAT I WANTED!
}

function predetermined(finalAge, finalGender, finalWeight, finalValue, age, gender, weight, nutrients, ind, calcCount) {
    if (finalAge != "") {
        system(finalAge, age, "-", ind, calcCount);
    }
    if (finalWeight != "") {
        system(finalWeight, weight, "~", ind, calcCount);
    }
    if (finalGender != "") {
        if (finalGender == gender) {
            calc++;
        }
    }
    if (finalValue != "") {
        system(finalValue, nutrients, "=", ind, calcCount);
    }

}

function system(compute, initital, boy, ind, calcCount) {
    var startVal = "", endVal = "", cat = "";
    for (let k = 0; k < compute.length; k++) {
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
    if (initital <= endVal & initital >= startVal) {
        calc++;
    }
    if (startVal == 0 & calcCount == calc) {
        console.log("You can have some more " + nutrientNames[ind] + " in your diet. But make sure to keep under the limits of " + endVal + nutrientUnits[ind] + " !");
    }
    if (boy == "=") {
        catastrophe = startVal;
    }
}