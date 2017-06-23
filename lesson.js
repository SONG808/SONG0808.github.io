/**
 * Created by song on 2017/6/7.
 */

window.onload = function () {
    $('.lessonimgbox').bind('mouseover', function () {
        $(this).css({'weidth':'226px','height':'226px','border':'2px solid #1abc9c'})
        $(this).find('.img-pop').show();
    })

    $('.lessonimgbox').bind('mouseout', function () {
        $(this).css('border','0');
    })

}

