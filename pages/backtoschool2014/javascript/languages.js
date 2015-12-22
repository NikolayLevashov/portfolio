$(window).ready(showMeLanguage);

function showMeLanguage()
{
    $('#languege').on('click', showMe1);
    $('.flag').on('click', showMe1);
    $('.arrow').on('click', showMe1);
    $('#choselanguage').on('mouseleave', hideMe1);
}

function showMe1()
{
    $('#choselanguage').css('display','block');
}

function hideMe1()
{
    $('#choselanguage').css('display','none');
}
	