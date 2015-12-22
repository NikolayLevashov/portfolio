//Определение платформы пользователя

var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
var MacOS = ( navigator.userAgent.match(/(Mac OS)/g) ? true : false );
var Android = ( navigator.userAgent.match(/(Android)/g) ? true : false );
var WinPhone = ( navigator.userAgent.match(/(Windows NT 5.1)/g) ? true : false );
var Windows = ( navigator.userAgent.match(/(Windows NT 6.1)/g) ? true : false );
var Win8 = ( navigator.userAgent.match(/(Windows NT 6.2)/g) ? true : false );
var Win81 = ( navigator.userAgent.match(/(Windows NT 6.3)/g) ? true : false );

//Определение локали пользователя

var lang = window.navigator.userLanguage || window.navigator.language;

if ( lang == 'el' || lang.match(/(el)/g) )
{
    var siteLang = 'el';
}
if ( lang == 'en' || lang.match(/(en)/g) ) //проверенно
{
    var siteLang = 'en';
    var siteCountry = '';
    var imgLocal = 'en';
}
if ( lang == 'de' || lang.match(/(de)/g) ) //проверенно
{
    var siteLang = '';
    var siteCountry = 'de';
    var imgLocal = 'de';
}
if ( lang == 'es' || lang.match(/(es)/g) )
{
    var siteLang = 'es';
}
if ( lang == 'fr' || lang.match(/(fr)/g) )
{
    var siteLang = 'fr';
}
if ( lang == 'it' || lang.match(/(it)/g) )
{
    var siteLang = 'it';
}
if ( lang == 'pt' || lang.match(/(pt)/g) )
{
    var siteLang = 'pt';
}
if ( lang == 'ru' || lang.match(/(ru)/g) )
{
    var siteLang = 'en';
    var siteCountry = '';
    var imgLocal = 'en';
}
if ( lang == 'tr' || lang.match(/(tr)/g) )
{
    var siteLang = 'tr';
}
if ( lang == 'cn' || lang.match(/(cn)/g) )
{
    var siteLang = 'cn';
}

