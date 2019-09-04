This repository is the code for https://www.owendavidsonguitars.com
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for prodction<br>



### `npm run watch`

watches the src directory and rebuilds upon changes.


## Deployment

In the scripts directory, you will find basic scripts<br>
	./connect.sh connects to the the aws EC2 instance<br>
	./sendAll.sh will send the build directory, the server and the admin password to the server<br>

On the server, start the app by running "node ./server.js production".<br>

Note: In production mode, all requests (i.e. "https://owendavidsonguitars.com", "http://owendavidsonguitars.com") are routed to "https://www.owendavidsonguitars.com"<br>

The SSL certificate is set to auto renew itself using a crontab.<br>


