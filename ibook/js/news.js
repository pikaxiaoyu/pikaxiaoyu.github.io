$(document).ready(function() {
	$.ajax({
			url: '../php/news.php',
			type: 'GET',
			dataType: 'json',
		})
		.done(function(res) {
			var $data='';
			for(var i in res.result.data){
			$data += 
				'<a href="'+res.result.data[i].url+'" target="_self">'+
					'<div class="todaynews">'+
						'<div class="news">'+
							'<div class="left">'+
								'<p>'+
									'<span><img src="'+res.result.data[i].thumbnail_pic_s+'" alt="" /></span>'+
									'<span> '+res.result.data[i].author_name+'</span>'+
									'<span> '+res.result.data[i].date+'</span>'+
								'</p>'+
								'<p>'+
									res.result.data[i].title+
								'</p>'+
								'<p>'+
									'<span>109次阅读 </span>'+
									'<span>5评论 </span>'+
									'<span>4喜欢</span>'+
								'</p>'+
							'</div>'+
							'<div class="right">'+
								'<img src="'+res.result.data[i].thumbnail_pic_s+'" />'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</a>';
			}
			$('section').html($data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
});