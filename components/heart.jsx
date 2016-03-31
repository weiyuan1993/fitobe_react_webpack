import React from 'react';
import ReactDOM from 'react-dom';

export default class Author extends React.Component{
	render(){
		return(
			<div className="heart">
				<img src="./img/heart.png"/>
				<p>9999</p>
				<span className="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span>
			</div>
		);
	}
}