import React from 'react';
import ReactDOM from 'react-dom';
//fb fans
var Fbfans=React.createClass({
	componentWillMount:function(){
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.5";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	},
	render:function(){
		return(
			<div className="fb-page-plugin">
				<div className="fb-page" 
	  			data-href="https://www.facebook.com/FiToBe.Health"
	  			data-width="360" 
	  			data-hide-cover="false"
				data-show-facepile="true" 
				data-show-posts="false"
				data-adapt-container-width="true"></div>
			</div>
		);
	}
});

module.exports = Fbfans;