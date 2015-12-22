$(window).on('load' ,function(){

    var list = []
    list[0] = 'Slovoed Deluxe Russian-English & English-Russian dictionary'
    list[1] = 'Slovoed Deluxe German-English & English-German dictionary'
    list[2] = 'Slovoed Deluxe Spanish-English & English-Spanish dictionary'
    list[3] = 'Slovoed Deluxe Italian-Russian & Russian-Italian dictionary'
    list[4] = 'Slovoed Deluxe German-Russian & Russian-German dictionary'
    list[5] = 'Slovoed Deluxe Spanish-Russian & Russian-Spanish dictionary'
    list[6] = 'Slovoed Classic Italian-English & English-Italian dictionary'
    list[7] = 'Slovoed Classic French-English & English-French dictionary'


    $('#dictionariesBlocks').find('.block').each(function(){
        $(this).find('.descriptions').each(function(){
            var index = $(this).index();
            $(this).find('p').each(function(){
                $(this).append(list[index]);
            });
        });
    });

    var priceIos = []
    priceIos[0] = '24.99 $'
    priceIos[1] = '24.99 $'
    priceIos[2] = '24.99 $'
    priceIos[3] = '24.99 $'
    priceIos[4] = '24.99 $'
    priceIos[5] = '24.99 $'
    priceIos[6] = '14.99 $'
    priceIos[7] = '14.99 $'

    var priceIosPromo = []
    priceIosPromo[0] = '16.99 $'
    priceIosPromo[1] = '16.99 $'
    priceIosPromo[2] = '16.99 $'
    priceIosPromo[3] = '16.99 $'
    priceIosPromo[4] = '16.99 $'
    priceIosPromo[5] = '16.99 $'
    priceIosPromo[6] = '9.99 $'
    priceIosPromo[7] = '9.99 $'

    $('#dictionariesBlocks').find('.block').not('#winphone').not('#win8').each(function(){
        $(this).find('.descriptions').each(function(){
            var index = $(this).index();
            $(this).find('.red').each(function(){
                $(this).append(priceIos[index]);
            });
        });
    });

    $('#dictionariesBlocks').find('.block').not('#winphone').not('#win8').each(function(){
        $(this).find('.descriptions').each(function(){
            var index = $(this).index();
            $(this).find('.green').each(function(){
                $(this).append(priceIosPromo[index]);
            });
        });
    });

    var priceWinphone = []
    priceWinphone[0] = '24.99 $'
    priceWinphone[1] = '28.99 $'
    priceWinphone[2] = '28.99 $'
    priceWinphone[3] = '24.99 $'
    priceWinphone[4] = '24.99 $'
    priceWinphone[5] = '24.99 $'
    priceWinphone[6] = '12.99 $'
    priceWinphone[7] = '12.99 $'

    var priceWinphonePromo = []
    priceWinphonePromo[0] = '16.99 $'
    priceWinphonePromo[1] = '19.99 $'
    priceWinphonePromo[2] = '19.99 $'
    priceWinphonePromo[3] = '16.99 $'
    priceWinphonePromo[4] = '16.99 $'
    priceWinphonePromo[5] = '16.99 $'
    priceWinphonePromo[6] = '8.99 $'
    priceWinphonePromo[7] = '8.99 $'

    $('#dictionariesBlocks').find('#winphone.block').find('.descriptions').each(function(){
        var index = $(this).index();
        $(this).find('.red').each(function(){
            $(this).append(priceWinphone[index]);
        });
    });

    $('#dictionariesBlocks').find('#winphone.block').find('.descriptions').each(function(){
        var index = $(this).index();
        $(this).find('.green').each(function(){
            $(this).append(priceWinphonePromo[index]);
        });
    });

    var priceWin8 = []
    priceWin8[0] = '21.99 $'
    priceWin8[1] = '21.99 $'
    priceWin8[2] = '21.99 $'
    priceWin8[3] = '21.99 $'
    priceWin8[4] = '21.99 $'
    priceWin8[5] = '21.99 $'
    priceWin8[6] = '13.99 $'
    priceWin8[7] = '13.99 $'

    var priceWin8Promo = []
    priceWin8Promo[0] = '14.99 $'
    priceWin8Promo[1] = '14.99 $'
    priceWin8Promo[2] = '14.99 $'
    priceWin8Promo[3] = '14.99 $'
    priceWin8Promo[4] = '14.99 $'
    priceWin8Promo[5] = '14.99 $'
    priceWin8Promo[6] = '9.99 $'
    priceWin8Promo[7] = '9.99 $'

    $('#dictionariesBlocks').find('#win8.block').find('.descriptions').each(function(){
        var index = $(this).index();
        $(this).find('.red').each(function(){
            $(this).append(priceWin8[index]);
        });
    });

    $('#dictionariesBlocks').find('#win8.block').find('.descriptions').each(function(){
        var index = $(this).index();
        $(this).find('.green').each(function(){
            $(this).append(priceWin8Promo[index]);
        });
    });

});