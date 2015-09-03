var result = "";
var ranks = "";
var endText = "";

function compute() {
	var amount = 0; 
	
	amount = parseInt(document.getElementById("in").value);
	
	var hval = Math.round(amount / 100);
	var ival = Math.round(hval * (0.6 + Math.random()*0.6));
	
	var salString = "";
	var interval = hval / 5;
	
	var flag = false;
	var youRank = 0;
	
	for (var i = 1; i <= 20; i++) {
		var displayRank = 21-i;
		if (displayRank < 10) displayRank = "0" + displayRank;
		
		if (flag == false && ival > hval) {
			salString = numeral(amount).format('0,0');
			result = '<span class="you">You! &rarr; $' + salString + '</span><br>' + result;
			ranks = '<span class="you">' + displayRank + ".</span><br>" + ranks;
			youRank = 21-i;
			flag = true;
		} else {
			var sal = ival*100;
			salString = numeral(sal).format('0,0');
			result = "$" + salString + "<br>" + result;
			ranks = displayRank + ".<br>" + ranks;
		}
		ival += Math.round(Math.random()*interval + 1);
		interval *= 1 + Math.random()/25;
	} 
	
	endText = "<br>You ranked <b>" + youRank + "</b> out of 20 random survey participants in your field. Not bad!"
	
	document.getElementById("form").innerHTML = "Calculating...please wait...";
	
	var time = Math.round(Math.random() * 2500 + 1500);
	
	setTimeout(output, time);
	
	return false;
}

function output() {
	
	document.getElementById("form").innerHTML = "The results are in!";
	
	document.getElementById("result").innerHTML = result;
	document.getElementById("ranks").innerHTML = ranks;
	document.getElementById("endtext").innerHTML = endText;
}