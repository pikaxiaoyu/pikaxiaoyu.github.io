$(document).ready(function() {
	$.ajax({
			url: 'php/index.php',
			type: 'GET',
			dataType: 'json',
		})
		.done(function(res) {
			var $data='';
			for(var i in res.result.data){
			$data +=
			'<a href="html/detail.html?id='+i+'" target="_self">'+
				'<div class="part">'+
					'<p>'+
						'<span><img src="'+res.result.data[i].img+'" alt="" /></span>'+
						'<span> '+res.result.data[i].title+'</span>'+
						'<span> '+res.result.data[i].bytime+'</span>'+
					'</p>'+
					'<p>'+
						res.result.data[i].sub1+
					'</p>'+
					'<p>'+
						'<span>散文</span>'+
						'<span> '+res.result.data[i].reading+'</span>'+
						'<span> 5评论 </span>'+
						'<span>4喜欢</span>'+
					'</p>'+
				'</div>'+
			'</a>';
			}
			$('.all').html($data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
});