$(document).ready(function(){
	$('.nav-block').find('a').click(function(){

		$('.nav-block').find('a').removeClass('active');
		$(this).addClass('active');

		var index = $(this).index();

		$('body').addClass('static');

		setTimeout( function() { $('#content-block').addClass('active'); } , 900)

		$('#content-block').find('.info-block-wrapper').addClass('active');

		$('#content-block').find('.info-block').removeClass('active');
		$('#content-block').find('.info-block').eq(index).addClass('active');
		
	});

	$('#head-block').find('p').click(function(){
		$('body').removeClass('static');
		$('.nav-block').find('a').removeClass('active');
		$('#content-block').removeClass('active');		
		$('#content-block').find('.info-block-wrapper').removeClass('active');
	});

	$('#head-block').find('.color').click(function(){

		console.log('asd')

		if( $('body').hasClass('grey') )
		{
			$('body').removeClass('grey');
			$('body').addClass('light');
			setCookie('color', 'light', '/', 'nikolaylevashov.16mb.com' );
		}
		else
		{
			$('body').removeClass('light');
			$('body').addClass('grey');
			setCookie('color', 'grey', '/', 'nikolaylevashov.16mb.com' );
		}
	});

	function setCookie(name, value, options) {
  	options = options || {};

  	var expires = options.expires;

  	if (typeof expires == "number" && expires)
  	{
    	var d = new Date();
    	d.setTime(d.getTime() + expires * 1000);
    	expires = options.expires = d;
  	}
  	if (expires && expires.toUTCString)
  	{
    	options.expires = expires.toUTCString();
  	}

  	value = encodeURIComponent(value);

  	var updatedCookie = name + "=" + value;

  	for (var propName in options)
  	{
    	updatedCookie += "; " + propName;
    	var propValue = options[propName];
    	if (propValue !== true)
    	{
      		updatedCookie += "=" + propValue;
    	}
  	}

  	document.cookie = updatedCookie;
}

});

function getCookie(name)
{
	var matches = document.cookie.match(new RegExp(
   	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : 'grey';
}