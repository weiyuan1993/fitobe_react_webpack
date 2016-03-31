import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Article_View from './article_view';
import Article_List from './article_list';
import Fbfans from './fbfans';
import Footer from './footer';
//整體架構
var FullView = React.createClass({
	getInitialState:function(){
		return{
			init_info : {},
			article_data: {}
		}
	},
	componentWillMount:function(){
		var url=window.location.href;
		//var url="http://www.fitobe.com/blog/zh/article?id=390a7fe6-a42f-4fa8-8a7f-e6a42f6fa8e8";
		console.log(url);
		if(url.split("?")==-1){
			var split_lang = url.split("/");
			var article_lang = split_lang[4];
			console.log(article_lang);
		
			var split_id = url.split("?");
			var id = split_id[1].split("=");
			var article_id = id[1];
			console.log(article_id);

			var initial_article =
			{
				'article_url' : url,
		    	'article_lang' : article_lang,
		    	'article_id' : article_id
		    };
	    	this.setState({init_info:initial_article}); //設定當前文章狀態

		}else{//localhost測試用
			var initial_article =
			{
				'article_url' : 'http://www.fitobe.com/blog/zh/article?id=390a7fe6-a42f-4fa8-8a7f-e6a42f6fa8e8',
		    	'article_lang' : 'zh',
		    	'article_id' : '390a7fe6-a42f-4fa8-8a7f-e6a42f6fa8e8'
		    };
	    	this.setState({init_info:initial_article});
		}
    },
    loadArticleData:function(){ //載入初始文章
		$.ajax({
			type:"GET",
			headers:{'Application_key':'13524932','lang':this.state.init_info.article_lang},
			url:"https://dev.fitobe.com/fitobe/api/article/share?article_id="+this.state.init_info.article_id,
			success:function(jdata){
				console.log("Article api connect successfully",jdata);
				document.title =jdata.article.title;
				this.setState({article_data: jdata.article});
			}.bind(this),
			error:function(){
				alert("error!");
			}.bind(this)
		});	
	},
	componentDidMount:function(){
		this.loadArticleData();	
		window.addEventListener('popstate', function(e) {
  			window.location.reload();
		});
	},
    changeArticle:function(jdata){
    	window.document.body.scrollTop = 0;
    	this.setState({article_data:jdata});
    	//window.location.href = 'http://104.196.56.186/blog/zh/article?id='+jdata.articleID;
    	window.history.pushState(null,document.title=jdata.title,"?id="+jdata.articleID);
    },
	render:function(){
		return(
			<div className="container">
				<Nav/>
				<div className="view">
					<div className="col-md-8 col-xs-12" >
						<Article_View article_data={this.state.article_data}/>
					</div>
					<div className="col-md-4 col-xs-12">
						<div className="sidebar">
							<Fbfans />
							<Article_List init_info={this.state.init_info} changeArticle={this.changeArticle}/>
						</div>
					</div>
					<div className="col-md-12 footer col-xs-12">
						<Footer/>
					</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<FullView />,
	document.getElementById('content')
);

