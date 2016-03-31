import React from 'react';
import ReactDOM from 'react-dom';
//導航列
export default class Nav extends React.Component{
	render(){
		return(
			<div className="nav navbar-primary">
				<a href="http://www.fitobe.com/zh-Hant/"><img src="./img/fitobe.png" /></a>
				<ul>
					<li><a href="http://www.fitobe.com/zh-Hant/">首頁</a></li>
					<li><a href="http://www.fitobe.com/zh-Hant/features.html">特色</a></li>
					<li><a href="http://www.fitobe.com/zh-Hant/about.html">關於我們</a></li>
					<li><a href="http://www.fitobe.com/zh-Hant/contact.html">聯絡我們</a></li>
					<ul>
						<li>
							<a href="https://www.facebook.com/FiToBe.Health/" ><img src="./img/facebook.svg"/></a>
						</li>
						<li>
							<a href="http://itunes.apple.com/app/fitobe-health-management/id1066643070?ls=1&mt=8">
								<img src="./img/appstore.svg"/></a>
						</li>
					</ul>
				
				</ul>
				<Dropdown/>
			</div>
		);
	}
}
class Dropdown extends React.Component{
	render(){
		return(
			<div className="dropdown">
				<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				    <img src="./img/dropdown.png"/>
				</button>
				<ul className="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">
					<li><a href="http://www.fitobe.com/zh-Hant/">首頁</a></li>
					<hr/>
					<li><a href="http://www.fitobe.com/zh-Hant/features.html">特色</a></li>
					<hr/>
					<li><a href="http://www.fitobe.com/zh-Hant/about.html">關於我們</a></li>
					<hr/>
					<li><a href="http://www.fitobe.com/zh-Hant/contact.html">聯絡我們</a></li>
					<hr/>
					<li>
						<a href="https://www.facebook.com/FiToBe.Health/"><img src="./img/facebook.svg" height="40"/></a>
					</li>
					<hr/>
					<li>
						<a href="http://itunes.apple.com/app/fitobe-health-management/id1066643070?ls=1&mt=8">
							<img src="./img/appstore.svg" height="40"/></a>
					</li>
					<hr/>
				</ul>
			</div>
		);
	}
}
