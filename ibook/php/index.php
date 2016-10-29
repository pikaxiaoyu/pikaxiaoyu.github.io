<?php
//设置服务器的请求头 html5 cors跨域
	header("Access-Control-Allow-Origin:http://apis.juhe.cn/goodbook/query?catalog_id=245&pn=0&rn=10&dtype=&key=f90ba9697b88257d31e0e01a5f01817e");
//设置请求方式
	header("Access-Control-Allow-Method:GET");
//从三方服务器拿数据
	$url = "http://apis.juhe.cn/goodbook/query?catalog_id=245&pn=0&rn=30&dtype=&key=f90ba9697b88257d31e0e01a5f01817e";
//返回浏览器
	$html = file_get_contents($url);
	echo $html;
?>