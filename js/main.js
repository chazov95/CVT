$(function () {
    $('.tabs li').not('.active').click(function () {
        var index = $(this).index();
        $('.tabs_content').eq(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs_content').css('display', 'none').eq(index).css('display', 'block');
    })

    $('.tabs li:first').addClass('active');
    $('.tabs_content:first').css('display', 'block');
})