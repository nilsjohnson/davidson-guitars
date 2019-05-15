let Strings = null;

const fetchStrings = function (callback) {
	fetch(`/api/strings`).then(function(response){
		if(response.ok) {
			response.json().then(data => {
				//console.log(data);
				Strings = JSON.parse(data);
				callback();
			});
		}
	});
}

const getString = function(key) {

	if(Strings != null) {
		
		return Strings[key];
	}
	else {
		console.log("Strings were null");
		return "";
	}	
}

const updateStrings = function(Strings_obj) {
	console.log(Strings_obj);
	fetch('/api/updateStrings', {
    	method: 'POST',
    	headers: { 'Content-Type': 'application/json' },
      	body:  JSON.stringify(Strings_obj),
	});

	Strings = Strings_obj;
}

function postData(url = '', data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
}




export {getString, fetchStrings, updateStrings, Strings, postData};