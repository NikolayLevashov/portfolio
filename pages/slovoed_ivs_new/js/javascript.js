$(document).ready(function(){

	$('#head-nav').find('.main-button').find('.blue-bg').click(function(){
		
		$('#head-nav').find('.main-button').find('.blue-bg').removeClass('active');
		$('#head-nav').find('.main-button').find('.nav-popup').removeClass('active')
		
		$(this).addClass('active');
		$(this).parent().find('.nav-popup').addClass('active');
	});

	$("#head-nav").on('mouseleave', function(){
		$('#head-nav').find('.active').removeClass('active');
	});

	$('.mob-nav-button').click(function(){
		if ( $(this).hasClass('animate') )
		{
			$(this).removeClass('animate');
			$('.content').find('.mob-nav-menu-wrapper').removeClass('active');
		}
		else
		{
			$(this).addClass('animate');
			$('.content').find('.mob-nav-menu-wrapper').addClass('active');
		}
		
	});

	$('.form-block').find('li').click(function(){
		var i = $(this).index();
		$('.form-block').find('li').removeClass('active');
		$(this).addClass('active');
		$('.form-block').find('.forms-block.active').removeClass('active');
		if ( i == 0 )
		{
			$('.form-block').find('.login-form-block').addClass('active');
			$('.join-form-block').find('input').not('.join-form-block .button').val("");
			$('#check1').attr('checked', false);
		}
		if ( i == 1 )
		{
			$('.form-block').find('.join-form-block').addClass('active');
			$('.login-form-block').find('input').not('.login-form-block .button').val("");
		}

	});

	$("#products").find(".products-menu").find("li").click(function(){

        var index = $(this).index();

        $("#products").find(".products-menu").find("li").removeClass("active");
        $(this).addClass("active");

        $('#products').find(".products-menu").find(".block").removeClass("active");
        $('#products').find(".products-menu").find(".block").eq(index).addClass("active");

    });

	$(".pages").find(".reset-button").click(buttonsInForms);
    $(".pages").find(".update-button").click(buttonsInForms);

    $('#mainpage').find('.form-block').find('input').on('focus', function(){
		$(this).removeClass('error-input');
	});

});

function buttonsInForms (){

    $(".pages").find(".password-form").css("display","none");
    $(".pages").find(".emailed-form").css("display","block");

    function timer(){

        var obj=document.getElementById('time');
        obj.innerHTML--;
        
        if( obj.innerHTML == 0 )
        {

        	function parse_url( url ) {

            var parts = url.split( "#" ),
            out = {};

            out.url = url;
            out.hash = ( parts.length > 1 ? ( ( url = parts.shift() ) || 1 ) && parts.join( "#" ) : "" );
            url = ( parts = url.split( "?" ) ).shift();
            out.search = parts.join( "?" );
            out.scheme = ( parts = url.split( "://" ) ) && parts.length > 1 ? parts.shift() : "";
            out.host = ( ( parts = parts.join( "://" ).split( "/" ) ) && parts.length > 1 &&
                        parts[0].indexOf(".") > 0 || out.scheme ) && parts.shift() || "";
            out.script = parts.pop();
            // out.path = ( parts.length > 0 ? "/" : "" ) + parts.join( "/" );
            out.path = parts.shift();
            return out;
        	}
       		var out = parse_url( window.location.href );
       		var resetPwd = (window.location.href.match(/(pwd_reset)/g) ? true : false);
       		var changePwd = (window.location.href.match(/(pwd_change)/g) ? true : false);

       		if ( resetPwd == true )
       		{
       			var desiredPage = 'login.htm';
       			window.location.href = out.scheme + '://' + out.host + '/' + out.path + '/' + desiredPage;
       		}
       		if ( changePwd == true )
       		{
       			var desiredPage = 'activation/index.htm' ;
       			window.location.href = out.scheme + '://' + out.host + '/' + out.path + '/' + desiredPage ;
       		}
        	setTimeout(function(){},1000);
        }
        else
        {
        	setTimeout(timer,1000);}
        }
        setTimeout(timer,1000);
};

