$(document).ready(function(){
	$('#content-block').find('a').click(function(){

		var index = $(this).index();

		$('body').addClass('static');

		setTimeout(function(){
			$('#content-block').removeClass('mainpage');
		}, 1000);

		console.log ( index )

		$('#content-block').find('.info-block-wrapper').addClass('active');

		$('#content-block').find('.info-block').removeClass('active');
		$('#content-block').find('.info-block').eq(index).addClass('active');
		
	});

	$('#head-block').find('p').click(function(){
		console.log ('asdasd');
		$('body').removeClass('static');
		$('#content-block').addClass('mainpage');		
		$('#content-block').find('.info-block-wrapper').removeClass('active');
	});

});