$(document).ready(function(){

    $('#buttonRight').click(function(){

        var index = $('#iphone').find('.active').index();
        var length = $('#iphone').find('img').length -1;

        $('#iphone').find('img').not('.active').css('left','0px');
        $('#iphone').find('img').not('.active').css('top','1000px');

        $('#info').find('.infoDesc').not('.active').css('top','0px');
        $('#info').find('.infoDesc').not('.active').css('left','1000px');

        $('#descriptions').find('.desc').not('.active').css('top','0px');
        $('#descriptions').find('.desc').not('.active').css('left','1000px');

        if ( index == length )
        {
            $(this).parent().find('#iphone').find('img').eq(0).animate({
                top: '0px',
                opacity: 1
            }, 1000).addClass('active');

            $(this).parent().find('#iphone').find('img').last().animate({
                left: '-500px',
                opacity: 0
            }, 1000).removeClass('active');

            $(this).parent().find('#info').find('.infoDesc').eq(0).animate({
                left: '0px',
                opacity: 1
            }, 1000).addClass('active');

            $(this).parent().find('#info').find('.infoDesc').last().animate({
                top: '-500px',
                opacity: 0
            }, 1000).removeClass('active');

            $(this).parent().find('#descriptions').find('.desc').eq(0).animate({
                left: '0px',
                opacity: 1
            }, 1000).addClass('active');

            $(this).parent().find('#descriptions').find('.desc').last().animate({
                top: '500px',
                opacity: 0
            }, 1000).removeClass('active');

        }
        else if ( index < length )
        {
            $(this).parent().find('#iphone').find('img').eq(index).animate({
                left: '-500px',
                opacity: 0
            }, 800).removeClass('active');

            $(this).parent().find('#iphone').find('img').eq(index+1).animate({
                top: '0px',
                opacity: 1
            }, 800).addClass('active');

            $(this).parent().find('#info').find('.infoDesc').eq(index).animate({
                top: '-500px',
                opacity: 0
            }, 800).removeClass('active');

            $(this).parent().find('#info').find('.infoDesc').eq(index+1).animate({
                left: '0px',
                opacity: 1
            }, 800).addClass('active');

            $(this).parent().find('#descriptions').find('.desc').eq(index).animate({
                top: '500px',
                opacity: 0
            }, 800).removeClass('active');

            $(this).parent().find('#descriptions').find('.desc').eq(index+1).animate({
                left: '0px',
                opacity: 1
            }, 800).addClass('active');
        }

    });

    $('#buttonLeft').click(function(){

        var index = $('#iphone').find('.active').index();
        var length = $('#iphone').find('img').length -1;

        $('#iphone').find('img').not('.active').css('left','-1000px');
        $('#iphone').find('img').not('.active').css('top','0px');

        $('#info').find('.infoDesc').not('.active').css('top','-500px');
        $('#info').find('.infoDesc').not('.active').css('left','0px');
//
        $('#descriptions').find('.desc').not('.active').css('top','500px');
        $('#descriptions').find('.desc').not('.active').css('left','0px');

        if ( index == 0 )
        {
            $(this).parent().find('#iphone').find('img').eq(0).animate({
                top: '1000px',
                opacity: 0
            }, 1000).removeClass('active');

            $(this).parent().find('#iphone').find('img').last().animate({
                left: '0px',
                opacity: 1
            }, 1000).addClass('active');

            $(this).parent().find('#info').find('.infoDesc').eq(0).animate({
                left: '1000px',
                opacity: 0
            }, 1000).removeClass('active');

            $(this).parent().find('#info').find('.infoDesc').last().animate({
                top: '0px',
                opacity: 1
            }, 1000).addClass('active');

            $(this).parent().find('#descriptions').find('.desc').eq(0).animate({
                left: '1000px',
                opacity: 0
            }, 1000).removeClass('active');

            $(this).parent().find('#descriptions').find('.desc').last().animate({
                top: '0px',
                opacity: 1
            }, 1000).addClass('active');

        }
        else if ( index <= length )
        {
            $(this).parent().find('#iphone').find('img').eq(index).animate({
                top: '1000px',
                opacity: 0
            }, 800).removeClass('active');

            $(this).parent().find('#iphone').find('img').eq(index-1).animate({
                left: '0px',
                opacity: 1
            }, 800).addClass('active');

            $(this).parent().find('#info').find('.infoDesc').eq(index).animate({
                left: '1000px',
                opacity: 0
            }, 800).removeClass('active');

            $(this).parent().find('#info').find('.infoDesc').eq(index-1).animate({
                top: '0px',
                opacity: 1
            }, 800).addClass('active');

            $(this).parent().find('#descriptions').find('.desc').eq(index).animate({
                left: '1000px',
                opacity: 0
            }, 800).removeClass('active');

            $(this).parent().find('#descriptions').find('.desc').eq(index-1).animate({
                top: '0px',
                opacity: 1
            }, 800).addClass('active');

        }

    });
});