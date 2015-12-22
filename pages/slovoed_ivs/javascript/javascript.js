$(document).ready(function(){

    $(".head").find(".signin").find("a").click(function(){
        if ( $(this).hasClass("signin-button") )
        {
            $("body").find(".signin-register-block-wrapper").css("display","block");
            $("body").find(".signin-register-block-wrapper").find("li.signin-button").addClass('active');
            $("body").find(".signin-register-block-wrapper").find(".signin-block").addClass('active');

            $(".signin-register-block").removeClass("scrollable-block");

        }

        else if ( $(this).hasClass("register-button") )
        {
            $("body").find(".signin-register-block-wrapper").css("display","block");
            $("body").find(".signin-register-block-wrapper").find("li.register-button").addClass('active');
            $("body").find(".signin-register-block-wrapper").find(".register-block").addClass('active');

            $(".signin-register-block").addClass("scrollable-block");
        }

        var blockHeight = $("body").find(".signin-register-block-wrapper").find(".signin-register-block").height();
        $("body").find(".signin-register-block-wrapper").find(".signin-register-block").css("margin-top","-" + blockHeight/2 + "px");

    });

    $("body").find(".signin-register-block-wrapper").find("li").click(function(){

        if ( $(this).hasClass("signin-button") )
        {
            $("body").find(".signin-register-block-wrapper").find("li").removeClass('active');
            $("body").find(".signin-register-block-wrapper").find(".register-block").removeClass('active');

            $("body").find(".signin-register-block-wrapper").find("li.signin-button").addClass('active');
            $("body").find(".signin-register-block-wrapper").find(".signin-block").addClass('active');

            $(".signin-register-block").removeClass("scrollable-block");

        }

        else if ( $(this).hasClass("register-button") )
        {
            $("body").find(".signin-register-block-wrapper").find("li").removeClass('active');
            $("body").find(".signin-register-block-wrapper").find(".signin-block").removeClass('active');

            $("body").find(".signin-register-block-wrapper").find("li.register-button").addClass('active');
            $("body").find(".signin-register-block-wrapper").find(".register-block").addClass('active');

            $(".signin-register-block").addClass("scrollable-block");
        }

        var blockHeight = $("body").find(".signin-register-block-wrapper").find(".signin-register-block").height();
        $("body").find(".signin-register-block-wrapper").find(".signin-register-block").css("margin-top","-" + blockHeight/2 + "px");

    });

    $("body").find(".signin-register-block-wrapper").find(".not-now").click(closeSigninRegisterWrapper);
    $("body").find(".signin-register-block-wrapper").click(closeSigninRegisterWrapper);

    function closeSigninRegisterWrapper(e)
    {
        $("body").find(".signin-register-block-wrapper").css("display","none");

        $("body").find(".signin-register-block-wrapper").find("li").removeClass('active');
        $("body").find(".signin-register-block-wrapper").find(".signin-block").removeClass('active');
        $("body").find(".signin-register-block-wrapper").find(".register-block").removeClass('active');
    };

    $("body").find(".signin-register-block-wrapper").find(".signin-register-block").click(function(e){
        e.stopPropagation()
    });

    $("body").find(".head").find(".user-block").find(".user-name").click(function(e){

        $(this).parent().find(".user-menu").addClass("active");
        return false;

    });

    $("body").not(".user-block").click(function(){
        $(this).find(".user-menu").removeClass("active");
    });

    $(".content").find(".products-menu").find("li").click(function(){

        var index = $(this).index();

        $(".content").find(".products-menu").find("li").removeClass("active");
        $(this).addClass("active");

        $(".products-menu").find(".block").removeClass("active");
        $(".products-menu").find(".block").eq(index).addClass("active");

    });

    //$("body").find(".update-button").click(function(){
    //    $("body").find(".confirm-changes-wrapper").css("display","block");
    //});
    //
    //$(".confirm-changes-wrapper").find(".cancel-button").click(function(){
    //    $("body").find(".confirm-changes-wrapper").css("display","none");
    //});

    $("body").find(".reset-button").click(buttonsInForms);
    $("body").find(".update-button").click(buttonsInForms);

    function buttonsInForms (){

        $(this).closest(".content").find(".password-form").css("display","none");
        $(this).closest(".content").find(".emailed-form").css("display","block");

        function timer(){
            var obj=document.getElementById('time');
            obj.innerHTML--;
            /* Нужно поддкорректировать ссылку редиректа */
            if(obj.innerHTML==0){document.location.href = 'http://slovoed.net/slovoed_ivs/pages/products.html';setTimeout(function(){},1000);}

            else{setTimeout(timer,1000);}
            }
        setTimeout(timer,1000);

    };

    $(".submit-button").click(function(){
        $(this).closest(".help-form").removeClass("active");
        $(this).closest(".help-form-block").find("#form-sumbit-success").addClass("active");
    });

    $(".language-choice").click(function(e){
        $(this).find(".language-popup").addClass("active");
        e.stopPropagation();
    });

    $(".language-popup").mouseleave(function(){
        $(this).removeClass("active");
    });

    $("body").click(function () {
        $(".language-popup").removeClass("active");
    });

    /* временный код */

    //$("body").find(".signin-register-block-wrapper").find(".signin-green-button").click(function(){
    //
    //    $("body").find(".signin-register-block-wrapper").css("display","none");
    //
    //    $("body").find(".signin-register-block-wrapper").find("li").removeClass('active');
    //    $("body").find(".signin-register-block-wrapper").find(".signin-block").removeClass('active');
    //    $("body").find(".signin-register-block-wrapper").find(".register-block").removeClass('active');
    //
    //    $("body").find(".head").find(".signin").removeClass("active");
    //    $("body").find(".head").find(".user-block").addClass("active");
    //
    //});

});