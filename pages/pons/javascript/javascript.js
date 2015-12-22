$(document).ready(function(){

    $('#headMenuButton #headMenuImg').click(function(){
        $('#headMenuBlock').css('display','block')
    });

    $('#menuButton #headMenuImg').click(function(){
        $('#headMenuBlock').css('display','none')
    });

    $('#startPageContent').find('.title').click(function(){

        if ( $(this).hasClass('active') )
        {
            $(this).removeClass('active');
            $(this).parent().find('.twoLevelMenu').removeClass('active');
        }
        else
        {
            $('#startPageContent').find('.title').removeClass('active');
            $('#startPageContent').find('.twoLevelMenu').removeClass('active');

            $(this).addClass('active');
            $(this).parent().find('.twoLevelMenu').addClass('active');
        }

    });

    $("select").change(function(){
        $(this).removeClass("place-holder");
    });

});