/*
holds all the strings used on website
*/
let strings = null;

/*
fetches the strings from the server
callback: gets called after string retrieval. See index.js.
*/
const fetchStrings = function (callback) {
	fetch(`/api/strings`).then(function(response){
		if(response.ok) {
			response.json().then(data => {
				strings = (data);
				callback();
			});
		}
	});
}

/*
gets a string by its name
*/
const getString = function(key) {
	if(strings != null && strings[key]) {
		return strings[key];
	}
	else {
		if(strings === null) {
			console.log("strings are null.")
		}
		else {
			console.log("request for " + key + " did not return a string.");
		}
		return "";
	}	
}

/*
updates strings on the server
*/
const updateStrings = function(newStrings) {
	console.log(newStrings);
	fetch('/api/updateStrings', {
    	method: 'POST',
    	headers: { 'Content-Type': 'application/json' },
      	body:  JSON.stringify(newStrings),
	});

	strings = newStrings;
}

/*
posts data to server
*/
function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}

export {getString, fetchStrings, updateStrings, postData};