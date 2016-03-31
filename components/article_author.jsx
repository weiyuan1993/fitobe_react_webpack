import React from 'react';
import ReactDOM from 'react-dom';
import Heart from './heart';
//作者區塊
export default class Article_Author extends React.Component{
	render(){
		return(
			<div className="author">
				<p className="author-name">{this.props.article_data.author}</p>
				<Heart/>
				<br/>
				<br/>
			</div>
		);
	}
}