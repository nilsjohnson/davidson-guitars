import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app/Home.jsx';
import Admin from './app/Admin.jsx';
import Blog from './app/Blog.jsx';
import { BrowserRouter, Route } from 'react-router-dom'
import {getString, fetchStrings} from './util/strings.js';

let render = function() {
	ReactDOM.render((
	<BrowserRouter>
		<div>
			<Route path="/" component={Home} exact/>
			<Route path="/admin" component={Admin}/>
			<Route path="/blog" component={Blog}/>
		</div>
	</BrowserRouter>
	), document.getElementById('root'));
}

fetchStrings(render);


