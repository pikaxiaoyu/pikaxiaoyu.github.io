$(document).ready(function() {
	$.ajax({
			url: '../php/times.php',
			type: 'GET',
			dataType: 'json',
		})
		.done(function(res) {
			var $data = '';
			var $res = res.result.GetSpecifiedRankRsp.RankContentList.RankContent;
			for(var i in $res){
			$data += 
					'<div class="todaynews">'+
						'<div class="news">'+
							'<div class="left">'+
								'<p>'+
									'<span><img src="'+$res[i].coverUrl+'" alt="" /></span>'+
									'<span> '+$res[i].authorName+'</span>'+
								'</p>'+
								'<p>'+
									$res[i].contentName+
								'</p>'+
								'<p>'+
									'<span>'+
									$res[i].payType+'</span>'+
									' <span>'+
									$res[i].searchCount+'评论 </span>'+
									' <span>'+
									$res[i].favoriteCount+'喜欢</span>'+
								'</p>'+
							'</div>'+
							'<div class="right">'+
								'<img src="'+$res[i].coverUrl+'" />'+
							'</div>'+
						'</div>'+
					'</div>';
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