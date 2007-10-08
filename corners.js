(function($){
$.fn.cornersBorders = function(o) {
   o = $.extend({
      baseClass: 'cb_Target'
   }, o || {});
	$(this).each(function(i){
      $(this)
         .removeClass(o.baseClass)
         .wrap('<div class="cb_divWrap ' +($(this).attr("class")||'')+ '"><div class="cb_borderL"><div class="cb_borderR"></div></div></div>')
		   .removeClass()
		   .addClass("cb_contentWrap")
			.parents(".cb_divWrap")
			.prepend('<div class="cb_borderT"><div></div></div>')
			.append('<div class="cb_borderB"><div></div></div>');
   });
   return this;
}
})(jQuery);