import React from 'react';
import ReactDOM from 'react-dom';

export default class Article_Content extends React.Component{
	render(){
		return(
			<div className="article content" dangerouslySetInnerHTML={{__html: this.props.article_data.content}}></div>
		);
	}

}