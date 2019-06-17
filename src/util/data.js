/*
For blogger API
*/
const key = 
const userId = "6335479409620965157";

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
gets a string by its name. Always returns a string to prevent
something from breaking.
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
    });
   // .then(response => response.json());
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

/*
moves an image right or left
*/
function moveCarouselImgRight(img) {
	return moveCarouselImg("RIGHT", img);
}

function moveCarouselImgLeft(img) {
	return moveCarouselImg("LEFT", img);
}

function moveCarouselImg(direction, img) {
	return fetch('/api/carouselImgs/move', {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ direction: direction, image: img})
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
		 deleteData,
		 moveCarouselImgRight,
		 moveCarouselImgLeft };