/*************************************************************************************
 *************************************************************************************
 DU AN: SUTDIOUS
 NGAY TAO: 8/10/2022
 VERSION: 1.0
 *************************************************************************************
 *************************************************************************************/

/************** scrollTop function addClassName ********** */

$(document).scroll (function () {
    var thisPosition = $(document).scrollTop();
    
    if (thisPosition > 30) {
        $('#menuScroll').addClass ('menu-fixed');
    } else if ( thisPosition < 30) {
        $("#menuScroll").removeClass ('menu-fixed')
    }
});


