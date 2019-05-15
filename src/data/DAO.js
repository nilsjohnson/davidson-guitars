export default class DAO {
	constructor() {

	}

	getHours(callback) {
		fetch(`/api/getHours`).then(function(response){
			if(response.ok)
			{
				response.json().then(data => {
					callback(data);
				});
			}
		});
	}

	getMainBlerb(callback) {
		fetch(`/api/mainBlurb`).then(function(response){
			if(response.ok)
			{
				response.json().then(data => {
					callback(data);
				});
			}
		});
	}

	getBlogPosts(callback) {
		fetch(`/api/getBlogPosts`).then(function(response){
			if(response.ok)
			{
				response.json().then(data => {
					callback(data);
				});
			}
		});
	}
}

