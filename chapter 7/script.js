// standard AJAX xhr function
function getHTTPObject() {
	var xhr = new XMLHttpRequest();
	return xhr;
}

// define the AJAX call

function ajaxCall(dataUrl, outputElement, callback) {
	// use the fuction to get the correct Ajax object based on support
	var request = getHTTPObject();

	outputElement.innerHTML = "Finding Email";
	request.onreadystatechange = function() {
		// checking to see if the AJAX call went through

		if ( request.readyState === 4 && request.status === 200 ) {
			// save the AJAX response

			var contacts = JSON.parse(request.responseText);

			// making sure the callback is indeed a fuction before executing

			if(typeof callback === "function") {
				callback(contacts);
			}
		}
	};

	request.open("GET", dataUrl, true);
	request.send(null);
}



(function() {

// defining the DOM elements and common variables needed

var searchForm = document.getElementById("search-form"),
	searchField = document.getElementById("q"),
	getAllButton = document.getElementById("get-all"),
	target = document.getElementById("output");

	var addr = {

		search : function(event) {
			// save the input value, contacts length and i to variables
			var output = document.getElementById("output");

			// start the AJAX call
			ajaxCall('data/contacts.json', output, function(data) {
				// dave the input value, contacts length and i to variables

				var searchValue = searchField.value,
					addrBook = data.addressBook,
					count = addrBook.length,
					i;

					// stop the default behavior

					event.preventDefault();

					// clear the target area

					target.innerHTML = "";

					// check the count

				if(count > 0 && searchValue !== "") {

					// loop through contacts
				for(i = 0; i < count; i++) {

					// look through the name value to see if it contains the searchterm

					var obj = addrBook[i],
						isItFound = obj.name.indexOf(searchValue);

						// anything other than -1 means we found a match

						if(isItFound !== -1) {

							target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a></p>';
						}
				}
			}
		}); //end ajax call


	},
		getAllContacts : function () {
			// set the output element 
			var output = document.getElementById("output");

			// start the Ajax call
			ajaxCall('data/contacts.json', output, function(data) {

				var addrBook = data.addressBook,
				count = addrBook.length,
				i;
		

			// clear target area
			target.innerHTML = "";

			// check count
			if(count > 0) {

				// loop through
				for(i=0; i < count; i++) {
					var obj = addrBook[i];

					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a></p>';
				}
				}
			});
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
	}; //end addr object


	searchField.addEventListener("keyup", addr.search, false);
	searchField.addEventListener("focus", addr.setActiveSection, false);
	searchField.addEventListener("blur", addr.removeActiveSection, false);
	getAllButton.addEventListener("click", addr.getAllContacts, false);
	searchForm.addEventListener("mouseover", addr.addHoverClass, false);
	searchForm.addEventListener("mouseout", addr.removeHoverClass, false);
	searchForm.addEventListener("submit", addr.search, false);
})(); //end anonymous function