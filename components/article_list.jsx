import React from 'react';
import ReactDOM from 'react-dom';
//熱門文章列表
var Article_List =React.createClass({
	getInitialState: function() {
    	return {data: []};
  	},
	componentDidMount:function(){
		$.ajax({
			type:"GET",
			headers:{'Application_key':'13524932','lang':this.props.init_info.article_lang},
			url:"https://dev.fitobe.com/fitobe/api/article/share/list",
			success:function(data){
				console.log("Article list api connect successfully",data);
				this.setState({data: data.articleList.articles});
			}.bind(this),
			error:function(){
				alert("receive article list error!");
			}.bind(this)
		});	
	},
	handleClick: function(data) {
    	this.props.changeArticle(data);
  	},

	render:function(){

		var hot_title = this.state.data.map(function(data){
			return(
				<div className="hot-list-div" key={data.title}>
					<li className="hot-list" key={data.title}>
						<h2 key={data.title} onClick={this.handleClick.bind(null,data)}> {data.title} </h2>
					</li>
				</div>
			);
		},this);

		return(
			<div className="hot-article">
				<div className="hot"><p>熱門文章推薦</p></div>
				<ul className = "article-list">
					{hot_title}
				</ul>
			</div>
		);
	}

});
module.exports = Article_List;


/*var Article_hot_list = React.createClass({

	render:function(){
		var hot_title = this.props.data.map(function(data){
			//var hot_article_id = "http://www.fitobe.com/blog/zh/article?id="+data.articleID;
			var uuu="http://localhost:8080";
			//this.props.info.article_id=data.articleID;
			return(
				<div className="hot-list-div" key={data.title}>
					<li className="hot-list" key={data.title}>
						<a href={uuu} key={data.title} > {data.title} </a>
					</li>
				</div>
			);
		});
		return (
	      <div className="title">
	        {hot_title}
	      </div>
	    );
	}
});*/