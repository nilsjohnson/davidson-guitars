import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app/Home.jsx';
import Blog from './app/Blog.jsx';
import Admin from './app/Admin.jsx';
import Services from './app/Services.jsx';
import { BrowserRouter, Route } from 'react-router-dom'
import {getString, fetchStrings} from './strings.js';

let render = function() {
	ReactDOM.render((
	<BrowserRouter>
		<div>
			<Route path="/" component={Home} exact/>
			<Route path="/blog" component={Blog}/>
			<Route path="/services" component={Services}/>
			<Route path="/admin" component={Admin}/>
		</div>
	</BrowserRouter>
	), document.getElementById('root'));
}

fetchStrings(render);


