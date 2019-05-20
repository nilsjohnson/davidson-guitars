const key = "AIzaSyDyOzcQFTCjSmlT-nd5rbLXLca3glNkZhg";
const userId = "2300164054879450586";



function getLatest(callback) {
	return fetch('https://www.googleapis.com/blogger/v3/blogs/' + userId + '/posts?key=' + key);
}

function getPostById(postId) {
	console.log("attempting to fetch: " + postId);
	return fetch('https://www.googleapis.com/blogger/v3/blogs/' + userId + '/posts/' + postId + '?key=' +key);
}


export { getLatest, getPostById};