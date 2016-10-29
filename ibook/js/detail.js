function getpar(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

var $id = getpar('id');
console.log($id)

if($id){
	$.ajax({
			url: '../php/index.php',
			type: 'GET',
			dataType: 'json',
		})
	.done(function(res) {
		var $data='';
		$res = res.result.data[$id]
		$data +=
		'<div class="info">'+
			'<div class="article">'+
				'<div class="concern">关注</div>'+
				'<div class="writer">'+
					'<dl>'+
						'<dt><img src="'+$res.img+'"/></dt>'+
						'<dd>'+
							'<p>'+$res.sub1+'</p>'+
							'<p class="date">'+$res.bytime+'</p>'+
						'</dd>'+
					'</dl>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="mainArt">'+
			'<h2>'+$res.title+'</h2>'+
			'<p>'+
				'<span>'+$res.reading+'　</span>'+
				'<span>'+$res.catalog+'</span>'+
			'</p>'+
			'<div class="main">'+
				'<p>'+$res.sub2+'</p>'+
				'<img src="'+$res.img+'"/>'+
			'</div>'+
			'<div class="addComment">'+
				'<ul>'+
					'<li>'+
						'<a href="javascript:;" class="iconfont icon-iconfontpinglun"></a>'+
						'<a class="add" href="javascript:;"> 添加评论</a>'+
					'</li>'+
					'<li>'+
						'<a href="javascript:;" class="iconfont icon-pinglun"></a>'+
					'</li>'+
					'<li class="like">'+
						'<a href="javascript:;" class="iconfont icon-02"></a>'+
						'<span class="num">6</span>'+
					'</li>'+
					'<li>'+
						'<a href="javascript:;" class="iconfont icon-fenxiang"></a>'+
					'</li>'+
				'</ul>'+
			'</div>'+
		'</div>';
		$('section').html($data);
		//关注
		$onOff = true;
		$('.concern').click(function() {
			if($onOff){
				$(this).css('background', 'orange');
				$(this).text('已关注');
				$onOff = false;
			}else{
				$(this).css('background', '#47d6c4');
				$(this).text('关注');
				$onOff = true;
			}
		})
		//喜欢人数
		$('.like').click(function(){
			$num = $('.num',this).html();
			$num++;
			$('.num',this).html($num);
			
		})
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}
