(function($){
$.fn.initCB = function() {
	var d='<div></div></div>';
	$(this).wrap('<div class="cb"><div class="i1">'+
	  '<div class="i2">'+d)
	  .toggleClass("cbb").addClass("i3");
	$('div.cb')
		.prepend('<div class="bt">'+d)
		.append('<div class="bb">'+d);
	return this;
}
})(jQuery);