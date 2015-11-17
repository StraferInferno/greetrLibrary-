
// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Akshay','Venkatesh','es');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$("#login").click(function(){

// create a new 'Greetr' object (let's pretend we know the name from the login)
	var loginGrtr = G$('Akshay','Venkatesh');


// hide the login on the screen
	$('#logindiv').hide();

// Storing the value of the lannguage value form the html selector element
	var sel = $('#lang').val();


// Passsing the selected value to the setLang method
loginGrtr.setLang(sel);

console.log(sel);

// Now fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language in the above code
loginGrtr.setHeading('#greeting',true);

// calling the log function
loginGrtr.log();


});


