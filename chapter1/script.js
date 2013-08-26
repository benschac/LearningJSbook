/* create some date in the form of a JSON object */

var contacts = {
	"addressBook" : [
	{
		"name" : "Benjamin Schachter",
		"email": "benschac@gmail.com",
	},
	{
		"name" : "Samuel Schachter",
		"email": "samschac@gmail.com",
	},
	{
		"name" : "Jason Schachter",
		"email": "Jasonsc@gmail.com",
	},
	{
		 "name": "Russell Schachter",
	    "email": "Russell@gmail.com",
	},
	{
		 "name": "Steve Jobs",
	    "email": "Steve@hotmail.com",
	},
	{
		 "name": "Helen Cohen",
		"email": "Helen@gmail.com",
	}
  ]
};


// wrap everything in an anonymous function to contain the variables 

(function () {
	// cache some inital variables

	var object = contacts.addressBook, //save the JSON object
	contactsCount = object.length, //how many items are in the JSON object
	target =document.getElementsByTagName("body")[0], //Where the data is getting output
	i; //declare i for later use


	if(contactsCount > 0) {
		// loop through each JSON object item until you hit #5, then stop 

		for(i=0; i < contactsCount; i++) {
			// inside the loop i is the array index

			var item = object[i], 
				name = item.name,
			   email = item.email;

			target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a></p>'
		} //end for loop
	} // end count check
})(); //end anonymous function