$(document).ready(function(){

    $('#dictionariesBlocks').find('.block.active').closest('.slimScrollDiv').addClass('active');

    $('#menu').find('.button').find('p').mouseover(function() {

        var self = $(this).parent().not('.active');

        self.animate({ left: '-5px' }, 50)
            .animate({ top: '5px' }, 50)
            .animate({ left: '5px' }, 50)
            .animate({ top: '-5px' }, 50)
            .animate({ left: '0px' }, 50)
            .animate({ top: '0px' }, 50);
    });

    $('#menu').find('.button').find('p').click(function() {
        var index = $(this).parent().index();
        var indexActive = $('#menu').find('.button.active').index();

//        $('#dictionariesBlocks').find('.block').closest('.slimScrollDiv').removeClass('active');
//        $('#dictionariesBlocks').find('.block').eq(index).closest('.slimScrollDiv').addClass('active');

        $('#menu').find('.button').removeClass('active');

        $('#menu').find('.button').eq(index).addClass('active');

        if ( index > indexActive ){

            $('#devices').find('.image').not('.active').css('right','-2000px');
//            $('#dictionariesBlocks').find('.block').not('.active').css('right','-2000px');
            $('#instruction').find('.instructionBlock').not('.active').css('right','-2000px');
            $('#dictionariesBlocks').find('.slimScrollDiv').not('.active').css('right','-2000px');


            $('#devices').find('.image').eq(indexActive).animate({
                right: '2000px',
                opacity: 0
            }, 1000 ).removeClass("active");

            $('#devices').find('.image').eq(index).animate({
                right: '0px',
                opacity: 1
            }, 1000 ).addClass("active");

//            $('#dictionariesBlocks').find('.block').eq(indexActive).animate({
//                right: '2000px',
//                opacity: 0
//            }, 1000 ).removeClass("active");
//
//            $('#dictionariesBlocks').find('.block').eq(index).animate({
//                right: '0px',
//                opacity: 1
//            }, 1000 ).addClass("active");

            $('#instruction').find('.instructionBlock').eq(indexActive).animate({
                right: '2000px',
                opacity: 0
            }, 1000 ).removeClass("active");

            $('#instruction').find('.instructionBlock').eq(index).animate({
                right: '0px',
                opacity: 1
            }, 1000 ).addClass("active");

            $('#dictionariesBlocks').find('.block').eq(indexActive).closest('.slimScrollDiv').animate({
                right: '2000px',
                opacity: 0
            }, 1000 ).removeClass("active");

            $('#dictionariesBlocks').find('.block').eq(index).closest('.slimScrollDiv').animate({
                right: '0px',
                opacity: 1
            }, 1000 ).addClass("active");
        }

        if ( index < indexActive )
        {

            $('#devices').find('.image').not('.active').css('right','2000px');
//            $('#dictionariesBlocks').find('.block').not('.active').css('right','2000px');
            $('#instruction').find('.instructionBlock').not('.active').css('right','2000px');
            $('#dictionariesBlocks').find('.slimScrollDiv').not('.active').css('right','2000px');


            $('#devices').find('.image').eq(indexActive).animate({
                right: '-2000px',
                opacity: 0
            }, 1000 ).removeClass("active");

            $('#devices').find('.image').eq(index).animate({
                right: '0px',
                opacity: 1
            }, 1000 ).addClass("active");

//            $('#dictionariesBlocks').find('.block').eq(indexActive).animate({
//                right: '-2000px',
//                opacity: 0
//            }, 1000 ).removeClass("active");
//
//            $('#dictionariesBlocks').find('.block').eq(index).animate({
//                right: '0px',
//                opacity: 1
//            }, 1000 ).addClass("active");

            $('#instruction').find('.instructionBlock').eq(indexActive).animate({
                right: '-2000px',
                opacity: 0
            }, 1000 ).removeClass("active");

            $('#instruction').find('.instructionBlock').eq(index).animate({
                right: '0px',
                opacity: 1
            }, 1000 ).addClass("active");

            $('#dictionariesBlocks').find('.block').eq(indexActive).closest('.slimScrollDiv').animate({
                right: '-2000px',
                opacity: 0
            }, 1000 ).removeClass("active");

            $('#dictionariesBlocks').find('.block').eq(index).closest('.slimScrollDiv').animate({
                right: '0px',
                opacity: 1
            }, 1000 ).addClass("active");
        }

    });

    $('#instruction').find('.instructionBlock').find('p').click(function(){
        $(this).parent().find('.descriptionBlockGrey').css('display','block');
    });

    $('#instruction').find('.instructionBlock').find('.descriptionBlockGrey').click(function(){
        $(this).css('display','none');
    });

    $('#instruction').find('.instructionBlock').find('.descriptionBlockWhite').click(function(e){
        e.stopPropagation();
    });

    $('#dictionariesBlocks').find('#win8.block').find('.descriptions').find('a').click(function(e){
        return false;
    });

});