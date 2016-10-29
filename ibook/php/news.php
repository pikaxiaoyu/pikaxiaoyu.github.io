<?php
//设置服务器的请求头 html5 cors跨域
	header("Access-Control-Allow-Origin:http://v.juhe.cn/toutiao/index?type=top&key=036e9609327006d7fb49b9834f9d05e5");
//设置请求方式
	header("Access-Control-Allow-Method:GET");
//从三方服务器拿数据
	$url = "http://v.juhe.cn/toutiao/index?type=top&key=036e9609327006d7fb49b9834f9d05e5";
//返回浏览器
	$html = file_get_contents($url);
	echo $html;
?>
