/**
 * Created by twerg_000 on 4/21/2014.
 */
/*jshint browser:true */
var total = {};
    total.value = 0;

var d20DiceRolls = [];
var d10DiceRolls = [];
var d8DiceRolls = [];
var d6DiceRolls = [];
var d4DiceRolls = [];

var reset = function() {
    document.getElementById("d8result").innerHTML = "";
    document.getElementById("d10result").innerHTML = "";
    document.getElementById("d20result").innerHTML = "";
    document.getElementById("d6result").innerHTML = "";
    document.getElementById("d4result").innerHTML = "";
    d20DiceRolls = [];
    d10DiceRolls = [];
    d8DiceRolls = [];
    d6DiceRolls = [];
    d4DiceRolls = [];
    total.value = 0;
    document.getElementById("total").innerHTML = "Total: 0";
};

var roll = function(diceRolls, dNResult, times, sides) {

    if (diceRolls.length = 0) {
	total.value = 0;
        document.getElementById("total").innerHTML = "";
		} else if(diceRolls.length < 0) {
        document.getElementById("d20result").innerHTML = "";
        document.getElementById("d10result").innerHTML = "";
        document.getElementById("d8result").innerHTML = "";
        document.getElementById("d6result").innerHTML = "";
        document.getElementById("d4result").innerHTML = "";
        d20DiceRolls = [];
        d10DiceRolls = [];
        d8DiceRolls = [];
        d6DiceRolls = [];
        d4DiceRolls = [];
        

    }
    var rolled = parseInt(document.getElementById(times).value);
    for (var i = 0; i < rolled; i++) {
        var result = (Math.floor(Math.random() * sides + 1)).toString();
        diceRolls.push(result);
    }
    document.getElementById(dNResult).innerHTML = diceRolls.toString();
    for (var j = 0; j < diceRolls.length; j++) {
        total.value += parseInt(diceRolls[j]);
    }
    document.getElementById("total").innerHTML = "Total: " + total.value.toString();
};




document.getElementById("total").innerHTML = "Total: " + total.value.toString();