$.getJSON( "https://itunes.apple.com/lookup?id=577049805&country="+ siteCountry +"&lang="+ siteLang +"&entity=software&limit=200&format=json&callback=?" , function(data){

    data.results.sort(function( a, b ){
        return a.trackId - b.trackId
    });

    $(".content").find(".loading-block").remove();
    $('#krutilka').trigger('hide');

    var worterbucherFile = window.location.pathname.match(/(worterbucher)/g) ? true : false ;
    var sprachkurseFile = window.location.pathname.match(/(sprachkurse)/g) ? true : false ;
    var spieleFile = window.location.pathname.match(/(spiele)/g) ? true : false ;
    var gratisDownloadFile = window.location.pathname.match(/(gratisdownload)/g) ? true : false ;

    if (worterbucherFile == true) {
        var arrCount = [];
        arrCount[0] = [577741918, 'https://play.google.com/store/apps/details?id=com.pons.onlinedictionary', 'all'];

        arrCount[1] = [590346602, 'https://play.google.com/store/apps/details?id=de.pons.dictionaries', 'all'];

        arrCount[2] = [799257322, 'https://play.google.com/store/apps/details?id=de.pons.schule.woerterbuch', 'all'];

        arrCount[3] = [416760687, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.premium.german_english', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de en'];
        arrCount[4] = [416761550, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.premium.german_french', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de fr'];
        arrCount[5] = [416762677, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.premium.german_italian', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de it'];
        arrCount[6] = [416765615, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.premium.german_spanish', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de sp'];
        if ( siteLang == 'es' || siteCountry == 'es' )
        {
            arrCount[7] = [];
        }
        else
        {
            arrCount[7] = [449576110, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.premium.bulgarian_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de bl'];
        }
        arrCount[8] = [449566343, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.premium.bulgarian_english', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'en bl'];
        arrCount[9] = [347881974, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.german_greek', 'de gr'];

        arrCount[10] = [357054612, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.business_english', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'en'];
        arrCount[11] = [347879869, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.business_french', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'fr'];
        arrCount[12] = [347881226, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.business_spanish', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'sp'];

        arrCount[13] = [287656932, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.english_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de en'];
        arrCount[14] = [287658146, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.french_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de fr'];
        arrCount[15] = [287660738, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.german_italian', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de it'];
        arrCount[16] = [288111572, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.german_spanish', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de sp'];
        arrCount[17] = [543173863, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.base_03c8.latin_german', 'de lt'];

        arrCount[18] = [449122378, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.concise.bulgarian_english', 'en bl'];
        if ( siteLang == 'es' || siteCountry == 'es' )
        {
            arrCount[19] = [];
        }
        else
        {
            arrCount[19] = [449123761, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.concise.bulgarian_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de bl'];
        }
        arrCount[20] = [359358039, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.english_polish', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'en pl'];
        arrCount[21] = [305711857, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.german_polish', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de pl'];
        arrCount[22] = [362283382, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.english_russian', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'en ru'];
        arrCount[23] = [359355742, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.german_russian.compact', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de ru'];
        arrCount[24] = [305707235, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.german_turkish', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de tr'];

        arrCount[25] = [390389853, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.german_spelling', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de'];

        arrCount[26] = [376637626, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.school_english', 'en'];
        arrCount[27] = [376640610, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.school_french', 'fr'];
        arrCount[28] = [376641618, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.school_spanish', 'sp'];

        arrCount[29] = [416540148, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.english_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de en'];
        arrCount[30] = [448914995, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.french_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de fr'];
        arrCount[31] = [448913529, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.italian_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de it'];
        arrCount[32] = [416756217, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.german_spanish', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de sp'];
        arrCount[33] = [449127279, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.bulgarian_english', 'en bl'];
        arrCount[34] = [449151221, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.bulgarian_french', 'fr bl'];
        if ( siteLang == 'es' || siteCountry == 'es' )
        {
            arrCount[35] = [];
        }
        else
        {
            arrCount[35] = [449148567, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.bulgarian_italian', 'bl it'];
        } 
        arrCount[36] = [449131719, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.bulgarian_spanish', 'sp bl'];
        arrCount[37] = [449129831, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.bulgarian_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de bl'];
        arrCount[38] = [449155852, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.bulgarian_russian', 'ru bl'];
        arrCount[39] = [448910786, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.portuguese_german', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de pt'];
        arrCount[40] = [416753112, 'https://play.google.com/store/apps/details?id=com.slovoed.noreg.pons.basic.german_russian', 'https://www.microsoft.com/ru-ru/store/apps/pons-w%C3%B6rterbuch-bibliothek/9wzdncrdnbwb/', 'de ru'];
    }
    if (sprachkurseFile == true) {
        var arrCount = [];
        if ( siteLang == 'es' || siteCountry == 'es' )
        {
            arrCount[0] = [];
        }
        else
        {
            arrCount[0] = [395953480, 'en'];
        } 
        arrCount[1] = [403472265, 'fr'];
        if ( siteLang == 'es' || siteCountry == 'es' )
        {
            arrCount[2] = [];
        }
        else
        {
            arrCount[2] = [401131398, 'it'];
        } 
        arrCount[3] = [400187968, 'sp'];
        arrCount[4] = [427177147, 'pt'];
        if ( siteLang == 'es' || siteCountry == 'es' )
        {
            arrCount[5] = [];
        }
        else
        {
            arrCount[5] = [406998652, 'nd'];
        }
        arrCount[6] = [880131174, 'de'];

        // arrCount[7] = [901382448, 'en'];
        // arrCount[8] = [916716286, 'fr'];
        // arrCount[9] = [916716708, 'it'];
        // arrCount[10] = [916716406, 'sp'];

        arrCount[7] = [916712880, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_en', 'en'];
        arrCount[8] = [916719075, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_fr', 'fr'];
        arrCount[9] = [916718961, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_it', 'it'];
        arrCount[10] = [916718927, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_es', 'es'];
        arrCount[11] = [916719167, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_de', 'de'];
        arrCount[12] = [966140144, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_ru', 'ru'];
        arrCount[13] = [961657378, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_tr', 'tr'];
    }
    if (spieleFile == true) {
        var arrCount = [];
        arrCount[0] = [704492432, 'https://play.google.com/store/apps/details?id=com.pons.spellflash', 'all'];

        arrCount[1] = [452121028, 'https://play.google.com/store/apps/details?id=com.nomtek', 'all'];

        arrCount[2] = [901382448, 'en'];
        arrCount[3] = [916716286, 'fr'];
        arrCount[4] = [916716708, 'it'];
        arrCount[5] = [916716406, 'en'];
        
        if ( siteLang == 'de' || siteCountry == 'de' )
        {
            arrCount[6] = [524060553, 'fr'];
            arrCount[7] = [512953452, 'it'];
            arrCount[8] = [503152052, 'sp'];
            arrCount[9] = [488718439, 'en'];
        }
        else if ( siteLang == 'es' || siteCountry == 'es' )
        {
            arrCount[6] = [569206267, 'fr'];
            arrCount[7] = [];
            arrCount[8] = [];
            arrCount[9] = [];
        }
        else
        {
            arrCount[6] = [569206267, 'fr'];
            arrCount[7] = [569249292, 'it'];
            arrCount[8] = [569163688, 'sp'];
            arrCount[9] = [488718439, 'en']; 
        }

    }
    if (gratisDownloadFile == true) {
        var arrCount = [];
        arrCount[0] = [577741918, 'https://play.google.com/store/apps/details?id=com.pons.onlinedictionary','all'];

        arrCount[1] = [452121028, 'https://play.google.com/store/apps/details?id=com.nomtek', 'all'];

        arrCount[2] = [590346602, 'https://play.google.com/store/apps/details?id=de.pons.dictionaries', 'all'];

        arrCount[3] = [799257322, 'https://play.google.com/store/apps/details?id=de.pons.schule.woerterbuch', 'all'];

        arrCount[4] = [895779902, 'all'];

        arrCount[5] = [916712880, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_en', 'en'];
        arrCount[6] = [916719075, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_it', 'it'];
        arrCount[7] = [916718961, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_fr', 'fr'];
        arrCount[8] = [916718927, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_es', 'es'];
        arrCount[9] = [916719167, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_de', 'de'];
        arrCount[10] = [966140144, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_ru', 'ru'];
        arrCount[11] = [961657378, 'https://play.google.com/store/apps/details?id=com.pons.bildwoerterbuch_tr', 'tr'];
    }

    console.log ( data.results )

    var q = 0;

    while ( q < arrCount.length )
    {

        var newData = $.grep( data.results, function(obj) {
            return obj.trackId == arrCount[q][0] ;
        });

        var languegePair = arrCount[q].pop();

        if ( iOS == true )
        //if ( Windows == true || Win8 == true || Win81 == true )
        {
            var dictHref = newData[0].trackViewUrl;
            var dictImg = newData[0].artworkUrl100;
            var dictName = newData[0].trackName;
            var dictPrice = newData[0].formattedPrice;
            var dictDesc = newData[0].description;
            var dictBadge = 'ios';

            var badges = "<a class='badge' target='_black' href='" + dictHref + "'><img class='img-badge' src='./images/" + imgLocal + "_" + dictBadge + "_badge.svg'></a>";
        }
        if ( Android == true )
        //if ( Windows == true || Win8 == true || Win81 == true )
        {

            if ( arrCount[q].length != 1 )
            {
                var dictHref = arrCount[q][1];
                var dictImg = newData[0].artworkUrl100;
                var dictName = newData[0].trackName;
                var dictPrice = newData[0].formattedPrice;
                var dictDesc = newData[0].description;
                var dictBadge = 'android';

                var badges = "<a class='badge' target='_black' href='" + dictHref + "'><img class='img-badge' src='./images/" + imgLocal + "_" + dictBadge + "_badge.svg'></a>";
            }
            else
            {
                return false
            }

        }
        
        if ( Windows == true || Win8 == true || Win81 == true )
        {   
            var dictHref = newData[0].trackViewUrl;

            var dictHrefIos = newData[0].trackViewUrl;
            var dictHrefAndroid = arrCount[q][1];
            var dictHrefWin = arrCount[q][2];

            var dictImg = newData[0].artworkUrl100;
            var dictName = newData[0].trackName;
            var dictPrice = newData[0].formattedPrice;
            var dictDesc = newData[0].description;

            var dictBadgeIos = 'ios';
            var dictBadgeAndroid = 'android';
            var dictBadgeWin = 'windows';

            if ( arrCount[q].length == 1 )
            {
                var badges =
                    "<a class='badge' target='_black' href='" + dictHrefIos + "'><img class='img-badge' src='./images/" + imgLocal + "_" + dictBadgeIos + "_badge.svg'></a>";
            }
            else if ( arrCount[q].length == 2 )
            {
                var badges =
                    "<a class='badge' target='_black' href='" + dictHrefIos + "'><img class='img-badge' src='./images/" + imgLocal + "_" + dictBadgeIos + "_badge.svg'></a>" +
                    "<a class='badge' target='_black' href='" + dictHrefAndroid + "'><img class='img-badge' src='./images/" + imgLocal + "_" + dictBadgeAndroid + "_badge.svg'></a>";
            }
            else if ( arrCount[q].length == 3 )
            {
                var badges =
                    "<a class='badge' target='_black' href='" + dictHrefIos + "'><img class='img-badge' src='./images/" + imgLocal + "_" + dictBadgeIos + "_badge.svg'></a>" +
                    "<a class='badge' target='_black' href='" + dictHrefAndroid + "'><img class='img-badge' src='./images/" + imgLocal + "_" + dictBadgeAndroid + "_badge.svg'></a>" +
                    "<a class='badge' target='_black' href='" + dictHrefWin + "'><img class='img-badge' src='./images/" + imgLocal + "_" + dictBadgeWin + "_badge.svg'></a>";
            }

        }

        $(".content").append(

            "<div class='dictionary-block "+ languegePair  + "'>" +

            "<div class='dict-info'>" +

            "<div class='dict-img'>" +
            "<a target='_black' href='" + dictHref + "'>" + "<img src='" + dictImg + "'>" + "</a>" +
            "</div>" +

            "<p class='title'>" + "<a target='_black' href='" + dictHref + "'>" + dictName + "</a>" + "</p>" +

            "<p class='price'>" + "<a target='_black' href='" + dictHref + "'>" + dictPrice + "</a>" + "</p>" +

            "<br clear='both'>" +

            "</div>" +

            "<div class='dict-info-badges'>" +

            badges +

            "</div>" +

            "<br clear='both'>" +

            "<div class='dict-description'>" +

            "<p>" + dictDesc + "</p>"+

            "<div class='white-fade'></div>"+

            "</div>" +

            "<a class='show info-button'><img src='./images/pons_arrow_down.png'></a>"+

            "<a class='hide info-button'><img src='./images/pons_arrow_up.png'></a>"+

            "<div class='black-line'></div>" +

            "</div>"

        );

        q ++;

    }
});

