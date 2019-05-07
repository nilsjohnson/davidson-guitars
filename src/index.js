import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app/Home';
import Blog from './app/Blog.jsx';
import { BrowserRouter, Route } from 'react-router-dom'


ReactDOM.render((
	<BrowserRouter>
		<div>
			<Route path="/" component={Home} exact/>
			<Route path="/blog" component={Blog}/>
		</div>
	</BrowserRouter>
	), document.getElementById('root'));



