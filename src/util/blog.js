const key = "AIzaSyDyOzcQFTCjSmlT-nd5rbLXLca3glNkZhg";
const userId = "2300164054879450586";



function getLatest(maxResults) {
	let url = 'https://www.googleapis.com/blogger/v3/blogs/' + userId + '/posts?key=' + key;
	
	if(maxResults > 0) {
		url += '&maxResults=' + maxResults;
	}
	
	return fetch(url);
}

function getPostById(postId) {
	return fetch('https://www.googleapis.com/blogger/v3/blogs/' + userId + '/posts/' + postId + '?key=' +key);
}


export { getLatest, getPostById};