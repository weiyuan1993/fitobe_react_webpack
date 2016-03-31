import React from 'react';
import ReactDOM from 'react-dom';

export default class Article_Img extends React.Component{
	render(){
		var background_image = {
			backgroundImage:'url('+this.props.article_data.coverPhoto+')'
		};
		return(
			<div className="jumbotron" style={background_image}>
				<div className="article header" >
					<h1>{this.props.article_data.title}</h1>
				</div>
			</div>
		);
	}
}