function checkLoginForm()
{

	var loginEmail = $('.login-form').find('.email').val();
	var loginPass = $('.login-form').find('.pass').val().length;

	if( loginEmail != '' && loginPass >= 6 )
	{
		$('.login-form-block').find('.button').removeAttr('disabled');
	}
	else
	{
		$('.login-form-block').find('.button').attr('disabled','disable');
	}
}

function checkJoinForm()
{
	var joinFirstname = $('.join-form').find('.firstname').val();
	var joinLastname = $('.join-form').find('.lastname').val();
	var joinEmail = $('.join-form').find('.email').val();
	var joinPass = $('.join-form').find('.pass').val().length;
	var joinConfpass = $('.join-form').find('.confpass').val().length;
	var joincheckbox = $('.join-form').find('#check1').prop('checked');

	if( joinFirstname != '' && joinLastname != '' && joinEmail != '' && joinPass >= 6 && joinConfpass >= 6 && joincheckbox == true )
	{
		$('.join-form-block').find('.button').removeAttr('disabled');
	}
	else
	{
		$('.join-form-block').find('.button').attr('disabled','disable');
	}
}

function checkPostjoinform()
{
	
	var regEmail = /^\w+@\w+\.\w{2,4}$/i;
	var regNaumPass = /\d/;
	var regUpperPass = /[A-Z]/
	
	var joinFirstname = $('.join-form').find('.firstname').val();
	var joinLastname = $('.join-form').find('.lastname').val();
	var joinEmail = $('.join-form').find('.email').val();
	var joinPass = $('.join-form').find('.pass').val();
	var joinConfpass = $('.join-form').find('.confpass').val();
	var joincheckbox = $('.join-form').find('#check1').prop('checked');
	
	if( !regEmail.test(joinEmail) )
	{
		$('.join-form').find('.email').css('border','1px solid red');
		return false;
	}
	else{
		$('.join-form').find('.email').css('border','1px solid green');
	}
	if( !regNaumPass.test( joinPass ) || !regUpperPass.test( joinPass ) )
	{
		$('.join-form').find('.pass').css('border','1px solid red');
		return false;
	}
	else{
		$('.join-form').find('.pass').css('border','1px solid green');
	}
	if( joinPass != joinConfpass )
	{
		$('.join-form').find('.confpass').css('border','1px solid red');
		return false;
	}
	else{
		$('.join-form').find('.confpass').css('border','1px solid green');
	}
}

function checkRecoveryForm()
{

	var recoveryNewPass = $('.recovery-form').find('.newpass').val().length;
	var recoveryConfPass = $('.recovery-form').find('.confpass').val().length;

	if( recoveryNewPass >= 6 && recoveryConfPass >= 6 )
	{
		$('.recovery-form').find('.button').removeAttr('disabled');
	}
	else
	{
		$('.recovery-form').find('.button').attr('disabled','disable');
	}
}

function checkPostRecoveryform()
{
	var regNaumPass = /\d/;
	var regUpperPass = /[A-Z]/
	
	var recoveryNewPass = $('.recovery-form').find('.newpass').val();
	var recoveryConfPass = $('.recovery-form').find('.confpass').val();
	
	if( !regNaumPass.test( recoveryNewPass ) || !regUpperPass.test( recoveryNewPass ) )
	{
		$('.recovery-form').find('.newpass').css('border','1px solid red');
		return false;
	}
	else{
		$('.recovery-form').find('.newpass').css('border','1px solid green');
	}
	if( recoveryNewPass != recoveryConfPass )
	{
		$('.recovery-form').find('.confpass').css('border','1px solid red');
		return false;
	}
	else{
		$('.recovery-form').find('.confpass').css('border','1px solid green');
	}
}