/* Data Img jQuery Plugin - Two Blokes (http://twoblok.es) */
$.fn.dataImg=function(e){function n(e){This.each(function(){This.attr("src",e)})}function r(){var e=$(window).width();if(e>t.lrg){var r=This.data("lrg");n(r)}if(e<t.lrg){var r=This.data("lrg");n(r)}if(e<t.med){var r=This.data("med");n(r)}if(e<t.sml){var r=This.data("sml");n(r)}}var t=$.extend({sml:400,med:800,lrg:1e3,resize:false},e);This=$(this);r();if(t.resize==true){$(window).resize(function(){r()})}}