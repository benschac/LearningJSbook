(function() {

	// create a address book 

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
		"email": "jasonsc@gmail.com",
	},
	{
		"name" : "Helen Cohen",
		"email": "helen@gmail.com",
	},
	{
		"name" : "Steven Jobs",
		"email": "steve@hotmail.com"
	},
	{
		"name" : "Bill Gates",
		"email": "Bill@me.com",
	},
	{
		"name" : "Michael Schachter",
	   "email" : "mzs@gmail.com",
	}
	]
}

// defining the DOM elements and common variables needed

var searchForm = document.getElementById("search-form"),
	searchField = document.getElementById("q"),
	getAllButton = document.getElementById("get-all"),
	count = contacts.addressBook.length,
	target = document.getElementById("output");

	var addr = {

		search : function(event) {
			// save the input value, contacts length and i to variables
			var searchValue = searchField.value,
			i;

			// stop the default behavior
			event.preventDefault();

			//clear the target area just incase

			target.innerHTML = "";

			// check the count

			if(count > 0 && searchValue !== "") {

				// loop through contacts
				for(i = 0; i < count; i++) {

					// look through the name value to see if it contains the searchterm

					var obj = contacts.addressBook[i],
						isItFound = obj.name.indexOf(searchValue);

						// anything other than -1 means we found a match

						if(isItFound !== -1) {

							target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a></p>'; 
						}
				}
			}
		},


		getAllContacts : function () {
			var i;

			// clear target area
			target.innerHTML = "";

			// check count
			if(count > 0) {

				// loop through
				for(i=0; i < count; i++) {
					var obj = contacts.addressBook[i];

					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a></p>'; 
				}
			}
		}, 

		setActiveSection : function() {
			// add a class of "active" to the wrapping div

			this.parentNode.setAttribute("class", "active");
		},

		removeActiveSection : function() {
			// the class to the wrapping div
			searchForm.setAttribute("class", "hovering");
		},

		addHoverClass : function() {
			// add the class to the wrapping div

			searchForm.setAttribute("class", "hovering");
		},
		removeHoverClass : function() {
			// remove the hover class from the wrapping div
			searchForm.removeAttribute("class");
		}
	} //end addr object


	searchField.addEventListener("keyup", addr.search, false);
	searchField.addEventListener("focus", addr.setActiveSection, false);
	searchField.addEventListener("blur", addr.removeActiveSection, false);
	getAllButton.addEventListener("click", addr.getAllContacts, false);
	searchForm.addEventListener("mouseover", addr.addHoverClass, false);
	searchForm.addEventListener("mouseout", addr.removeHoverClass, false);
	searchForm.addEventListener("submit", addr.search, false);
})(); //end anonymous function