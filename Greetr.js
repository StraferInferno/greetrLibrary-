(function(global , $){

// 'new' an object
var Greetr = function (firstname,lastname,language){

return new Greetr.init(firstname,lastname,language);
}


/**Using this variable so that this is not exposed globally but available inside this function **/
var supportedLangs = ['en','es'];

var greetings = {

  en : 'Hello',
  es :'Hola'
};

var formalGreetings = {

  en : 'Greetings',
  es : 'Saludos'
};

/**To Log Messages to console**/

var logMessages = {

  en : 'Logged In',
  es : 'Inicio session'
};



/*Setting the main function prototype to an empty object so we can define reusable methods-- prototype holds methods (to save memory space)*/
Greetr.prototype = {
	
// 'this' refers to the calling object at execution time
	fullName : function(){

		return this.firstname + ' ' + this.lastname;
	},

validate : function(){
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
   if (supportedLangs.indexOf(this.language) === -1) {

         throw "Invalid Language";
   }

},

// retrieve messages from object by referring to properties using [] syntax
greeting : function() {

	return greetings[this.language] + ' , ' + this.firstname + '!';
},

formalGreeting : function(){
	
	return formalGreetings[this.language] + ' , ' + this.fullName() + '!';
},


// chainable methods return their own containing object
greet : function(formal){
	
	var msg;

/*if undefined or null it will be coerced to false*/
if (formal) {
	msg = this.formalGreeting();
 }
 else {

	msg = this.greeting();
 }

 if (console)
	{
   		console.log(msg);
	}

/*this refers to calling object at execution time
and makes the method chainable*/
 return this;	
 },

 log : function(){
     
    /*IE doesn't hv a console var unless console is open*/ 
 	if(console){
 			console.log(logMessages[this.language]+ ':' + this.fullName());
 	}

 	return this;
 },

 // set the language
            this.language = lang;
        
            // validate
            this.validate();
            
            // make chainable
            return this;
 },

// Function for using Jquery to change the h1 on the html index page
 setHeading : function(selector , formal){
  
   if (!$){

   	 throw "jQuery not loaded";
   }

  if (!selector){
  	throw "Missing jQuery selector";
  }

  
  var msg;

  if (formal)
  {
  	msg = this.formalGreeting();
  }

  else{
  	msg = this.greeting();
  }

  
  $(selector).text(msg);

  return this;

 }

};




/*function constructor to with definition to create new objects --- the actual object is created here, allowing us to 'new' an object without calling 'new'  */
Greetr.init = function(firstname,lastname,language){

var that = this; /*For Safety */

that.firstname = firstname || '';
that.lastname = lastname || '';
that.language = language || 'en';

that.validate();

}


/*All the refereces of the new objects prototype are pointing to the main (Greetr) function prototype 
So that we can reuse the methods to be defined or created */

 // trick borrowed from jQuery so we don't have to use the 'new' keyword
Greetr.init.prototype = Greetr.prototype;


/* attach our Greetr to the global object or To make alias available to the global scope/object  */
global.Greetr = global.G$ = Greetr;


}(window, jQuery));