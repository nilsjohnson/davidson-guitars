/*
For blogger API
*/
const key = "AIzaSyDyOzcQFTCjSmlT-nd5rbLXLca3glNkZhg"
const userId = "3213900";

/*
holds all the updatable strings used on website
*/
let strings = null;

/*
fetches the strings from the server.
callback: gets called after string retrieval. See index.js
*/
function fetchStrings(callback) {
	fetch(`/api/strings`).then(function(response){
		if(response.ok) {
			response.json().then(data => {
				//console.log("Here is the data: ");
				//console.log(data);
				//strings = JSON.parse(data);
				strings = data;	
				callback();
			});
		}
	});
}

/*
gets a string by its name
*/
function getString(key) {
	if(strings != null && strings[key]) {
		return strings[key];
	}
	else {
		return "";
	}	
}

/*
updates strings on the server
*/
function updateStrings(newStrings) {
	console.log(newStrings);
	fetch('/api/updateStrings', {
    	method: 'POST',
    	headers: { 'Content-Type': 'application/json' },
      	body:  JSON.stringify(newStrings),
	});

	strings = newStrings;
}

/*
post generic data to server
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

/*
upload a file
*/
function uploadFile(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        body: data
    });
}

/*
gets carousel images
*/
function getCarouselImages(){
	return fetch('/api/carousel');
}

/*
gets the most recent blog posts
*/
function getLatest(maxResults) {
	let url = 'https://www.googleapis.com/blogger/v3/blogs/' + userId 
	 + '/posts?key=' + key 
	 + '&fetchBodies=false'
	 + '&fetchImages=true';
	
	if(maxResults > 0) {
		url += '&maxResults=' + maxResults;
	}
	
	return fetch(url);
}

/*
gets a post by its id
*/
function getPostById(postId) {
	return fetch('https://www.googleapis.com/blogger/v3/blogs/' + userId + '/posts/' + postId + '?key=' +key);
}

/*
deletes an image
*/
function deleteData(url = '', data = {}) {
 return fetch(url, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
}



export { getString, 
		 fetchStrings,
		 updateStrings,
		 postData,
		 getCarouselImages,
		 getLatest,
		 getPostById,
		 uploadFile,
		 deleteData };