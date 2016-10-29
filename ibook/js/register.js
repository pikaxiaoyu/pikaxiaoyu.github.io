//验证昵称
$('#name').blur(function(){
	$nameVal = $('#name').val();
	if($nameVal){
		$('.hint').css('display','none');
	}else{
		$('.hint').css('display','block');
		$('#hintP').html('请输入昵称！');
	}
});
//验证用户名
$('#user').blur(function(){
	$reg = /(^\w{4,16}$)|(^\w+@[0-9a-zA-Z]{2,}\.(com|com.cn|cn|net|org)$)/;
	$userVal = $('#user').val();
	if($userVal){
		if($reg.test( $userVal )){
			$('.hint').css('display','none');
		}else{
			$('.hint').css('display','block');
			$('#hintP').html('请输入正确的用户名！');
		}
	}else{
		$('.hint').css('display','block');
		$('#hintP').html('用户名不能为空！');
	}
});
//验证密码
$('#pwd').blur(function(){
	$pwdVal = $('#pwd').val();
	$reg = /^\w{6,20}$/;
	if($pwdVal){
		if( $reg.test( $pwdVal ) ){
			$('.hint').css('display','none');
		}else{
			$('.hint').css('display','block');
			$('#hintP').html('请输入正确的密码！');
		}
	}else{
		$('.hint').css('display','block');
		$('#hintP').html('密码不能为空！');
	}
});
//确认密码
$('#pwd1').blur(function(){
	$pwdVal = $('#pwd').val();
	$pwdVal1 = $('#pwd1').val();
	if($pwdVal1){
		if( $pwdVal1 == $pwdVal ){
			$('.hint').css('display','block');
			$('#hintP').html('注册成功！');
		}else{
			$('.hint').css('display','block');
			$('#hintP').html('两次密码不一致！');
		}
	}else{
		$('.hint').css('display','block');
		$('#hintP').html('确认密码不能为空！');
	}
});
$('#btn').click(function(){
	$nameVal = $('#name').val();
	$userVal = $('#user').val();
	$pwdVal = $('#pwd').val();
	$pwdVal1 = $('#pwd1').val();
	if($nameVal&&$userVal&&$pwdVal&&$pwdVal1){
		if($('#hintP').html()=='注册成功！'){
			localStorage.user = $userVal;
			localStorage.pwd = $pwdVal;
			setTimeout(function(){
				open('login.html','_self');
			},1000);
		}
	}
})
