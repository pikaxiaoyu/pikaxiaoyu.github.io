$('#btn').click(function(){
	$userVal = $('#user').val();
	$pwdVal = $('#pwd').val();
	$user = localStorage.user;
	$pwd = localStorage.pwd;
	if(($userVal==$user)&&($pwdVal==$pwd)){
		$('.hint').css('display','block');
		$('#hintP').css('color','#47D6C4');
		$('#hintP').html('登录成功！');
		setTimeout(function(){
			open('../index.html','_self');
		},1000)
		
	}else{
		$('.hint').css('display','block');
		$('#hintP').html('用户名或密码错误！');
	}
})
