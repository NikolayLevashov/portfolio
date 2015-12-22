$(document).ready(function(){

    //Определение локали пользователя

    var lang = window.navigator.userLanguage || window.navigator.language;

    if ( lang == 'el' || lang.match(/(el)/g) )
    {
        var loadingText = 'Γίνεται φόρτωση... Περιμένετε';
    }
    if ( lang == 'en' || lang.match(/(en)/g) ) //проверенно
    {
        var loadingText = 'Loading. Please wait…';
    }
    if ( lang == 'de' || lang.match(/(de)/g) ) //проверенно
    {
        var loadingText = 'Ladevorgang. Bitte warten …';
    }
    if ( lang == 'es' || lang.match(/(es)/g) )
    {
        var loadingText = 'Cargando. Espere…';
    }
    if ( lang == 'fr' || lang.match(/(fr)/g) )
    {
        var loadingText = 'Chargement en cours. Veuillez patienter…';
    }
    if ( lang == 'it' || lang.match(/(it)/g) )
    {
        var loadingText = 'Caricamento in corso. Attendere…';
    }
    if ( lang == 'pt' || lang.match(/(pt)/g) )
    {
        var loadingText = 'A carregar... Aguarde';
    }
    if ( lang == 'ru' || lang.match(/(ru)/g) )
    {
        var loadingText = 'Идет загрузка. Пожалуйста, подождите…';
    }
    if ( lang == 'tr' || lang.match(/(tr)/g) )
    {
        var loadingText = 'Yükleniyor. Lütfen bekleyin...';
    }
    if ( lang == 'cn' || lang.match(/(cn)/g) )
    {
        var loadingText = '正在載入，請稍候。';
    }

    $(".content").append("<div class='loading-block' style='text-align: center; font-size: 22px; padding-top: 25px; padding-bottom: 50px;'><p>"+ loadingText +  "</p></div>");
    $(".content").append("<script>$(function(){$('#krutilka').krutilka();});</script><span id='krutilka'></span>");

    function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    include('./javascript/apiRequest.js');

    $(".content").on("click", ".show.info-button" , function(){

        $(this).parent().find(".dict-description").css("overflow","visible");
        $(this).parent().find(".dict-description").css("height","auto");

        $(this).parent().find(".hide.info-button").css("display","block");
        $(this).css("display","none");

        $(this).parent().find(".white-fade").css("display","none");

    });

    $(".content").on("click", ".hide.info-button" , function(){

        $(this).parent().find(".dict-description").css("overflow","hidden");
        $(this).parent().find(".dict-description").css("height","100px");

        $(this).parent().find(".show.info-button").css("display","block");
        $(this).css("display","none");

        $(this).parent().find(".white-fade").css("display","block");

    });

});