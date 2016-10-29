<?php
//设置服务器的请求头 html5 cors跨域
	header("Access-Control-Allow-Origin:http://japi.juhe.cn/rank/getRankInfo?contentType=4&rankType=1&rankTime=1&start=&count=30?Right=&key=91921a702ca2e8bc8813297b15ad9097");
//设置请求方式
	header("Access-Control-Allow-Method:GET");
//从三方服务器拿数据
	$url = "http://japi.juhe.cn/rank/getRankInfo?contentType=4&rankType=1&rankTime=1&start=&count=30?Right=&key=91921a702ca2e8bc8813297b15ad9097";
//返回浏览器
	$html = file_get_contents($url);
	echo $html;
?>