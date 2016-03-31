import React from 'react';
import ReactDOM from 'react-dom';
import Article_Img from './article_img';
import Article_Author from './article_author';
import Article_Content from './article_content';
import Article_List from './article_list';
//整體文章區塊
var Article_View = React.createClass({
	render:function(){
		return(
			<div className="article-view">
				<Article_Img article_data={this.props.article_data}/>
				<div className="article-view-content">
					<Article_Author article_data={this.props.article_data}/>
					<Article_Content article_data={this.props.article_data}/>
				</div>
			</div>
		);
	}
});

module.exports = Article_View;