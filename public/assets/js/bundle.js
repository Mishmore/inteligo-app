/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
  html2canvas 0.4.1 <http://html2canvas.hertzen.com>
  Copyright (c) 2013 Niklas von Hertzen

  Released under MIT License
*/

(function(window, document, undefined){

"use strict";

var _html2canvas = {},
previousElement,
computedCSS,
html2canvas;

_html2canvas.Util = {};

_html2canvas.Util.log = function(a) {
  if (_html2canvas.logging && window.console && window.console.log) {
    window.console.log(a);
  }
};

_html2canvas.Util.trimText = (function(isNative){
  return function(input) {
    return isNative ? isNative.apply(input) : ((input || '') + '').replace( /^\s+|\s+$/g , '' );
  };
})(String.prototype.trim);

_html2canvas.Util.asFloat = function(v) {
  return parseFloat(v);
};

(function() {
  // TODO: support all possible length values
  var TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
  var TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
  _html2canvas.Util.parseTextShadows = function (value) {
    if (!value || value === 'none') {
      return [];
    }

    // find multiple shadow declarations
    var shadows = value.match(TEXT_SHADOW_PROPERTY),
      results = [];
    for (var i = 0; shadows && (i < shadows.length); i++) {
      var s = shadows[i].match(TEXT_SHADOW_VALUES);
      results.push({
        color: s[0],
        offsetX: s[1] ? s[1].replace('px', '') : 0,
        offsetY: s[2] ? s[2].replace('px', '') : 0,
        blur: s[3] ? s[3].replace('px', '') : 0
      });
    }
    return results;
  };
})();


_html2canvas.Util.parseBackgroundImage = function (value) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        c, mode = 0, numParen = 0, quote, args;

    var appendResult = function(){
        if(method) {
            if(definition.substr( 0, 1 ) === '"') {
                definition = definition.substr( 1, definition.length - 2 );
            }
            if(definition) {
                args.push(definition);
            }
            if(method.substr( 0, 1 ) === '-' &&
                    (prefix_i = method.indexOf( '-', 1 ) + 1) > 0) {
                prefix = method.substr( 0, prefix_i);
                method = method.substr( prefix_i );
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args
            });
        }
        args = []; //for some odd reason, setting .length = 0 didn't work in safari
        method =
            prefix =
            definition =
            block = '';
    };

    appendResult();
    for(var i = 0, ii = value.length; i<ii; i++) {
        c = value[i];
        if(mode === 0 && whitespace.indexOf( c ) > -1){
            continue;
        }
        switch(c) {
            case '"':
                if(!quote) {
                    quote = c;
                }
                else if(quote === c) {
                    quote = null;
                }
                break;

            case '(':
                if(quote) { break; }
                else if(mode === 0) {
                    mode = 1;
                    block += c;
                    continue;
                } else {
                    numParen++;
                }
                break;

            case ')':
                if(quote) { break; }
                else if(mode === 1) {
                    if(numParen === 0) {
                        mode = 0;
                        block += c;
                        appendResult();
                        continue;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if(quote) { break; }
                else if(mode === 0) {
                    appendResult();
                    continue;
                }
                else if (mode === 1) {
                    if(numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition);
                        definition = '';
                        block += c;
                        continue;
                    }
                }
                break;
        }

        block += c;
        if(mode === 0) { method += c; }
        else { definition += c; }
    }
    appendResult();

    return results;
};

_html2canvas.Util.Bounds = function (element) {
  var clientRect, bounds = {};

  if (element.getBoundingClientRect){
    clientRect = element.getBoundingClientRect();

    // TODO add scroll position to bounds, so no scrolling of window necessary
    bounds.top = clientRect.top;
    bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
    bounds.left = clientRect.left;

    bounds.width = element.offsetWidth;
    bounds.height = element.offsetHeight;
  }

  return bounds;
};

// TODO ideally, we'd want everything to go through this function instead of Util.Bounds,
// but would require further work to calculate the correct positions for elements with offsetParents
_html2canvas.Util.OffsetBounds = function (element) {
  var parent = element.offsetParent ? _html2canvas.Util.OffsetBounds(element.offsetParent) : {top: 0, left: 0};

  return {
    top: element.offsetTop + parent.top,
    bottom: element.offsetTop + element.offsetHeight + parent.top,
    left: element.offsetLeft + parent.left,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

function toPX(element, attribute, value ) {
    var rsLeft = element.runtimeStyle && element.runtimeStyle[attribute],
        left,
        style = element.style;

    // Check if we are not dealing with pixels, (Opera has issues with this)
    // Ported from jQuery css.js
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels

    if ( !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test( value ) && /^-?\d/.test(value) ) {
        // Remember the original values
        left = style.left;

        // Put in the new values to get a computed value out
        if (rsLeft) {
            element.runtimeStyle.left = element.currentStyle.left;
        }
        style.left = attribute === "fontSize" ? "1em" : (value || 0);
        value = style.pixelLeft + "px";

        // Revert the changed values
        style.left = left;
        if (rsLeft) {
            element.runtimeStyle.left = rsLeft;
        }
    }

    if (!/^(thin|medium|thick)$/i.test(value)) {
        return Math.round(parseFloat(value)) + "px";
    }

    return value;
}

function asInt(val) {
    return parseInt(val, 10);
}

function parseBackgroundSizePosition(value, element, attribute, index) {
    value = (value || '').split(',');
    value = value[index || 0] || value[0] || 'auto';
    value = _html2canvas.Util.trimText(value).split(' ');

    if(attribute === 'backgroundSize' && (!value[0] || value[0].match(/cover|contain|auto/))) {
        //these values will be handled in the parent function
    } else {
        value[0] = (value[0].indexOf( "%" ) === -1) ? toPX(element, attribute + "X", value[0]) : value[0];
        if(value[1] === undefined) {
            if(attribute === 'backgroundSize') {
                value[1] = 'auto';
                return value;
            } else {
                // IE 9 doesn't return double digit always
                value[1] = value[0];
            }
        }
        value[1] = (value[1].indexOf("%") === -1) ? toPX(element, attribute + "Y", value[1]) : value[1];
    }
    return value;
}

_html2canvas.Util.getCSS = function (element, attribute, index) {
    if (previousElement !== element) {
      computedCSS = document.defaultView.getComputedStyle(element, null);
    }

    var value = computedCSS[attribute];

    if (/^background(Size|Position)$/.test(attribute)) {
        return parseBackgroundSizePosition(value, element, attribute, index);
    } else if (/border(Top|Bottom)(Left|Right)Radius/.test(attribute)) {
      var arr = value.split(" ");
      if (arr.length <= 1) {
          arr[1] = arr[0];
      }
      return arr.map(asInt);
    }

  return value;
};

_html2canvas.Util.resizeBounds = function( current_width, current_height, target_width, target_height, stretch_mode ){
  var target_ratio = target_width / target_height,
    current_ratio = current_width / current_height,
    output_width, output_height;

  if(!stretch_mode || stretch_mode === 'auto') {
    output_width = target_width;
    output_height = target_height;
  } else if(target_ratio < current_ratio ^ stretch_mode === 'contain') {
    output_height = target_height;
    output_width = target_height * current_ratio;
  } else {
    output_width = target_width;
    output_height = target_width / current_ratio;
  }

  return {
    width: output_width,
    height: output_height
  };
};

function backgroundBoundsFactory( prop, el, bounds, image, imageIndex, backgroundSize ) {
    var bgposition =  _html2canvas.Util.getCSS( el, prop, imageIndex ) ,
    topPos,
    left,
    percentage,
    val;

    if (bgposition.length === 1){
      val = bgposition[0];

      bgposition = [];

      bgposition[0] = val;
      bgposition[1] = val;
    }

    if (bgposition[0].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[0])/100);
      left = bounds.width * percentage;
      if(prop !== 'backgroundSize') {
        left -= (backgroundSize || image).width*percentage;
      }
    } else {
      if(prop === 'backgroundSize') {
        if(bgposition[0] === 'auto') {
          left = image.width;
        } else {
          if (/contain|cover/.test(bgposition[0])) {
            var resized = _html2canvas.Util.resizeBounds(image.width, image.height, bounds.width, bounds.height, bgposition[0]);
            left = resized.width;
            topPos = resized.height;
          } else {
            left = parseInt(bgposition[0], 10);
          }
        }
      } else {
        left = parseInt( bgposition[0], 10);
      }
    }


    if(bgposition[1] === 'auto') {
      topPos = left / image.width * image.height;
    } else if (bgposition[1].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[1])/100);
      topPos =  bounds.height * percentage;
      if(prop !== 'backgroundSize') {
        topPos -= (backgroundSize || image).height * percentage;
      }

    } else {
      topPos = parseInt(bgposition[1],10);
    }

    return [left, topPos];
}

_html2canvas.Util.BackgroundPosition = function( el, bounds, image, imageIndex, backgroundSize ) {
    var result = backgroundBoundsFactory( 'backgroundPosition', el, bounds, image, imageIndex, backgroundSize );
    return { left: result[0], top: result[1] };
};

_html2canvas.Util.BackgroundSize = function( el, bounds, image, imageIndex ) {
    var result = backgroundBoundsFactory( 'backgroundSize', el, bounds, image, imageIndex );
    return { width: result[0], height: result[1] };
};

_html2canvas.Util.Extend = function (options, defaults) {
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
};


/*
 * Derived from jQuery.contents()
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
_html2canvas.Util.Children = function( elem ) {
  var children;
  try {
    children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ? elem.contentDocument || elem.contentWindow.document : (function(array) {
      var ret = [];
      if (array !== null) {
        (function(first, second ) {
          var i = first.length,
          j = 0;

          if (typeof second.length === "number") {
            for (var l = second.length; j < l; j++) {
              first[i++] = second[j];
            }
          } else {
            while (second[j] !== undefined) {
              first[i++] = second[j++];
            }
          }

          first.length = i;

          return first;
        })(ret, array);
      }
      return ret;
    })(elem.childNodes);

  } catch (ex) {
    _html2canvas.Util.log("html2canvas.Util.Children failed with exception: " + ex.message);
    children = [];
  }
  return children;
};

_html2canvas.Util.isTransparent = function(backgroundColor) {
  return (backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)");
};
_html2canvas.Util.Font = (function () {

  var fontData = {};

  return function(font, fontSize, doc) {
    if (fontData[font + "-" + fontSize] !== undefined) {
      return fontData[font + "-" + fontSize];
    }

    var container = doc.createElement('div'),
    img = doc.createElement('img'),
    span = doc.createElement('span'),
    sampleText = 'Hidden Text',
    baseline,
    middle,
    metricsObj;

    container.style.visibility = "hidden";
    container.style.fontFamily = font;
    container.style.fontSize = fontSize;
    container.style.margin = 0;
    container.style.padding = 0;

    doc.body.appendChild(container);

    // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
    img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = font;
    span.style.fontSize = fontSize;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(doc.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(doc.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;
    metricsObj = {
      baseline: baseline,
      lineWidth: 1,
      middle: middle
    };

    fontData[font + "-" + fontSize] = metricsObj;

    doc.body.removeChild(container);

    return metricsObj;
  };
})();

(function(){
  var Util = _html2canvas.Util,
    Generate = {};

  _html2canvas.Generate = Generate;

  var reGradients = [
  /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
  /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
  ];

  /*
 * TODO: Add IE10 vendor prefix (-ms) support
 * TODO: Add W3C gradient (linear-gradient) support
 * TODO: Add old Webkit -webkit-gradient(radial, ...) support
 * TODO: Maybe some RegExp optimizations are possible ;o)
 */
  Generate.parseGradient = function(css, bounds) {
    var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3, tl,tr,br,bl;

    for(i = 0; i < len; i+=1){
      m1 = css.match(reGradients[i]);
      if(m1) {
        break;
      }
    }

    if(m1) {
      switch(m1[1]) {
        case '-webkit-linear-gradient':
        case '-o-linear-gradient':

          gradient = {
            type: 'linear',
            x0: null,
            y0: null,
            x1: null,
            y1: null,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/\w+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              switch(m2[i]) {
                case 'top':
                  gradient.y0 = 0;
                  gradient.y1 = bounds.height;
                  break;

                case 'right':
                  gradient.x0 = bounds.width;
                  gradient.x1 = 0;
                  break;

                case 'bottom':
                  gradient.y0 = bounds.height;
                  gradient.y1 = 0;
                  break;

                case 'left':
                  gradient.x0 = 0;
                  gradient.x1 = bounds.width;
                  break;
              }
            }
          }
          if(gradient.x0 === null && gradient.x1 === null){ // center
            gradient.x0 = gradient.x1 = bounds.width / 2;
          }
          if(gradient.y0 === null && gradient.y1 === null){ // center
            gradient.y0 = gradient.y1 = bounds.height / 2;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-gradient':

          gradient = {
            type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = (m2[3] * bounds.width) / 100;
            gradient.y1 = (m2[4] * bounds.height) / 100;
          }

          // get colors and stops
          m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
              stop = parseFloat(m3[2]);
              if(m3[1] === 'from') {
                stop = 0.0;
              }
              if(m3[1] === 'to') {
                stop = 1.0;
              }
              gradient.colorStops.push({
                color: m3[3],
                stop: stop
              });
            }
          }
          break;

        case '-moz-linear-gradient':

          gradient = {
            type: 'linear',
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

          // m2[1] == 0%   -> left
          // m2[1] == 50%  -> center
          // m2[1] == 100% -> right

          // m2[2] == 0%   -> top
          // m2[2] == 50%  -> center
          // m2[2] == 100% -> bottom

          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = bounds.width - gradient.x0;
            gradient.y1 = bounds.height - gradient.y0;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3]){ // percentage
                  stop /= 100;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-radial-gradient':
        case '-moz-radial-gradient':
        case '-o-radial-gradient':

          gradient = {
            type: 'circle',
            x0: 0,
            y0: 0,
            x1: bounds.width,
            y1: bounds.height,
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0,
            colorStops: []
          };

          // center
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.cx = (m2[1] * bounds.width) / 100;
            gradient.cy = (m2[2] * bounds.height) / 100;
          }

          // size
          m2 = m1[3].match(/\w+/);
          m3 = m1[4].match(/[a-z\-]*/);
          if(m2 && m3){
            switch(m3[0]){
              case 'farthest-corner':
              case 'cover': // is equivalent to farthest-corner
              case '': // mozilla removes "cover" from definition :(
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                break;
              case 'closest-corner':
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                break;
              case 'farthest-side':
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.max(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.max(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.max(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;
              case 'closest-side':
              case 'contain': // is equivalent to closest-side
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.min(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.min(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.min(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;

            // TODO: add support for "30px 40px" sizes (webkit only)
            }
          }

          // color stops
          m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;
      }
    }

    return gradient;
  };

  function addScrollStops(grad) {
    return function(colorStop) {
      try {
        grad.addColorStop(colorStop.stop, colorStop.color);
      }
      catch(e) {
        Util.log(['failed to add color stop: ', e, '; tried to add: ', colorStop]);
      }
    };
  }

  Generate.Gradient = function(src, bounds) {
    if(bounds.width === 0 || bounds.height === 0) {
      return;
    }

    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    gradient, grad;

    canvas.width = bounds.width;
    canvas.height = bounds.height;

    // TODO: add support for multi defined background gradients
    gradient = _html2canvas.Generate.parseGradient(src, bounds);

    if(gradient) {
      switch(gradient.type) {
        case 'linear':
          grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);
          gradient.colorStops.forEach(addScrollStops(grad));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
          break;

        case 'circle':
          grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);
          gradient.colorStops.forEach(addScrollStops(grad));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
          break;

        case 'ellipse':
          var canvasRadial = document.createElement('canvas'),
            ctxRadial = canvasRadial.getContext('2d'),
            ri = Math.max(gradient.rx, gradient.ry),
            di = ri * 2;

          canvasRadial.width = canvasRadial.height = di;

          grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);
          gradient.colorStops.forEach(addScrollStops(grad));

          ctxRadial.fillStyle = grad;
          ctxRadial.fillRect(0, 0, di, di);

          ctx.fillStyle = gradient.colorStops[gradient.colorStops.length - 1].color;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);
          break;
      }
    }

    return canvas;
  };

  Generate.ListAlpha = function(number) {
    var tmp = "",
    modulus;

    do {
      modulus = number % 26;
      tmp = String.fromCharCode((modulus) + 64) + tmp;
      number = number / 26;
    }while((number*26) > 26);

    return tmp;
  };

  Generate.ListRoman = function(number) {
    var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
    decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = "",
    v,
    len = romanArray.length;

    if (number <= 0 || number >= 4000) {
      return number;
    }

    for (v=0; v < len; v+=1) {
      while (number >= decimal[v]) {
        number -= decimal[v];
        roman += romanArray[v];
      }
    }

    return roman;
  };
})();
function h2cRenderContext(width, height) {
  var storage = [];
  return {
    storage: storage,
    width: width,
    height: height,
    clip: function() {
      storage.push({
        type: "function",
        name: "clip",
        'arguments': arguments
      });
    },
    translate: function() {
      storage.push({
        type: "function",
        name: "translate",
        'arguments': arguments
      });
    },
    fill: function() {
      storage.push({
        type: "function",
        name: "fill",
        'arguments': arguments
      });
    },
    save: function() {
      storage.push({
        type: "function",
        name: "save",
        'arguments': arguments
      });
    },
    restore: function() {
      storage.push({
        type: "function",
        name: "restore",
        'arguments': arguments
      });
    },
    fillRect: function () {
      storage.push({
        type: "function",
        name: "fillRect",
        'arguments': arguments
      });
    },
    createPattern: function() {
      storage.push({
        type: "function",
        name: "createPattern",
        'arguments': arguments
      });
    },
    drawShape: function() {

      var shape = [];

      storage.push({
        type: "function",
        name: "drawShape",
        'arguments': shape
      });

      return {
        moveTo: function() {
          shape.push({
            name: "moveTo",
            'arguments': arguments
          });
        },
        lineTo: function() {
          shape.push({
            name: "lineTo",
            'arguments': arguments
          });
        },
        arcTo: function() {
          shape.push({
            name: "arcTo",
            'arguments': arguments
          });
        },
        bezierCurveTo: function() {
          shape.push({
            name: "bezierCurveTo",
            'arguments': arguments
          });
        },
        quadraticCurveTo: function() {
          shape.push({
            name: "quadraticCurveTo",
            'arguments': arguments
          });
        }
      };

    },
    drawImage: function () {
      storage.push({
        type: "function",
        name: "drawImage",
        'arguments': arguments
      });
    },
    fillText: function () {
      storage.push({
        type: "function",
        name: "fillText",
        'arguments': arguments
      });
    },
    setVariable: function (variable, value) {
      storage.push({
        type: "variable",
        name: variable,
        'arguments': value
      });
      return value;
    }
  };
}
_html2canvas.Parse = function (images, options) {
  window.scroll(0,0);

  var element = (( options.elements === undefined ) ? document.body : options.elements[0]), // select body by default
  numDraws = 0,
  doc = element.ownerDocument,
  Util = _html2canvas.Util,
  support = Util.Support(options, doc),
  ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
  body = doc.body,
  getCSS = Util.getCSS,
  pseudoHide = "___html2canvas___pseudoelement",
  hidePseudoElements = doc.createElement('style');

  hidePseudoElements.innerHTML = '.' + pseudoHide + '-before:before { content: "" !important; display: none !important; }' +
  '.' + pseudoHide + '-after:after { content: "" !important; display: none !important; }';

  body.appendChild(hidePseudoElements);

  images = images || {};

  function documentWidth () {
    return Math.max(
      Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
      Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
      Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
      );
  }

  function documentHeight () {
    return Math.max(
      Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
      Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
      Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      );
  }

  function getCSSInt(element, attribute) {
    var val = parseInt(getCSS(element, attribute), 10);
    return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
  }

  function renderRect (ctx, x, y, w, h, bgcolor) {
    if (bgcolor !== "transparent"){
      ctx.setVariable("fillStyle", bgcolor);
      ctx.fillRect(x, y, w, h);
      numDraws+=1;
    }
  }

  function capitalize(m, p1, p2) {
    if (m.length > 0) {
      return p1 + p2.toUpperCase();
    }
  }

  function textTransform (text, transform) {
    switch(transform){
      case "lowercase":
        return text.toLowerCase();
      case "capitalize":
        return text.replace( /(^|\s|:|-|\(|\))([a-z])/g, capitalize);
      case "uppercase":
        return text.toUpperCase();
      default:
        return text;
    }
  }

  function noLetterSpacing(letter_spacing) {
    return (/^(normal|none|0px)$/.test(letter_spacing));
  }

  function drawText(currentText, x, y, ctx){
    if (currentText !== null && Util.trimText(currentText).length > 0) {
      ctx.fillText(currentText, x, y);
      numDraws+=1;
    }
  }

  function setTextVariables(ctx, el, text_decoration, color) {
    var align = false,
    bold = getCSS(el, "fontWeight"),
    family = getCSS(el, "fontFamily"),
    size = getCSS(el, "fontSize"),
    shadows = Util.parseTextShadows(getCSS(el, "textShadow"));

    switch(parseInt(bold, 10)){
      case 401:
        bold = "bold";
        break;
      case 400:
        bold = "normal";
        break;
    }

    ctx.setVariable("fillStyle", color);
    ctx.setVariable("font", [getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family].join(" "));
    ctx.setVariable("textAlign", (align) ? "right" : "left");

    if (shadows.length) {
      // TODO: support multiple text shadows
      // apply the first text shadow
      ctx.setVariable("shadowColor", shadows[0].color);
      ctx.setVariable("shadowOffsetX", shadows[0].offsetX);
      ctx.setVariable("shadowOffsetY", shadows[0].offsetY);
      ctx.setVariable("shadowBlur", shadows[0].blur);
    }

    if (text_decoration !== "none"){
      return Util.Font(family, size, doc);
    }
  }

  function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
    switch(text_decoration) {
      case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
        break;
      case "overline":
        renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
        break;
      case "line-through":
        // TODO try and find exact position for line-through
        renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
        break;
    }
  }

  function getTextBounds(state, text, textDecoration, isLast, transform) {
    var bounds;
    if (support.rangeBounds && !transform) {
      if (textDecoration !== "none" || Util.trimText(text).length !== 0) {
        bounds = textRangeBounds(text, state.node, state.textOffset);
      }
      state.textOffset += text.length;
    } else if (state.node && typeof state.node.nodeValue === "string" ){
      var newTextNode = (isLast) ? state.node.splitText(text.length) : null;
      bounds = textWrapperBounds(state.node, transform);
      state.node = newTextNode;
    }
    return bounds;
  }

  function textRangeBounds(text, textNode, textOffset) {
    var range = doc.createRange();
    range.setStart(textNode, textOffset);
    range.setEnd(textNode, textOffset + text.length);
    return range.getBoundingClientRect();
  }

  function textWrapperBounds(oldTextNode, transform) {
    var parent = oldTextNode.parentNode,
    wrapElement = doc.createElement('wrapper'),
    backupText = oldTextNode.cloneNode(true);

    wrapElement.appendChild(oldTextNode.cloneNode(true));
    parent.replaceChild(wrapElement, oldTextNode);

    var bounds = transform ? Util.OffsetBounds(wrapElement) : Util.Bounds(wrapElement);
    parent.replaceChild(backupText, wrapElement);
    return bounds;
  }

  function renderText(el, textNode, stack) {
    var ctx = stack.ctx,
    color = getCSS(el, "color"),
    textDecoration = getCSS(el, "textDecoration"),
    textAlign = getCSS(el, "textAlign"),
    metrics,
    textList,
    state = {
      node: textNode,
      textOffset: 0
    };

    if (Util.trimText(textNode.nodeValue).length > 0) {
      textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
      textAlign = textAlign.replace(["-webkit-auto"],["auto"]);

      textList = (!options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing"))) ?
      textNode.nodeValue.split(/(\b| )/)
      : textNode.nodeValue.split("");

      metrics = setTextVariables(ctx, el, textDecoration, color);

      if (options.chinese) {
        textList.forEach(function(word, index) {
          if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
            word = word.split("");
            word.unshift(index, 1);
            textList.splice.apply(textList, word);
          }
        });
      }

      textList.forEach(function(text, index) {
        var bounds = getTextBounds(state, text, textDecoration, (index < textList.length - 1), stack.transform.matrix);
        if (bounds) {
          drawText(text, bounds.left, bounds.bottom, ctx);
          renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
        }
      });
    }
  }

  function listPosition (element, val) {
    var boundElement = doc.createElement( "boundelement" ),
    originalType,
    bounds;

    boundElement.style.display = "inline";

    originalType = element.style.listStyleType;
    element.style.listStyleType = "none";

    boundElement.appendChild(doc.createTextNode(val));

    element.insertBefore(boundElement, element.firstChild);

    bounds = Util.Bounds(boundElement);
    element.removeChild(boundElement);
    element.style.listStyleType = originalType;
    return bounds;
  }

  function elementIndex(el) {
    var i = -1,
    count = 1,
    childs = el.parentNode.childNodes;

    if (el.parentNode) {
      while(childs[++i] !== el) {
        if (childs[i].nodeType === 1) {
          count++;
        }
      }
      return count;
    } else {
      return -1;
    }
  }

  function listItemText(element, type) {
    var currentIndex = elementIndex(element), text;
    switch(type){
      case "decimal":
        text = currentIndex;
        break;
      case "decimal-leading-zero":
        text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
        break;
      case "upper-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex );
        break;
      case "lower-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex ).toLowerCase();
        break;
      case "lower-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex ).toLowerCase();
        break;
      case "upper-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex );
        break;
    }

    return text + ". ";
  }

  function renderListItem(element, stack, elBounds) {
    var x,
    text,
    ctx = stack.ctx,
    type = getCSS(element, "listStyleType"),
    listBounds;

    if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
      text = listItemText(element, type);
      listBounds = listPosition(element, text);
      setTextVariables(ctx, element, "none", getCSS(element, "color"));

      if (getCSS(element, "listStylePosition") === "inside") {
        ctx.setVariable("textAlign", "left");
        x = elBounds.left;
      } else {
        return;
      }

      drawText(text, x, listBounds.bottom, ctx);
    }
  }

  function loadImage (src){
    var img = images[src];
    return (img && img.succeeded === true) ? img.img : false;
  }

  function clipBounds(src, dst){
    var x = Math.max(src.left, dst.left),
    y = Math.max(src.top, dst.top),
    x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
    y2 = Math.min((src.top + src.height), (dst.top + dst.height));

    return {
      left:x,
      top:y,
      width:x2-x,
      height:y2-y
    };
  }

  function setZ(element, stack, parentStack){
    var newContext,
    isPositioned = stack.cssPosition !== 'static',
    zIndex = isPositioned ? getCSS(element, 'zIndex') : 'auto',
    opacity = getCSS(element, 'opacity'),
    isFloated = getCSS(element, 'cssFloat') !== 'none';

    // https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
    // When a new stacking context should be created:
    // the root element (HTML),
    // positioned (absolutely or relatively) with a z-index value other than "auto",
    // elements with an opacity value less than 1. (See the specification for opacity),
    // on mobile WebKit and Chrome 22+, position: fixed always creates a new stacking context, even when z-index is "auto" (See this post)

    stack.zIndex = newContext = h2czContext(zIndex);
    newContext.isPositioned = isPositioned;
    newContext.isFloated = isFloated;
    newContext.opacity = opacity;
    newContext.ownStacking = (zIndex !== 'auto' || opacity < 1);

    if (parentStack) {
      parentStack.zIndex.children.push(stack);
    }
  }

  function renderImage(ctx, element, image, bounds, borders) {

    var paddingLeft = getCSSInt(element, 'paddingLeft'),
    paddingTop = getCSSInt(element, 'paddingTop'),
    paddingRight = getCSSInt(element, 'paddingRight'),
    paddingBottom = getCSSInt(element, 'paddingBottom');

    drawImage(
      ctx,
      image,
      0, //sx
      0, //sy
      image.width, //sw
      image.height, //sh
      bounds.left + paddingLeft + borders[3].width, //dx
      bounds.top + paddingTop + borders[0].width, // dy
      bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
      bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
      );
  }

  function getBorderData(element) {
    return ["Top", "Right", "Bottom", "Left"].map(function(side) {
      return {
        width: getCSSInt(element, 'border' + side + 'Width'),
        color: getCSS(element, 'border' + side + 'Color')
      };
    });
  }

  function getBorderRadiusData(element) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
      return getCSS(element, 'border' + side + 'Radius');
    });
  }

  var getCurvePoints = (function(kappa) {

    return function(x, y, r1, r2) {
      var ox = (r1) * kappa, // control point offset horizontal
      oy = (r2) * kappa, // control point offset vertical
      xm = x + r1, // x-middle
      ym = y + r2; // y-middle
      return {
        topLeft: bezierCurve({
          x:x,
          y:ym
        }, {
          x:x,
          y:ym - oy
        }, {
          x:xm - ox,
          y:y
        }, {
          x:xm,
          y:y
        }),
        topRight: bezierCurve({
          x:x,
          y:y
        }, {
          x:x + ox,
          y:y
        }, {
          x:xm,
          y:ym - oy
        }, {
          x:xm,
          y:ym
        }),
        bottomRight: bezierCurve({
          x:xm,
          y:y
        }, {
          x:xm,
          y:y + oy
        }, {
          x:x + ox,
          y:ym
        }, {
          x:x,
          y:ym
        }),
        bottomLeft: bezierCurve({
          x:xm,
          y:ym
        }, {
          x:xm - ox,
          y:ym
        }, {
          x:x,
          y:y + oy
        }, {
          x:x,
          y:y
        })
      };
    };
  })(4 * ((Math.sqrt(2) - 1) / 3));

  function bezierCurve(start, startControl, endControl, end) {

    var lerp = function (a, b, t) {
      return {
        x:a.x + (b.x - a.x) * t,
        y:a.y + (b.y - a.y) * t
      };
    };

    return {
      start: start,
      startControl: startControl,
      endControl: endControl,
      end: end,
      subdivide: function(t) {
        var ab = lerp(start, startControl, t),
        bc = lerp(startControl, endControl, t),
        cd = lerp(endControl, end, t),
        abbc = lerp(ab, bc, t),
        bccd = lerp(bc, cd, t),
        dest = lerp(abbc, bccd, t);
        return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
      },
      curveTo: function(borderArgs) {
        borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
      },
      curveToReversed: function(borderArgs) {
        borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
      }
    };
  }

  function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
      corner1[0].curveTo(borderArgs);
      corner1[1].curveTo(borderArgs);
    } else {
      borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
  }

  function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
      outer1[1].curveTo(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
      outer2[0].curveTo(borderArgs);
      borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
      inner2[0].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c2[0], borderData.c2[1]]);
      borderArgs.push([ "line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
      inner1[1].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
  }

  function calculateCurvePoints(bounds, borderRadius, borders) {

    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,

    tlh = borderRadius[0][0],
    tlv = borderRadius[0][1],
    trh = borderRadius[1][0],
    trv = borderRadius[1][1],
    brh = borderRadius[2][0],
    brv = borderRadius[2][1],
    blh = borderRadius[3][0],
    blv = borderRadius[3][1],

    topWidth = width - trh,
    rightHeight = height - brv,
    bottomWidth = width - brh,
    leftHeight = height - blv;

    return {
      topLeftOuter: getCurvePoints(
        x,
        y,
        tlh,
        tlv
        ).topLeft.subdivide(0.5),

      topLeftInner: getCurvePoints(
        x + borders[3].width,
        y + borders[0].width,
        Math.max(0, tlh - borders[3].width),
        Math.max(0, tlv - borders[0].width)
        ).topLeft.subdivide(0.5),

      topRightOuter: getCurvePoints(
        x + topWidth,
        y,
        trh,
        trv
        ).topRight.subdivide(0.5),

      topRightInner: getCurvePoints(
        x + Math.min(topWidth, width + borders[3].width),
        y + borders[0].width,
        (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width,
        trv - borders[0].width
        ).topRight.subdivide(0.5),

      bottomRightOuter: getCurvePoints(
        x + bottomWidth,
        y + rightHeight,
        brh,
        brv
        ).bottomRight.subdivide(0.5),

      bottomRightInner: getCurvePoints(
        x + Math.min(bottomWidth, width + borders[3].width),
        y + Math.min(rightHeight, height + borders[0].width),
        Math.max(0, brh - borders[1].width),
        Math.max(0, brv - borders[2].width)
        ).bottomRight.subdivide(0.5),

      bottomLeftOuter: getCurvePoints(
        x,
        y + leftHeight,
        blh,
        blv
        ).bottomLeft.subdivide(0.5),

      bottomLeftInner: getCurvePoints(
        x + borders[3].width,
        y + leftHeight,
        Math.max(0, blh - borders[3].width),
        Math.max(0, blv - borders[2].width)
        ).bottomLeft.subdivide(0.5)
    };
  }

  function getBorderClip(element, borderPoints, borders, radius, bounds) {
    var backgroundClip = getCSS(element, 'backgroundClip'),
    borderArgs = [];

    switch(backgroundClip) {
      case "content-box":
      case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

      default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
  }

  function parseBorders(element, bounds, borders){
    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,
    borderSide,
    bx,
    by,
    bw,
    bh,
    borderArgs,
    // http://www.w3.org/TR/css3-background/#the-border-radius
    borderRadius = getBorderRadiusData(element),
    borderPoints = calculateCurvePoints(bounds, borderRadius, borders),
    borderData = {
      clip: getBorderClip(element, borderPoints, borders, borderRadius, bounds),
      borders: []
    };

    for (borderSide = 0; borderSide < 4; borderSide++) {

      if (borders[borderSide].width > 0) {
        bx = x;
        by = y;
        bw = width;
        bh = height - (borders[2].width);

        switch(borderSide) {
          case 0:
            // top border
            bh = borders[0].width;

            borderArgs = drawSide({
              c1: [bx, by],
              c2: [bx + bw, by],
              c3: [bx + bw - borders[1].width, by + bh],
              c4: [bx + borders[3].width, by + bh]
            }, borderRadius[0], borderRadius[1],
            borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
            break;
          case 1:
            // right border
            bx = x + width - (borders[1].width);
            bw = borders[1].width;

            borderArgs = drawSide({
              c1: [bx + bw, by],
              c2: [bx + bw, by + bh + borders[2].width],
              c3: [bx, by + bh],
              c4: [bx, by + borders[0].width]
            }, borderRadius[1], borderRadius[2],
            borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
            break;
          case 2:
            // bottom border
            by = (by + height) - (borders[2].width);
            bh = borders[2].width;

            borderArgs = drawSide({
              c1: [bx + bw, by + bh],
              c2: [bx, by + bh],
              c3: [bx + borders[3].width, by],
              c4: [bx + bw - borders[3].width, by]
            }, borderRadius[2], borderRadius[3],
            borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
            break;
          case 3:
            // left border
            bw = borders[3].width;

            borderArgs = drawSide({
              c1: [bx, by + bh + borders[2].width],
              c2: [bx, by],
              c3: [bx + bw, by + borders[0].width],
              c4: [bx + bw, by + bh]
            }, borderRadius[3], borderRadius[0],
            borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
            break;
        }

        borderData.borders.push({
          args: borderArgs,
          color: borders[borderSide].color
        });

      }
    }

    return borderData;
  }

  function createShape(ctx, args) {
    var shape = ctx.drawShape();
    args.forEach(function(border, index) {
      shape[(index === 0) ? "moveTo" : border[0] + "To" ].apply(null, border.slice(1));
    });
    return shape;
  }

  function renderBorders(ctx, borderArgs, color) {
    if (color !== "transparent") {
      ctx.setVariable( "fillStyle", color);
      createShape(ctx, borderArgs);
      ctx.fill();
      numDraws+=1;
    }
  }

  function renderFormValue (el, bounds, stack){

    var valueWrap = doc.createElement('valuewrap'),
    cssPropertyArray = ['lineHeight','textAlign','fontFamily','color','fontSize','paddingLeft','paddingTop','width','height','border','borderLeftWidth','borderTopWidth'],
    textValue,
    textNode;

    cssPropertyArray.forEach(function(property) {
      try {
        valueWrap.style[property] = getCSS(el, property);
      } catch(e) {
        // Older IE has issues with "border"
        Util.log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
      }
    });

    valueWrap.style.borderColor = "black";
    valueWrap.style.borderStyle = "solid";
    valueWrap.style.display = "block";
    valueWrap.style.position = "absolute";

    if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT"){
      valueWrap.style.lineHeight = getCSS(el, "height");
    }

    valueWrap.style.top = bounds.top + "px";
    valueWrap.style.left = bounds.left + "px";

    textValue = (el.nodeName === "SELECT") ? (el.options[el.selectedIndex] || 0).text : el.value;
    if(!textValue) {
      textValue = el.placeholder;
    }

    textNode = doc.createTextNode(textValue);

    valueWrap.appendChild(textNode);
    body.appendChild(valueWrap);

    renderText(el, textNode, stack);
    body.removeChild(valueWrap);
  }

  function drawImage (ctx) {
    ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
    numDraws+=1;
  }

  function getPseudoElement(el, which) {
    var elStyle = window.getComputedStyle(el, which);
    if(!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content" || elStyle.display === "none") {
      return;
    }
    var content = elStyle.content + '',
    first = content.substr( 0, 1 );
    //strips quotes
    if(first === content.substr( content.length - 1 ) && first.match(/'|"/)) {
      content = content.substr( 1, content.length - 2 );
    }

    var isImage = content.substr( 0, 3 ) === 'url',
    elps = document.createElement( isImage ? 'img' : 'span' );

    elps.className = pseudoHide + "-before " + pseudoHide + "-after";

    Object.keys(elStyle).filter(indexedProperty).forEach(function(prop) {
      // Prevent assigning of read only CSS Rules, ex. length, parentRule
      try {
        elps.style[prop] = elStyle[prop];
      } catch (e) {
        Util.log(['Tried to assign readonly property ', prop, 'Error:', e]);
      }
    });

    if(isImage) {
      elps.src = Util.parseBackgroundImage(content)[0].args[0];
    } else {
      elps.innerHTML = content;
    }
    return elps;
  }

  function indexedProperty(property) {
    return (isNaN(window.parseInt(property, 10)));
  }

  function injectPseudoElements(el, stack) {
    var before = getPseudoElement(el, ':before'),
    after = getPseudoElement(el, ':after');
    if(!before && !after) {
      return;
    }

    if(before) {
      el.className += " " + pseudoHide + "-before";
      el.parentNode.insertBefore(before, el);
      parseElement(before, stack, true);
      el.parentNode.removeChild(before);
      el.className = el.className.replace(pseudoHide + "-before", "").trim();
    }

    if (after) {
      el.className += " " + pseudoHide + "-after";
      el.appendChild(after);
      parseElement(after, stack, true);
      el.removeChild(after);
      el.className = el.className.replace(pseudoHide + "-after", "").trim();
    }

  }

  function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left),
    offsetY = Math.round(bounds.top + backgroundPosition.top);

    ctx.createPattern(image);
    ctx.translate(offsetX, offsetY);
    ctx.fill();
    ctx.translate(-offsetX, -offsetY);
  }

  function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
    var args = [];
    args.push(["line", Math.round(left), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(height + top)]);
    args.push(["line", Math.round(left), Math.round(height + top)]);
    createShape(ctx, args);
    ctx.save();
    ctx.clip();
    renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
    ctx.restore();
  }

  function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
    renderRect(
      ctx,
      backgroundBounds.left,
      backgroundBounds.top,
      backgroundBounds.width,
      backgroundBounds.height,
      bgcolor
      );
  }

  function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
    var backgroundSize = Util.BackgroundSize(el, bounds, image, imageIndex),
    backgroundPosition = Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize),
    backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(Util.trimText);

    image = resizeImage(image, backgroundSize);

    backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];

    switch (backgroundRepeat) {
      case "repeat-x":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
        break;

      case "repeat-y":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
        break;

      case "no-repeat":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
        break;

      default:
        renderBackgroundRepeat(ctx, image, backgroundPosition, {
          top: bounds.top,
          left: bounds.left,
          width: image.width,
          height: image.height
        });
        break;
    }
  }

  function renderBackgroundImage(element, bounds, ctx) {
    var backgroundImage = getCSS(element, "backgroundImage"),
    backgroundImages = Util.parseBackgroundImage(backgroundImage),
    image,
    imageIndex = backgroundImages.length;

    while(imageIndex--) {
      backgroundImage = backgroundImages[imageIndex];

      if (!backgroundImage.args || backgroundImage.args.length === 0) {
        continue;
      }

      var key = backgroundImage.method === 'url' ?
      backgroundImage.args[0] :
      backgroundImage.value;

      image = loadImage(key);

      // TODO add support for background-origin
      if (image) {
        renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
      } else {
        Util.log("html2canvas: Error loading background:", backgroundImage);
      }
    }
  }

  function resizeImage(image, bounds) {
    if(image.width === bounds.width && image.height === bounds.height) {
      return image;
    }

    var ctx, canvas = doc.createElement('canvas');
    canvas.width = bounds.width;
    canvas.height = bounds.height;
    ctx = canvas.getContext("2d");
    drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height );
    return canvas;
  }

  function setOpacity(ctx, element, parentStack) {
    return ctx.setVariable("globalAlpha", getCSS(element, "opacity") * ((parentStack) ? parentStack.opacity : 1));
  }

  function removePx(str) {
    return str.replace("px", "");
  }

  var transformRegExp = /(matrix)\((.+)\)/;

  function getTransform(element, parentStack) {
    var transform = getCSS(element, "transform") || getCSS(element, "-webkit-transform") || getCSS(element, "-moz-transform") || getCSS(element, "-ms-transform") || getCSS(element, "-o-transform");
    var transformOrigin = getCSS(element, "transform-origin") || getCSS(element, "-webkit-transform-origin") || getCSS(element, "-moz-transform-origin") || getCSS(element, "-ms-transform-origin") || getCSS(element, "-o-transform-origin") || "0px 0px";

    transformOrigin = transformOrigin.split(" ").map(removePx).map(Util.asFloat);

    var matrix;
    if (transform && transform !== "none") {
      var match = transform.match(transformRegExp);
      if (match) {
        switch(match[1]) {
          case "matrix":
            matrix = match[2].split(",").map(Util.trimText).map(Util.asFloat);
            break;
        }
      }
    }

    return {
      origin: transformOrigin,
      matrix: matrix
    };
  }

  function createStack(element, parentStack, bounds, transform) {
    var ctx = h2cRenderContext((!parentStack) ? documentWidth() : bounds.width , (!parentStack) ? documentHeight() : bounds.height),
    stack = {
      ctx: ctx,
      opacity: setOpacity(ctx, element, parentStack),
      cssPosition: getCSS(element, "position"),
      borders: getBorderData(element),
      transform: transform,
      clip: (parentStack && parentStack.clip) ? Util.Extend( {}, parentStack.clip ) : null
    };

    setZ(element, stack, parentStack);

    // TODO correct overflow for absolute content residing under a static position
    if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false){
      stack.clip = (stack.clip) ? clipBounds(stack.clip, bounds) : bounds;
    }

    return stack;
  }

  function getBackgroundBounds(borders, bounds, clip) {
    var backgroundBounds = {
      left: bounds.left + borders[3].width,
      top: bounds.top + borders[0].width,
      width: bounds.width - (borders[1].width + borders[3].width),
      height: bounds.height - (borders[0].width + borders[2].width)
    };

    if (clip) {
      backgroundBounds = clipBounds(backgroundBounds, clip);
    }

    return backgroundBounds;
  }

  function getBounds(element, transform) {
    var bounds = (transform.matrix) ? Util.OffsetBounds(element) : Util.Bounds(element);
    transform.origin[0] += bounds.left;
    transform.origin[1] += bounds.top;
    return bounds;
  }

  function renderElement(element, parentStack, pseudoElement, ignoreBackground) {
    var transform = getTransform(element, parentStack),
    bounds = getBounds(element, transform),
    image,
    stack = createStack(element, parentStack, bounds, transform),
    borders = stack.borders,
    ctx = stack.ctx,
    backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip),
    borderData = parseBorders(element, bounds, borders),
    backgroundColor = (ignoreElementsRegExp.test(element.nodeName)) ? "#efefef" : getCSS(element, "backgroundColor");


    createShape(ctx, borderData.clip);

    ctx.save();
    ctx.clip();

    if (backgroundBounds.height > 0 && backgroundBounds.width > 0 && !ignoreBackground) {
      renderBackgroundColor(ctx, bounds, backgroundColor);
      renderBackgroundImage(element, backgroundBounds, ctx);
    } else if (ignoreBackground) {
      stack.backgroundColor =  backgroundColor;
    }

    ctx.restore();

    borderData.borders.forEach(function(border) {
      renderBorders(ctx, border.args, border.color);
    });

    if (!pseudoElement) {
      injectPseudoElements(element, stack);
    }

    switch(element.nodeName){
      case "IMG":
        if ((image = loadImage(element.getAttribute('src')))) {
          renderImage(ctx, element, image, bounds, borders);
        } else {
          Util.log("html2canvas: Error loading <img>:" + element.getAttribute('src'));
        }
        break;
      case "INPUT":
        // TODO add all relevant type's, i.e. HTML5 new stuff
        // todo add support for placeholder attribute for browsers which support it
        if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "TEXTAREA":
        if ((element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "SELECT":
        if ((element.options||element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "LI":
        renderListItem(element, stack, backgroundBounds);
        break;
      case "CANVAS":
        renderImage(ctx, element, element, bounds, borders);
        break;
    }

    return stack;
  }

  function isElementVisible(element) {
    return (getCSS(element, 'display') !== "none" && getCSS(element, 'visibility') !== "hidden" && !element.hasAttribute("data-html2canvas-ignore"));
  }

  function parseElement (element, stack, pseudoElement) {
    if (isElementVisible(element)) {
      stack = renderElement(element, stack, pseudoElement, false) || stack;
      if (!ignoreElementsRegExp.test(element.nodeName)) {
        parseChildren(element, stack, pseudoElement);
      }
    }
  }

  function parseChildren(element, stack, pseudoElement) {
    Util.Children(element).forEach(function(node) {
      if (node.nodeType === node.ELEMENT_NODE) {
        parseElement(node, stack, pseudoElement);
      } else if (node.nodeType === node.TEXT_NODE) {
        renderText(element, node, stack);
      }
    });
  }

  function init() {
    var background = getCSS(document.documentElement, "backgroundColor"),
      transparentBackground = (Util.isTransparent(background) && element === document.body),
      stack = renderElement(element, null, false, transparentBackground);
    parseChildren(element, stack);

    if (transparentBackground) {
      background = stack.backgroundColor;
    }

    body.removeChild(hidePseudoElements);
    return {
      backgroundColor: background,
      stack: stack
    };
  }

  return init();
};

function h2czContext(zindex) {
  return {
    zindex: zindex,
    children: []
  };
}

_html2canvas.Preload = function( options ) {

  var images = {
    numLoaded: 0,   // also failed are counted here
    numFailed: 0,
    numTotal: 0,
    cleanupDone: false
  },
  pageOrigin,
  Util = _html2canvas.Util,
  methods,
  i,
  count = 0,
  element = options.elements[0] || document.body,
  doc = element.ownerDocument,
  domImages = element.getElementsByTagName('img'), // Fetch images of the present element only
  imgLen = domImages.length,
  link = doc.createElement("a"),
  supportCORS = (function( img ){
    return (img.crossOrigin !== undefined);
  })(new Image()),
  timeoutTimer;

  link.href = window.location.href;
  pageOrigin  = link.protocol + link.host;

  function isSameOrigin(url){
    link.href = url;
    link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
    var origin = link.protocol + link.host;
    return (origin === pageOrigin);
  }

  function start(){
    Util.log("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
    if (!images.firstRun && images.numLoaded >= images.numTotal){
      Util.log("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

      if (typeof options.complete === "function"){
        options.complete(images);
      }

    }
  }

  // TODO modify proxy to serve images with CORS enabled, where available
  function proxyGetImage(url, img, imageObj){
    var callback_name,
    scriptUrl = options.proxy,
    script;

    link.href = url;
    url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

    callback_name = 'html2canvas_' + (count++);
    imageObj.callbackname = callback_name;

    if (scriptUrl.indexOf("?") > -1) {
      scriptUrl += "&";
    } else {
      scriptUrl += "?";
    }
    scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
    script = doc.createElement("script");

    window[callback_name] = function(a){
      if (a.substring(0,6) === "error:"){
        imageObj.succeeded = false;
        images.numLoaded++;
        images.numFailed++;
        start();
      } else {
        setImageLoadHandlers(img, imageObj);
        img.src = a;
      }
      window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
      try {
        delete window[callback_name];  // for all browser that support this
      } catch(ex) {}
      script.parentNode.removeChild(script);
      script = null;
      delete imageObj.script;
      delete imageObj.callbackname;
    };

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    imageObj.script = script;
    window.document.body.appendChild(script);

  }

  function loadPseudoElement(element, type) {
    var style = window.getComputedStyle(element, type),
    content = style.content;
    if (content.substr(0, 3) === 'url') {
      methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
    }
    loadBackgroundImages(style.backgroundImage, element);
  }

  function loadPseudoElementImages(element) {
    loadPseudoElement(element, ":before");
    loadPseudoElement(element, ":after");
  }

  function loadGradientImage(backgroundImage, bounds) {
    var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);

    if (img !== undefined){
      images[backgroundImage] = {
        img: img,
        succeeded: true
      };
      images.numTotal++;
      images.numLoaded++;
      start();
    }
  }

  function invalidBackgrounds(background_image) {
    return (background_image && background_image.method && background_image.args && background_image.args.length > 0 );
  }

  function loadBackgroundImages(background_image, el) {
    var bounds;

    _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function(background_image) {
      if (background_image.method === 'url') {
        methods.loadImage(background_image.args[0]);
      } else if(background_image.method.match(/\-?gradient$/)) {
        if(bounds === undefined) {
          bounds = _html2canvas.Util.Bounds(el);
        }
        loadGradientImage(background_image.value, bounds);
      }
    });
  }

  function getImages (el) {
    var elNodeType = false;

    // Firefox fails with permission denied on pages with iframes
    try {
      Util.Children(el).forEach(getImages);
    }
    catch( e ) {}

    try {
      elNodeType = el.nodeType;
    } catch (ex) {
      elNodeType = false;
      Util.log("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
    }

    if (elNodeType === 1 || elNodeType === undefined) {
      loadPseudoElementImages(el);
      try {
        loadBackgroundImages(Util.getCSS(el, 'backgroundImage'), el);
      } catch(e) {
        Util.log("html2canvas: failed to get background-image - Exception: " + e.message);
      }
      loadBackgroundImages(el);
    }
  }

  function setImageLoadHandlers(img, imageObj) {
    img.onload = function() {
      if ( imageObj.timer !== undefined ) {
        // CORS succeeded
        window.clearTimeout( imageObj.timer );
      }

      images.numLoaded++;
      imageObj.succeeded = true;
      img.onerror = img.onload = null;
      start();
    };
    img.onerror = function() {
      if (img.crossOrigin === "anonymous") {
        // CORS failed
        window.clearTimeout( imageObj.timer );

        // let's try with proxy instead
        if ( options.proxy ) {
          var src = img.src;
          img = new Image();
          imageObj.img = img;
          img.src = src;

          proxyGetImage( img.src, img, imageObj );
          return;
        }
      }

      images.numLoaded++;
      images.numFailed++;
      imageObj.succeeded = false;
      img.onerror = img.onload = null;
      start();
    };
  }

  methods = {
    loadImage: function( src ) {
      var img, imageObj;
      if ( src && images[src] === undefined ) {
        img = new Image();
        if ( src.match(/data:image\/.*;base64,/i) ) {
          img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
        } else if ( isSameOrigin( src ) || options.allowTaint ===  true ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( supportCORS && !options.allowTaint && options.useCORS ) {
          // attempt to load with CORS

          img.crossOrigin = "anonymous";
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( options.proxy ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          proxyGetImage( src, img, imageObj );
        }
      }

    },
    cleanupDOM: function(cause) {
      var img, src;
      if (!images.cleanupDone) {
        if (cause && typeof cause === "string") {
          Util.log("html2canvas: Cleanup because: " + cause);
        } else {
          Util.log("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
        }

        for (src in images) {
          if (images.hasOwnProperty(src)) {
            img = images[src];
            if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
              // cancel proxy image request
              window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
              try {
                delete window[img.callbackname];  // for all browser that support this
              } catch(ex) {}
              if (img.script && img.script.parentNode) {
                img.script.setAttribute("src", "about:blank");  // try to cancel running request
                img.script.parentNode.removeChild(img.script);
              }
              images.numLoaded++;
              images.numFailed++;
              Util.log("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
            }
          }
        }

        // cancel any pending requests
        if(window.stop !== undefined) {
          window.stop();
        } else if(document.execCommand !== undefined) {
          document.execCommand("Stop", false);
        }
        if (document.close !== undefined) {
          document.close();
        }
        images.cleanupDone = true;
        if (!(cause && typeof cause === "string")) {
          start();
        }
      }
    },

    renderingDone: function() {
      if (timeoutTimer) {
        window.clearTimeout(timeoutTimer);
      }
    }
  };

  if (options.timeout > 0) {
    timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
  }

  Util.log('html2canvas: Preload starts: finding background-images');
  images.firstRun = true;

  getImages(element);

  Util.log('html2canvas: Preload: Finding images');
  // load <img> images
  for (i = 0; i < imgLen; i+=1){
    methods.loadImage( domImages[i].getAttribute( "src" ) );
  }

  images.firstRun = false;
  Util.log('html2canvas: Preload: Done.');
  if (images.numTotal === images.numLoaded) {
    start();
  }

  return methods;
};

_html2canvas.Renderer = function(parseQueue, options){

  // http://www.w3.org/TR/CSS21/zindex.html
  function createRenderQueue(parseQueue) {
    var queue = [],
    rootContext;

    rootContext = (function buildStackingContext(rootNode) {
      var rootContext = {};
      function insert(context, node, specialParent) {
        var zi = (node.zIndex.zindex === 'auto') ? 0 : Number(node.zIndex.zindex),
        contextForChildren = context, // the stacking context for children
        isPositioned = node.zIndex.isPositioned,
        isFloated = node.zIndex.isFloated,
        stub = {node: node},
        childrenDest = specialParent; // where children without z-index should be pushed into

        if (node.zIndex.ownStacking) {
          // '!' comes before numbers in sorted array
          contextForChildren = stub.context = { '!': [{node:node, children: []}]};
          childrenDest = undefined;
        } else if (isPositioned || isFloated) {
          childrenDest = stub.children = [];
        }

        if (zi === 0 && specialParent) {
          specialParent.push(stub);
        } else {
          if (!context[zi]) { context[zi] = []; }
          context[zi].push(stub);
        }

        node.zIndex.children.forEach(function(childNode) {
          insert(contextForChildren, childNode, childrenDest);
        });
      }
      insert(rootContext, rootNode);
      return rootContext;
    })(parseQueue);

    function sortZ(context) {
      Object.keys(context).sort().forEach(function(zi) {
        var nonPositioned = [],
        floated = [],
        positioned = [],
        list = [];

        // positioned after static
        context[zi].forEach(function(v) {
          if (v.node.zIndex.isPositioned || v.node.zIndex.opacity < 1) {
            // http://www.w3.org/TR/css3-color/#transparency
            // non-positioned element with opactiy < 1 should be stacked as if it were a positioned element with ‘z-index: 0’ and ‘opacity: 1’.
            positioned.push(v);
          } else if (v.node.zIndex.isFloated) {
            floated.push(v);
          } else {
            nonPositioned.push(v);
          }
        });

        (function walk(arr) {
          arr.forEach(function(v) {
            list.push(v);
            if (v.children) { walk(v.children); }
          });
        })(nonPositioned.concat(floated, positioned));

        list.forEach(function(v) {
          if (v.context) {
            sortZ(v.context);
          } else {
            queue.push(v.node);
          }
        });
      });
    }

    sortZ(rootContext);

    return queue;
  }

  function getRenderer(rendererName) {
    var renderer;

    if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
      renderer = _html2canvas.Renderer[rendererName](options);
    } else if (typeof rendererName === "function") {
      renderer = rendererName(options);
    } else {
      throw new Error("Unknown renderer");
    }

    if ( typeof renderer !== "function" ) {
      throw new Error("Invalid renderer defined");
    }
    return renderer;
  }

  return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue.stack), _html2canvas);
};

_html2canvas.Util.Support = function (options, doc) {

  function supportSVGRendering() {
    var img = new Image(),
    canvas = doc.createElement("canvas"),
    ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
    if (ctx === false) {
      return false;
    }
    canvas.width = canvas.height = 10;
    img.src = [
    "data:image/svg+xml,",
    "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
    "<foreignObject width='10' height='10'>",
    "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
    "sup",
    "</div>",
    "</foreignObject>",
    "</svg>"
    ].join("");
    try {
      ctx.drawImage(img, 0, 0);
      canvas.toDataURL();
    } catch(e) {
      return false;
    }
    _html2canvas.Util.log('html2canvas: Parse: SVG powered rendering available');
    return true;
  }

  // Test whether we can use ranges to measure bounding boxes
  // Opera doesn't provide valid bounds.height/bottom even though it supports the method.

  function supportRangeBounds() {
    var r, testElement, rangeBounds, rangeHeight, support = false;

    if (doc.createRange) {
      r = doc.createRange();
      if (r.getBoundingClientRect) {
        testElement = doc.createElement('boundtest');
        testElement.style.height = "123px";
        testElement.style.display = "block";
        doc.body.appendChild(testElement);

        r.selectNode(testElement);
        rangeBounds = r.getBoundingClientRect();
        rangeHeight = rangeBounds.height;

        if (rangeHeight === 123) {
          support = true;
        }
        doc.body.removeChild(testElement);
      }
    }

    return support;
  }

  return {
    rangeBounds: supportRangeBounds(),
    svgRendering: options.svgRendering && supportSVGRendering()
  };
};
window.html2canvas = function(elements, opts) {
  elements = (elements.length) ? elements : [elements];
  var queue,
  canvas,
  options = {
    // general
    logging: false,
    elements: elements,
    background: "#fff",

    // preload options
    proxy: null,
    timeout: 0,    // no timeout
    useCORS: false, // try to load images as CORS (where available), before falling back to proxy
    allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

    // parse options
    svgRendering: false, // use svg powered rendering where available (FF11+)
    ignoreElements: "IFRAME|OBJECT|PARAM",
    useOverflow: true,
    letterRendering: false,
    chinese: false,

    // render options

    width: null,
    height: null,
    taintTest: true, // do a taint test with all images before applying to canvas
    renderer: "Canvas"
  };

  options = _html2canvas.Util.Extend(opts, options);

  _html2canvas.logging = options.logging;
  options.complete = function( images ) {

    if (typeof options.onpreloaded === "function") {
      if ( options.onpreloaded( images ) === false ) {
        return;
      }
    }
    queue = _html2canvas.Parse( images, options );

    if (typeof options.onparsed === "function") {
      if ( options.onparsed( queue ) === false ) {
        return;
      }
    }

    canvas = _html2canvas.Renderer( queue, options );

    if (typeof options.onrendered === "function") {
      options.onrendered( canvas );
    }


  };

  // for pages without images, we still want this to be async, i.e. return methods before executing
  window.setTimeout( function(){
    _html2canvas.Preload( options );
  }, 0 );

  return {
    render: function( queue, opts ) {
      return _html2canvas.Renderer( queue, _html2canvas.Util.Extend(opts, options) );
    },
    parse: function( images, opts ) {
      return _html2canvas.Parse( images, _html2canvas.Util.Extend(opts, options) );
    },
    preload: function( opts ) {
      return _html2canvas.Preload( _html2canvas.Util.Extend(opts, options) );
    },
    log: _html2canvas.Util.log
  };
};

window.html2canvas.log = _html2canvas.Util.log; // for renderers
window.html2canvas.Renderer = {
  Canvas: undefined // We are assuming this will be used
};
_html2canvas.Renderer.Canvas = function(options) {
  options = options || {};

  var doc = document,
  safeImages = [],
  testCanvas = document.createElement("canvas"),
  testctx = testCanvas.getContext("2d"),
  Util = _html2canvas.Util,
  canvas = options.canvas || doc.createElement('canvas');

  function createShape(ctx, args) {
    ctx.beginPath();
    args.forEach(function(arg) {
      ctx[arg.name].apply(ctx, arg['arguments']);
    });
    ctx.closePath();
  }

  function safeImage(item) {
    if (safeImages.indexOf(item['arguments'][0].src ) === -1) {
      testctx.drawImage(item['arguments'][0], 0, 0);
      try {
        testctx.getImageData(0, 0, 1, 1);
      } catch(e) {
        testCanvas = doc.createElement("canvas");
        testctx = testCanvas.getContext("2d");
        return false;
      }
      safeImages.push(item['arguments'][0].src);
    }
    return true;
  }

  function renderItem(ctx, item) {
    switch(item.type){
      case "variable":
        ctx[item.name] = item['arguments'];
        break;
      case "function":
        switch(item.name) {
          case "createPattern":
            if (item['arguments'][0].width > 0 && item['arguments'][0].height > 0) {
              try {
                ctx.fillStyle = ctx.createPattern(item['arguments'][0], "repeat");
              }
              catch(e) {
                Util.log("html2canvas: Renderer: Error creating pattern", e.message);
              }
            }
            break;
          case "drawShape":
            createShape(ctx, item['arguments']);
            break;
          case "drawImage":
            if (item['arguments'][8] > 0 && item['arguments'][7] > 0) {
              if (!options.taintTest || (options.taintTest && safeImage(item))) {
                ctx.drawImage.apply( ctx, item['arguments'] );
              }
            }
            break;
          default:
            ctx[item.name].apply(ctx, item['arguments']);
        }
        break;
    }
  }

  return function(parsedData, options, document, queue, _html2canvas) {
    var ctx = canvas.getContext("2d"),
    newCanvas,
    bounds,
    fstyle,
    zStack = parsedData.stack;

    canvas.width = canvas.style.width =  options.width || zStack.ctx.width;
    canvas.height = canvas.style.height = options.height || zStack.ctx.height;

    fstyle = ctx.fillStyle;
    ctx.fillStyle = (Util.isTransparent(zStack.backgroundColor) && options.background !== undefined) ? options.background : parsedData.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fstyle;

    queue.forEach(function(storageContext) {
      // set common settings for canvas
      ctx.textBaseline = "bottom";
      ctx.save();

      if (storageContext.transform.matrix) {
        ctx.translate(storageContext.transform.origin[0], storageContext.transform.origin[1]);
        ctx.transform.apply(ctx, storageContext.transform.matrix);
        ctx.translate(-storageContext.transform.origin[0], -storageContext.transform.origin[1]);
      }

      if (storageContext.clip){
        ctx.beginPath();
        ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
        ctx.clip();
      }

      if (storageContext.ctx.storage) {
        storageContext.ctx.storage.forEach(function(item) {
          renderItem(ctx, item);
        });
      }

      ctx.restore();
    });

    Util.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

    if (options.elements.length === 1) {
      if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
        // crop image to the bounds of selected (single) element
        bounds = _html2canvas.Util.Bounds(options.elements[0]);
        newCanvas = document.createElement('canvas');
        newCanvas.width = Math.ceil(bounds.width);
        newCanvas.height = Math.ceil(bounds.height);
        ctx = newCanvas.getContext("2d");

        ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
        canvas = null;
        return newCanvas;
      }
    }

    return canvas;
  };
};
})(window,document);
function getJSON(url, cb) {

  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

//variable a reemplazar por objeto local que almacene toda la data del cliente
var nombre = 'Ingrid';

$(function() {

     $('#cmd').click(function() {
         //Todos los campos se identifican con 'pdf-[nombre-de-id]'
         //Llenar con text los campos vacíos antes de generar PDF
         
         $('#pdf-cliente').text(nombre);
         $('#pdf-perfil').text(nombre);
         $('#pdf-descripcion').text(nombre);
         $('#pdf-result-retorno').text(nombre);
         $('#pdf-codigo-asesor').text(nombre);
         $('#pdf-fecha').text(nombre);


         //Código para incluir imagen (no es necesario tag de img en el html)
         var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAyCAMAAABCiTbWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFaoHFen6GQl2t0tnsfZHKxsjPwcPKRVmS9vf4gYKFsrrR4eXu0tbkbnympK7JXWqNqrbd6ertTGWtaHKKZnGLJUSc3d7iq7PLjJ7Td3yHc3mIK0ieHj6bq7jfJUKZmajWkKHU2NzoNU6V5ujtQ1eT3+HnOVGVRmCtOVeqhpnOP1qp1dnml6fWJEaooa7XsLzgo7HZ+Pn6usHWhIWEW3S7ZHzD1NXbTV6RYXm8v8TRYnOkRGG2ME6lVmWPU2uxdovFdovKYGyMz9bp9PT2IkCajJzN7/D0jqDTLkiXJEWnxc7o7u/xtbvOb3aJkqHNW3K1V3G8g4SE8vT38PL2foGFUGCQUWGQOVizXnW2UmqwusXlK0eYUGu7eY7Me3+GWGeO0NfuzdLhKEWYKEad5ObttcDhSl2RanOKOlWlPVqwnavTM0yWW2iN4eLlTWavw8znfoCGU2y0P1WTXXfA5ufqZW+LYm2MLU2lHDybPlSUYnrCVW63MEuXNFKpIkOhTl+QSWOvR1qSJkSZkJ/Mx8/mWXCzSWSx5ejwIkKfSV2WO1q0zM7TID+aIECagYmjfIWhgYOFqrDAMFCu9fb3NVKnrbbPdoCfJEOcIkGaxs7lGzyblqHCxs7mKUmjgI60+vr7doWwgJPJf4KF6+3zjZm7bHWJ8fHz8/T4eIWtLUugjJzLnafD4+fyVWidL1Cv7OzvX2+e+/z9y83UMlGo8vP3fYCGJUaiLk6ugJPOytLq+fn7cHeJbnWJKkaYmKC3UGiv297obXaJKUebnKvYVGOP2uDwN1ayI0KZkqPSk6TVlKTRcYW+x9DqxsvbcYbCcIbIkZy84ePo4+ToP12zaX/A/P39N0+W+/v8z9HWTGazQ1+vycvSzM/WboO99/j5PVin1tjd2tvf6+zvTGi5JEKa5+nwgJTOX2uN2dzizdXseY3Gg5XKn6nEhJbMsLbI7e/0uL3LK0qlgpPGME2hv8nm8PH18PH28vP1HT2bh5O1iZnJZ3/ETmiygIKFIUCa////+Om3OwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAfFSURBVHja5Jl5QJRFFMABD1gx8QByacWidUElNVHRFJS8qESkFrRILUzQ1jJQNJJCUDnq29pS8xM8SiW7TZOyiLKszC47LTusbAvtLjvsmNne++5j15a++KPd9wfMvDffN/PbN/PmzXwhD648tXTVaR70BIaETI05lTzXekinmxoo6Cuob3G6G1Mn6LQrggDdmdncuJ8GJXpBnMtGgxDdQtlosoQNQvSTVkuG3avTAx3dkpdQaSdxbPChW6yVmaGEPE+DDf2kxVa6P8pFTI5gQ78+3GZ2lDcR0sQGGXp9ha1ogSXKREgWDS70+lxrmr2gBZxO0tqIvrWmpuZJoQzFGo1ZUGErvcBzT3pRcw+iYau2s92g3K3RXdll26ZN3brUeB/eWV1Qanyi16emHQptZXJdgJ7bRvSx1dXVHYQyFKunqM2oElrpBZ7r4EXNPYiGsdrOhoByiIr73uKwpKUbN65Jqn7kAd3YvnhjWWISimzUoJ8s7JVfmpPAZAE5yWsjejoY1wtlbJi0V2VGldBKL/Dcei9q7kE0pGs7ux+U98vVvad98Jj01E2PLjtd3fr3w0t1RjW6xWG2lW0xs/n2f4O+CowrFZx02SVtQV/pCx0Nq7SdrVCNZO3hm9QPJt29XW67/Z0fNUYdOlMel8tmmdKcVtN/gk6/8oIeMl2QGKifECvHecKY6WrxE71bEtfd6OFnghx8HMvrRkaK1tUjOevlM8E4nDd+rUWfEG12FxJSQvOQvM1rXY8e85IefUQnQXpCfZBYuYcn7NlJLf6hT+HIb+izK3Y1yFudh7yI9SsE6853sDZt8IgeYIzt3PsMHFh/NXp9WkoJE0dcBXQJh55mGJ2eMUWHLkk21M9X1JEw29t7/wm9Zj72dCBWNnYKobTvJKEyGTve86k0By77HNlHKdEtZfasCTZCQhlaxKEvMYiOP+/8Yz7Rlc19EvqD3h+K7Nz3lNZrDiZvFmP7fWD+8iKF8aNPcHEckdGdLXEpZZZSQhop7cWhmy3G0Lvjn0UR7Y1+1Qko9tWYzxbJuR8me4fK+DOGmcEyOhOVk8UWQGgvEtFd+cbQuV5px/ZG3welxM2+BjX+hGLZizITdMUSOmMjrkrGCqnMAhGdhBtE/20RVTjEH/QZ/wL9UnShz3T1Qm8PvwmnkzkSOvuUq6mFRgFwqoSewRhD9xwbjRHlB//R592qkH7+oc+BzWq8T/SrceV5zb5EdMaaQqItFjMAz6ZCmCOhVQbRPaNwVb3dz290eo5CFvqFfhTnu6QedbssnOIVML+gG+ofCnQ2jpBKmp8DwNGUcz4udqvTILpnELfjbvYbXSkr/UJ/QrVOht8hi+Tf1bqhTpXRGWsORjUr4dELeXSMeAbRPR2x1L8dvf6EKh1I12bBqDhyKnS2mdvLKpA3jqE2l8DucBpFP3cYFvv4u9ZvU4h/a72HasJ/fgEvUmcfQ6GDbqg/yei2FEKiKJ2NuDnxNL6JJze1MkbRPXsx15qzsP0iPIY5aUo/fScv88TOMMxdrXtlTwmdwcy1kNJoDjiBMkKcI00JhtE932FWl9iv3fb1Z7xtbjPEzhZ6O/EudsPGw6NzXi4RI3slpXnCjHeVMobRPX2x8uf49kJPxmOPdnfLFjvbDnks+6rGOg7jA49egqQ2cT/PcNJyu+B2l40xjO4Zi7XJ7ZbIYpI+ebN+RvOlb6G0vIcuzaFzOXQnd1JzSLk7Sy1CUkNMT8UbRx8/TRV02+P4QvepdrDjkE+wQjaP622ckn3XANAcXs2hu2chJSvl7rDArWKMT6lgDKN7uib5ie7z0Jp9CvRfPsBXnzlCskV8iE4foGhJZ74vGo9ehinmuqH8odXBcTJimCOzGVplFtCJPYExjO5Ze59/6Nfeohbvhs80VxWv3cjdwnTvdM2OiIjFsZ0PTMf6IPHF3CXNaLDeE7EjtjOXaKy7W7iqCOcY3VIWZ3ZTJlV0u6uogDGM7nk5xi/0mJvV4t0Qor2g+obzO304ZE9y8rhF53CVYdKLLx4mWHsn7+GNj3UUL6jSOMZyyqc0QFsGQT9UdHtKGmsc3fM6bXMiq7yWVEm67lryyuKN6iZLRyou6XePXKq+lrxXupYs5RAhwlcKtL1gq68Q0SGVZ/xCL66trd0glKFYqzJ+/5dWpWyOsqFWL94NxaCcCP8nKp7elDimVhxh7Zjl29RD2yZba8cc7iJfRjdyhOBqh0lwdCalVXEiuqlJtdx9ot9VV1fXVShDsU5tHahVKZtzsbBOL94Nd+ElLPzvpnxdZMNDiQPWgIQtP6/hV+3YIhvqwtCYFPZQw7uKTxB82vo8pRYhgcWklrFukdxuzmf+D9/cJg1cCxK507s1Eo1DI9UfnnhfwzldPKgTO7j9ZJFLYo9uYQLzcyPP9yyUcsU5njGB0nIp0pGc6AJnAKO7YHfLFBPYnASMdHaZPSPeGbjoGOeYZpG1GX4INprI7BVuZwCiC85dAMU8aXnD+Y1mmmX2lNSqAEQXnAvHFtoizXFzPkyCkusUfl8SH7DoJljfzlJpN18AvwQzW17uxJXhDjh0Ma7j9nbILidxeH9TukXB3uoONPRwAW0W+Nkph7ZZBXiB00gU7M0FAYaeKaLhlyabTNoL57cjVMFOshwBg/63AAMA4i2Hicz8f7IAAAAASUVORK5CYII='
         var grafico1 ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAE8CAYAAADt+is0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAFLjSURBVHgB7b0HYBzlmf//tXrvvVvFsmTLveIONmB6bwkQIBC4FHL3P5LcXZIrIY387y7JkVBCaAnYVFNNM2Dcu2WrWJLVe28raSWtJP/e5xVjxstKWkmzq92d55Ms1s7Ozs7OznzneZ/neZ9nFlyMcwIwDKNLZgngQriBYRiGcUhYoBmGYRwUFmiGYRgHhQWaYRjGQfEAwzgYIyMjGB4epoAP3Nzc5HOTyQSDwYDe3j709BjkMqPRiLa2NgwOmhASEoL4hBSUVXWirLwRAf4+CAjwQVCAL4KD/RAo/vUXz/39vOHv6w1PT3fxGefk53h6esDDww0uFl9iXAAWaGbGIJElSGhbW1tRU1ODqqpqNDY2orS0FF1dBvT19UoRnYj58+djzdrNePujEvz9lT0Tru8lRDk8LACxMaFIiA9DVmYicuYlY15mHGKjw+Dv733+BsG6zcwULNCMzaHMR7KABwYG0NTUhLKycpSUlKC8vFxYwO3o6OiAvRk0DaGhqVM+TpyqwDs7j1/wur+wwFNTorFyWTpWL5+DhfOTkZIcBXe3WdLidndn7yBje1igGZtAVm9/fz9Onz6N3bv3CkEullays9Db24+8gir5eOaFT88vT50djRVL0nD5lsXYuCYbYaEBwj3izu4RxiawQDOaQO6K9vZ2nDlThP3798t/6bmrUV7RJB/b3zggn8dEh2Lzxhxcf/UKrFyaISxvL3h7ebJgM5rAAs1MCbKQ6UG+4t27d+PUqTzU19dDbzQ2dUift+L3zsyIww1Xr8TVW5cia048hoaGpbuEBZuZCizQjNUY+ofg7+2B2nYjBrpa8PN/+xf09PSA+Yris/X49f/skA9yf2zeuAB33rYeF6+fL/3ePt6eYBhrYYFmxmVwaDTToqK1D68frcc7uY1wE9bgjvszZeCPGZv2jh68uuOAfIQE++Obt67DfXddgjQRfKQ0P4aZCBZoxiI9wlruF+L8Xm4TXjpUK61mNdVdI7juumvxyiuvgpmYzq5ePP70h/IxOzkK//yDa3D9VStkOh+l/DGMJThXiDmPoX8YQ8PnsL+'+
         '0Hf+4LR/rfrUPv9159mviTOwr78GiJcvATJ6KqmZ89/97BnGZD+Cu7zyOYyfLhD9/BAxjDt+6GfQM0ESQc9hxvBHP76tGQ1f/hO85WN6JWxcmgJkeb79/VD4S4sPx65/fjisuXQJ3D3d4e/GlybBA65r+wWEYhDi/sL8G2w7Xom9g4hl7Ck1CxJv6ZuH666/Hjh07wEyP2ro23Cms6aBAX/zT967GfXduQnCQn5wUw+gXdnHokAHhW27qHsCTuytx919OYPskxZkwCnE/XtOH+QsWgtGOboMR//On97Dlukfxxyc/QEtrF4aG2P2hV/j2rCNImNt7B/HSwVrsKmhFsxBpo2lywqxgNI3gYFknLr00Goy2dHf3ycdv//ct/O2VPbj9xjW455sbERYaJIs6MfqBBVoH9Asx7TYOSWH+KL9ZWM/9ctl0GB45h6q2PvSOeGLTpk34/PPPwWiLobdf5lX/7v/exbY39uObt67Ht+7YKKvzeXpwmp4e4NuxCzMwPCInl7ywvxr3/PUE/nagRorqdMVZods4jCPVvbho7VowtqP3S6Emi/rS6x/FM8/vgqHHKCe+MK4NC7SLQp1z9xS14v7ncvH07iqUt/RN2Z0xFv1DwzhY3oWY6FgwtqdHCPWZ4lr8+29ew013/jc+3Z0nKwVyn2TXhV0cLsbg8DmUNvXgmS8qkVvdLXzOJul7tgVDX37WgFsc1goret++fWBsj0EEEvccOIOS0no5lfx739mKrMx4nvDigvAv6iIMCncGzf57cX8NPiloEX7mQfQNDtvcuqLJLUerjVi3fh0LtJ1pbO7CduGbPnqyDLfftAYPfGszAgP94MG1ql0G/iVdAJLgL4pb8dCLp/HKkXpUtxnROzBkl6Fvv4ncHB2IiYsHY3+GxI2Z/NO/Ef7pO779R+w7VMQuDxeCLWgnpndgGC2GATy3txoHStvF34M2c2eMhUm4OUqaejHiHo+VK1fi8OHDYOxPf78Ju/cWoLyiEddftRI//IcrZUsvnuji3LAF7aSQjfRhXjP+aVsBPhD/1ncO2F2cFbr7hnCstg8bNqwHM7NU17bhz3/9GHc9+LgQ7EK2pp0cvr06GVRhrqNnEK8eq8O7J5rQ0jOAwaGZvQjlpJXyLnx/dRKYmcdkGsJeEUSsrGrGjdeuwsMPXYHQYH94cy1qp4MtaCeCsiZOVXfhP94qxksH6tDQNfPiTJiEH/RMfQ/cvX2xdOlSMI5BTV0b/vSXj/DzR7ejo6sXbEw7HyzQTgIVzn/tWD1+'+
         '+34pjlR0yAkoIw50xXUZTThe289uDgfD388byUlRaOsy4ZP9lRgc1DYXnrEt7OJwcCivubnbiOf31WJXYQvaRCBwaMTxTKH+L90c31k+G4zjkDknHmvXLsFftufheF4TDq6tx3235CAq3B9enmyfOTr8CzkwJM4nqzvxi3fO4u0TjbK4kSOKM0EWfn6dAd6+/liwIAfMzLNgfjK+e/9WHC9sxUd7KlHf0os3PyrBf/7xAE4XNWPQxFXyHB0WaAfmw9NN+O8PynCkvAM9Mq8ZDk1Xnwm59eTm2ABn5tXn/lGK21ivFR37vXwkJ0Z87fWPdvzbmK/TMnuRlBCBW29Yg/DIKLz6fhEGTKOTlgy9Juw/Xo9f/fkwPvyiHIxjwy4OB0MYzegTYrztUC12CKu5rsMoc42dAXJzHKjsxj2L0uGskACvW5uN4L98aPG1/xPLq2ta5POn//gdPPCDp1BV0yqfkzg/+rs3Lb5O4nzZ9Y/CHlC2xqKcZCxbPh8vv1OClvYLO+T0i/OroLQVf3jhBOqbe/HNa7OEr9oLs2aBcTDYgnYgyH3R0NWH//moTFaeq2l3HnEmKA/7VFU3/AICkJU1F87GY7/45gUCrEYR57z8Kim49CDxJRFWLOXkxEj5XuV1eq5AfytCbmsWzEvG3XdeLizlRuw5WmsxF9okbqbVdd147o08PPaXo6htMKC/nwOIjgYLtINA4lzd2ofH3i+TnbTbxFB02EH9zeNB2RyFjYNYv965sjlInE8L8SUBpg7c5gSH+Ml/O7v7zi8zF+GxIMt67rKHYQ+yMhPwwD1bYDC64dWdxdJaHgs6v1qFdf3WJ2fxyz8fRFF5K4z9XMLUkWAXhwNA4lxYb8CL+2uxv6QdfSbntWSopOn+8m7cPj8LzsSvhGuCUAuwVtjLeo6ODMbVW5ciLS0Zv336GLoMAxO+h6zrHmEM7D1Wh17jEL5/1xIsyIqEjxc3BHAE2IKeYciKOV7ZgT9/VolPC5udWpyJATF0PlbZhaCgQCEUaXAWSJinK87kYyaXhxIkvF/ln7YHqbOjsXH9UrzxcRkKy9on9V6ynI/lNeKpbbk4Lv41cYaHQ8AW9AwyLKyXg+JCenZPDU5UdQgfrmtM9aJsjjMtJmzcuBFlZWXQC4pfWv2c3Bv3f7lMncUxd9kPoSVLF6Xi4e9ei4KyLny0t3JKjWYHBsXo53id/HdInItrlsXDw50jhzMJC/QMQbMA9xW34a97qpFb2wWTi4gzQW6Og2UG3JiVDb1hbjErgUPzLA56rpVIp8+'+
         'OwV23bYSbZwD+9tYh9Iob5FSh3OijZEGL83Hk3Ag2rEiEmxuL9EzBLo4ZgILqXxS14andVcitcS1xJijd7nBFB0JDgpGYmAi9oljPSjBRye6wNrhoDcFBfli/Nhvzc+bIoGBrhxHThdwbuYVN+PPfc/H5oRquiDeDsEDbGTrXdxe14ukvqpBX1+1UaXSToVNYcWfbh7Bp00boFcV6tiVz58TjumvW4cO91cKH3KTZZCYTpUwWteDPL53EZwdYpGcKFmg7IsW5uBV/EeKcL8R5yEXFmTAKP+aBUgOy5i+AK3Dr3f+Lnz5ywwUzDNUWsjnjvaYVC+Yl4bsPXIG65kG8vatU+o61hPzYeeJ8ffLlXHx2sAYjTpj26eywD9pOkDjvET7nZ4XPOc/FxZmgGtH7RQD0nhVpCA8PR1tbG5wZyvAgkX7lhX88754gAaa6y5Ywt54pD/rCIOH08qITE8JxC03ljorCU08cgaF3ELaARPpUcQue3nZKPt+wMoF7HtoRFmg7QAHBg6XteH5fNU4Jn7Ori7NCZ+8QyjuHsXr1Srz33k44CyTEllBEOjh4dNLKeNYxBQTVr9Pf6iDhdCxrdyGQC+alYPny+dj2Xikqa7thS0ikc88049nXTsuA4dpl8fD0YJG2ByzQNoZ8d8cqOuUklOPVnS7rc7YE5XTvL+3GsrnzACcS6PHyoa3Nl7YkwFq5O6KjQnDf3ZfhYG4z9hyxj+uBfNLH8pvg5ZUPH293rFgQK24UnN1ha1igbQhZzjVtRtlp+3B5u8tla0zEaMfvTlxxSTiCgoLQ3W1bS08PRIQH4d/++UYYBtzxyntFMA7Yb2o2ZXccPFEvBNoDvl4eWJgdiVlcYcmm8DjFRpDlTF223z3VhM/OtLjMJJTJQH73lp5B9MwKEG6OVWCmB3VHuWbrUmxcvwDb3y1CpxVTubWG8qR3H6rB9p1FaG6ffkofMz4s0DaAhKnbOCS7bj+3t1rmBeuVvoFh5DcPIXvefDDTIzQ0QLg2LseLO4pQcHbmgq6ULfLep2X4YHcFevpsE5xkRmGBtgFDIyM4XtWJlw/Vok/nPeBGC0H1Ijw8DL6+vmCmRkCAD379H99EbXM/3v2sTPqEZ5K+/iG8/mEx9h6tm/F9cWVYoG3AmYZePLOnCrU8BJQdv2s7+tHv7o/ly5eBmTy+Pl744UNXYu7cFPzh+ePo6OqHI1Bc3oFtwtVCvQ4Z28ACrSFU/KiosQfPCnEuqDOA8/q/8kMXdwALFi4CMzkopW7l8nTccuN6PL09D5V1jhNoHRY33+'+
         'N5DXjl/SLkFjY7Zf1yR4ezODSCxLleWIrvnmzE3pI2DNohKPgvV2Zgx4kGFDX0WHxtbmzg+ef/+noh6jq/srx+dVMW4kN8Lb72wreX4O5nTkArOnpNyK/vQ86cSHh4uGNoiDt3WEtQoB/+9Z9vwa4DtfjsYLXD9aU0ihgDBQ2jwn0R4OeFlIRg8RtzZodWsAWtEcaBEew72443jzfYxe9855pEXL80FoG+X7/HkjifEaL9+GcV8hEf5nPB6yTOR8o7z7/+3c2zhViPrkPiTMu0ZEAIcnV7P0yeAcLNsRyMdfj7e+PX/34HhuGNZ1/PR5/RMbuddPUMCL94OXYfroGhd8Dhmxs7EyzQGkBDO6pK98K+GlkkyNaQOAf5eKCu4+u+SEWcPy1swVHhI6THv7x+5gIRXpEaev41etBzhRWpIXKZltAF22oYRGnHLCxevBjMxFDj17tv24g1a+bjDy+cRFuHY8czGlt6Zeusw6ca2dWhISzQ04QmoxQ1GPDC/moRFNS+XZI5iji/uL9GpvKZQy4PEmeDqrecuQiPBVnWdz1zEragXdy48hv7ERkVBWZ8aPIHNaK9567NePHNMygosW1FPK0oruiQIn2yoIkLK2kEC/Q0IEuhtq1fTkah6dz2mMVNYkvibBijuSf5ow1TbPypWNa2oF+4fSrbxA3MJwjLli0FMzZBgb747X/djdMlXXj70zKnqd1CQcMDJ+rx+SFhrDQauESpBnCQcBrIwvRC0N4+0Wi3ySiWAoITQZbx47sqzgcCv3J5jAYJ1a/ZCpnN0W1Ceacbli5dimPHjoP5On6+3vjpIzciIjIc//Xk5zD0ONdEkJ7e0dKnCTFBuG5Luvg+LDHTgY/eFCHboFhYCduP1NnF7zwdyDL+066vAn/mVjI9V0ScoEChgqbZHH2DyGscwNXJsWC+jqenO668fAmuuWoVfv77Q8Kva3uXmS1oaO7FO5+eRXJ8INYsjQczdVigpwCl1JU29eK1ow042zR5i9aeUNDQkoVsLtKKiJtncWiZckdF/CvajHCfG4RFixYhNzcXzFdQSt0PHrwGr+w8iyOn6uHMnC5qwSf7KxEV7of05BAuqjRF2Ac9BWRjTeFz3lXQ7NDlQ5WMjrdE4HA81C4QJYvjqwyPEGgFxY2aDQOoMJCbYwmYC/nDb+9BU4dJFkLqH3DuXHHaf6rVceBEneadXvQEC/QUqO0w4s3j9ehx4ItInW43EbYMDprTIXyq+Q0DiI3noa+ah+7dgqysNPzvsyccZir3dGlpN+'+
         'L9z8tR3WAAMzVYoCcBBbqaugbxUX6LdHE4KmpxniijwzyAaGtoEk9ZqxFe/iHIyeEKd0RWZjy+/+CVeGr7aVTUdsGVoJ6G739Whloh0pwfPXnYBz0JqDJbcWM3Xj1a77CuDRJnmmG4oqMf1y+5MBhnPqWbMA8gUh60OkiodV40XaMt0s3hLtwcy5CXlw+989h/3Y2jBR349ECVy6WmkXtj+3tFWDA3EpERfnB3cwdjPSzQVkLXTbWw/F4/1oCWbvsXSrfEr98v+dpsQpqosuuM5dZKlqxkSrlTLydXx+Oq123h+mjvMaGwaRCbExKgd37zH3cgKiYS//kfnzrsVO7pQq6O1z8oQVJcEAcMJwkLtJX0CkvgeFUHDpS2w1GwlBM92TxpSwJsa380HcvS5j5clR4q/K5zceZMEfTITdetxq03rsVPfncAdY2OnQ00XfYdq8OGFYmIjQpAgJ8nGOtgH7SVKL0Fe508uu4I0DTgpu5+VPe4YdkyfdaIDg72x48evg7b3juLQ7kNcHV6jSa8/G4hahpcy8dua1igJ0AGBoVL4+OCZofPeXYmOvpMKGgyISEpGXrkT///t9HYNoSX3jmDQZM+bvpF5eRnr0GLcMvxLHDrYIGeAIo8Nwsf7emabofOeXY2evqHcVa4OQKCQ5GRkQE98ZN/uh6LFmTgN08fQXuna6TUWcPQ0AheFjeksqp2WWSMmRgW6HGgk4hyUvu7jHhwUwq+sz4JYf5eYKbPsHRzDKC210NXxZM2rs3GQ/dtweN/z0VFjf6G+1SW9IMvKlDPxZSsggV6HOiOX3C2FY8+fghvvnEaWcFe+PVNWbhtBU+y0IL23iEUNJuQnDIbeuHf/+VWvLe7Brv2V0Gv0OSV0qpOcX2xQE8EC/QY0N2dZkDt+LgE+SUteP+zcvz5+RPY93kZNiQH4lc3zsUl2ZFgpo6h34Tixj4EhoYhNTUVrs6f/vt+wMMPf9l+SgbN9Aq5dajiXVV9N9eNngAW6DEwmUaEr6wDuw/VyoBGDwW1hDX9+s5iPPHscTQI0b5pQRR+dlWGpvUq9ITi5mg0eskSpK7MA/duwaWbF+O3Tx5BU6tzVqnTks8P16CkokNcZ5wVNR6cB22BUeu5G+9+WgZD71f1eOlu39ndjxOFTWhs7cWcvEasWZGE+9ckYU1aGD7Ib55SvWY9095rkm6O5WlpcFVmJ0Xhhw9egb++WoC8klYwkHWud4rRaHpSCNJSQuDuxpNXLMEWtAVMwvdcVt2FvUfrLL4+PHwONcL9ceBEA/7+'+
         'Rh5e3p6LEJMJj1yahgfWJyM2xAeMdXSJoX5hQy+ChZsjMTEJrsgjP7weucXdsh0UD+m/Ys+xOpTXdHKX93FggTaDMjeqhW/sg93lF1jPljAKH2q5iMTvO1qL57fnYceOfKT7u+M/r5uLW5bHwceDD+9EjLo5BtEy6IXly13PzfGP370SS5fMwe+fP4Yug3N1R7E11H3lwy8qhLHTw2l3Y8AuDjPIOq6uM8gW8tZC/uniijbh9uhBeXUnFufEYPWSeKxKm4tPClrxQV4zmLFpFxdqfvMQFqe7Vj70lk2LcPcdG/HcjhLU1HPJTUvsPlKDa7akIzk+CG4e7OYwh008FXQTJ9fFJ/ur0D3JXnD03k4R8Dpd3IJ3xVD2xW2nUJLbgCuzwvCTK9KxICEIjGW6KABb34vQ8AhEuUjXb38/H/zD/Zfh4OkOfLy3Eoxl6Drbfagajc09nBdtARZoFXSCNDT14ON9lZgqZIFT9a4TBY147f0i/H3bafj29uN7G5LwvYtnIz3KH8yFUBnXJjH8bzV5IycnB67Az398EwKCw7Dt7UJ542bGZqdwc9Q1GcDu+a/DLo4vUSzgfcfrNOloQW2x6oXYt3caUVnbhcXZ0di0LgU/viwNe0vb8UlhCxq6+MJVaBOWVGHLEJJSnL82x313XYxLL1mCR584hrNVnWDGh/KiD59uQlpyKCJC/cDVSL+CBVrFgIgm7zqg7Qwv6s1WVdeNVmFV55e0YvmCGGwUQr06PRM7xUn5eVEbegZcsw7wZKDO6KfrejEvNQLh4eFoa2uDM7J0USoeuvcyvP1pJY7mNYKxDgrKb1qVKAWa+Qp2cXzJ8PAICoSAVtmo5RDNHCut6sB7n5XhT88ew9H9lbgyMwz/df0crEkPg94ZEq6hZjGCMXmFOLWb4+GHrkJpbT/e2lUmJzsx1kHZUAUlbRgcZGNFDQu0gFxfnYZ+fLKvSgqFLaHUPZqR+M6uUrzxzhm0V3fiupxI/MOmFGTHBUDPtIlj03XOD/EJzlnr5IcPXYHY+Ghse/eMyzR+tRdU92bP0RpxHQ5ysFAFuzgE50R0gvxgnx2wTwEbCiTWNRqE26MPRcIfvWR+FJYtjsM9qxJwss6APcVtqNVRGUqFjl4TzraZsDI6Gv7+/ujtddzGvOZcddkS3HrTOrz4dinyz7bppsazlhw6UY82EbOJDPNlP/SXsAWN0ZmDJwqaxclhX1Gkhpql1cLt8XkZXnz1NI4fqMSSCF9Z1vSaRdGIDNRXaVOqt13d3g/PoEhkZs6Bs5AQF47vCL/zodPt2HesXk5gYiZPlwgUHxAiTal3bEWPwgKN0RPj7U9KMVNQs1CyunZ8fBYvv5GH6sJGbEwOxnc3JWPjnHAE+uhnoFMrgqktJl8h0JlwFh5+'+
         '6EoMzfIRbqsyWauFtWXqUK3o3j6+wSnoXqBpqnF9YzdOFbVgpiHL4aCwIF7bWYw33y5AR2U7rhX+6e9vno1FicHwcHf9cR91GC9rH0JMTAx8fBy/psm3774YK1Zkyd6CFXXdNo9huDpFpW1oaO7BCMdXJboXaLpbU9GWfgdKdaNylJ8drMZ2EUT86MMSuLX34valMXhoYwoyolw7Dcko3D7Vbf3wCY7EnDmOPfV7/UVZuPeblwirrxq5hc0Y4HTJaWMUx/DzQ9XCWBngkQhYoKW/cOfn5XA06OSsrjeIi78cf38jH4f3lCN6ZBh3i0DiPWsSkRzuC1dETrcXbo7WYX9kZWXBUfHy9sSD912GwvIe7DpQI+uxMNpAM3mN8mbHCq3rLA7Kfa6qM8gcTEdlUFiUxRUdqG3qQWFZG5Zkx2DhwhikC5HeV96JvWdpootrZQxQBktZ5zByYqLh6ekJk8nxxO+Bb21BSFg4XvzbaTS393FQS0Oo00qtME6iw/3h7g5do2uBppzkz8RwinIwHR1yxZw60yJnJRaWtmLx/BjcsDoJK1ND8FF+K3JrO4V7wDUcd73CeqoSbo4Vc6Jlx+/CwsKvrRMaGorAwEAp4FFRkUhNTUN4eAgy02Oxfk2WcDcMo629G41Nnejp1TY755orlmHr5iXY9n4pSso7eEKKxlCvws8OVyN9dihCg3x0nXKnW4Emg6fPOIzPD1TDmaB6IYdPNchC5wUlzdiwOhnfXhuP0pYw7DjZKP7tdfpAlXRztBrRkRaO7OxslJeXIy0tVWZ2BAYGieChtxRoDw8PuLnNQkhICAICAuDh6Y2AoHAsmJciYgqD4qbWL2++hp4+NDR1CdEexJniOhw9UYau7qm1ncqcE4e7btuAM5W9OHq68cuhOKM1n4nr8s7rsoVAe4tn+lVoHQv0ObS09aFSWKTOCFXMa2mvQ1lVFxbPi8Sm1Sn44SWzUdhowEuH62XxIWemu38I3UMe2LBhPaKjoxAZGYmkpET4+flJq9nLy0uI76g4zhImlpubmxT24OAgYXnFYOTcqFXr7eUp+96RIBuFQJeWNaKqphnd3UYcOlqCvYeK0dlp/YSYu27biIERH3xxtFQWnGdsA7keG1v6EBMZAB0kL42JbgWaJolQb0GTk7fbqW/uQXNbL4rKOrB8YaywqBPxk8vTcLq+B+/lNqLDiYJX1JcuKcwXy8XQNjs+EPPjApAkHvHxcSAryt3dTQqxAlnQamgo7OUmlnleuF0PD3f4+'+
         'nrJ1kqxUSFYu2quCA4PYuniNFxx2RK0t/fgw12ncORkKQbGmWRy750XY152Kt75vBbFwrUxzPUxbQZdlwdP1CE1MRghwoqepVM/h24FWvqfD9pnaretIZdGWXWnFOu8ohasWhSLi1YlYF5MGg5XdGJnXjMGHNjP7ilMpEQhzGsywrE0JViItB9SInxl3jcJslqUpwMJNT0ILy8PrFyWgVXi0W3ox+IFqfh8bx7e/ygXpRUNXyvac/GG+bjx2tXYe6IdxwuaJ2yHxkyffcfrcfUl6VKg9YouBZqGwnSBUdDNlTAKtwAVYqKO5LlnmrFmaTwuF4/5sQH4rKQdR6jNvYP5p2k6++bsSKxMC5Opg+nR/tIy9bZxP0eyxulBhIp/KbCYmhKFi9fPxzvvH8few2dwtrRRjLRMiBZW9523rUdF/ehU5Jb2qfmvmclRKM5lOqfpjNWrl0OXAj00PCKL6Ltq7iq1tD+e34QK8R2pJvHmNSm4d00CLkoPxXunmlDS1Dvjw/MAHw+sSBHuhjlhyEkIEi6NIAyKYa2HcHPQw54oVnVCfDiSEiMQEhyArZcvxvN/342PPjuF+4Rrwz8gDO99WCFbonFGnX2g65NGhqlJIfDyZBeHbqDazHuP1cHVoQp9NHW8VohKTn4jNq5Mwj9dmoq82m5sO1KPVlmUBnYnJtgHW3MisX5OBOYnBkpBJk328ZzZpFfFop6THou5bnEIC/GXro2M9ATs+LRWpjf2D3KVOntyOLdBuuzCQvRZ4U53Ak161CfuzIdz66EXyOqrbTTgbEU7ViyIxZoVCfjJ1nTk1fXglaN1cnq1PfDxdJPW8qXzo0QgMASzI/yEn9kNbg524fn5ecsbV052ElJnx6Krx4Tevkp5Y2fsy5G8BtWsQv0ptP4EWgztyf9cWeuc6XVThQTnbGWn8E8bkFfSipULY7B6RRLStqbJGtTvC9fHgA0nXJBLY21GGG5eFo8FiQFSmL08HLfSgMwI8fKEm7u7TNV74PYFctk+MfLi3Gf7QROz9Hxj1J1Ak//5bGWHTLPTIzTD7nRRi/TBnypqxarFcdi6NA45IpC4v7QTu2wQOA3x88SmzAjcvCIOi5KCnWqoSjcSD183LJ0fA9+7PeAvvgt13mFr2j7Q+Vpd343UxBB4erAF7dIonbtPFDRB71Bp0yM0I1EEYU4WNmHtknjcsSwOCxIC8XFhC/KFVa0FZCVfnBWJW4Q4zxeBQGf1I9J+z00Px/23LhBC4SbrFnOBJPtwIr8FqxfHy+'+
         'OuN3Qm0Odkcfy8YufsGG0LWjuM2HukVja0nUcZH2tT8EMRSMyt7MJrJxrRNI3eep7C+lwn3Bq3roxDdmwg3J38+qKJNBmzw3DvLQtASTDvfFrKdTjswImCRlmLxt/XU3eBQl0JtJyNJP5fIoJlzIU0NPXKBwUUl86LxpqVCfjpVRk4WdWJ5/bXTDrbgyaZLEsJxoObUjBXiLOrNBug75GRHIoHbluAxpZeWRfFGYptOTNFZW2yqqMe0dWYYUSoTKewCHkW2NgUl7fjtQ+K8cy2Uzi+rwLLY/zx82vm4JblcVZvgyzN9KgAfH9LKrLiglyuEwxNbEwXIv2P9yzDnJQw+X0Z22HoNaG9q1+XJV11JdBk6dDkDWZ8qInuyYJmvPzOGTzz95NoLmrGZXPC8G9b02WK3EQEeLvjgY1JWJgQ5PRujbGgwdii7Ajcf1sOAvz11dx3JqAJKyYdjlR0JdCDpmHkl7SCsQ4aadDU5r+/VYi/CqHur+/EbUtj8IjwUS9OCrb4Hsp1vm5xHJYkh8hSoK4M1QhZsTAWN16eAR9vXZdWtzmni1vQP6i/9EZdCbRRBAhpCM9MDgokfn6wGi+8WYC/vZQLr24jHlifjO+IR3LEV623yJWxNDkY1y+LQbCvPgQrLMQHN1+RieULo+GhwywDe0GTrKh+u968HLq67VMJw7KaTjBTo66pRz4oj3xpTjRWLU3AI5en42hZB9442Sir0t29NhnxYT4zPm3bXniL75maEIJv37wABcVt0lfKaE9FbTeGh/UXKNSNQNOdd0C4ONo6+AKaLuQPrGsyoLy6C0vmRWGRGOZnXpkhp4xniqCij4e+Gsl5CrdOVlo4Llufgjc/OqvbSVC2pLWj78uURn1N+dbNmIwyOLoMg5wSpRH9A8OyYt6rO4uxfUcBDDUduGpxDIKEa8NDh1kNgQGe+NaN8xAfG6jb4vK2hPoUdvUM6M7FoRuBpg7ejc09YLSD0p7kzEwh1NT+aVgEcfTi2jDH28sDkeF+2LImmQOGNqK5tU93XWx0I9BkOTtr/0FHhozFiDBfbN2QAl8vfQuTj/j+N2+dg5gIP7aibQBNotJbqp1uBJpS7Mh3ymiLt5c71i5LQJCfN3x8dC7QwnKOElb0GhE8pePCaEt5TZfsK6kndCPQVEqzqdX67s2MdVB9hI0rE8GMQtXvLl2bJKveMdpS12gQAVi2oF0OCiyYhAXd3GoEox0kRikJQZiXHo5gHTf2VENW9Py5kZid4HpT3Gcaqn1CzXz1FCjUhUCTO/DcyOiEC0Y7fLzdZRlIWTOZJ2mch6r40XHRu8tHayjVzsF6Htsc3VxV58T/urlIkqb4CgHauCoRfjycvwAv4X/esCIBvt58XLSEWo+'+
         'd4ywO14OGRIPCB02pdow2UAW36Ah/zE4MlkLNfAUVlk9JDEG0CBhypTvtoOuXgv2jk1X0gU4E+hz6uY+cpnh6uiMrLQwjOrNorIWOS3Z6mDxOjHYY+4egp1NOFwJNswi5h5y2UBrZ/MxI9j2PgY+3G+aJ48PpdtrSJwT6nI4GwvoQaHHL7eX+cZri5emGnMwImWbHfB06LnR8vNiC1pS+fpOMJ+kF3figuYuKtpDwpAk/q4erVuSfJjSTMDUpRN7IGO0wipGwntxqurGgDT0s0FoSHOjFwcEJoFKkdJzceNq3Zhj7h3XV+ko3As0pdtoSFe6vyxZEk4H8pRFhfnD3YIHWCuMAT1RxOeiO28dBQk0JDfZhgZ6AkaFz4jj5ytZYjDYMsEC7HvSDch1obQnw88QQ55WPyyxxdQX5e8KdXRya0S+nerOLw/XgdF1NodKaerpQpgLNKJS1oVmfNYMmnOnprNOHQM8atWYY7XCjQkCsz+NCtUooy4UNaO2gtldsQbsg7uwH1JRhqlrDwjMhwyMjumvTZEtkuQb2QbsWpCOcr6stA8IXyF1DxmdwcHi0xAALtGa408hNR6edTsqNzpL+QEY7enpNbEBPwNDwaHrnMJvQmuHn66krw0A39aC9vNiC1pL2biNb0BPg5jYLHZ0DGBnhbBetIIHW08Qf3VjQ3GlZW6jDso8Pj0rGg6Z5N7f3YniILWitoBonegon6caCZoHWlq6eQeGH1lcDz8lCKWHdhkFZTZHRBn92cbge9IP6cd0ITaEejxU1XWDGpr65Bya2njVFujh01ARBFwJNP6gfl8XUFLIOC8+28QzNMaB0sLziFpnJwWgHzWCdpaPwtG5cHIHcN09TyL1BAsTTvS0zIEYYx043yqnJjHb4sQ/a9aCob4C/FxjtIBcHWdDD3PLKIjTCKBDHx2RiC1pLqMStnpKHdOPi8PZ2hztPVtEMEubG1j6UVXVyTQ4zaHRRXt2JJnF8+AamHXT9esoWa+zicClIP8iKDmIrWlOM/SZ8fqiGsznMoMamuw/XwDjAJW61JDhAf25K/ZiU4qYbEeoLRjv6B4ax/3gtd0w3g+qUHDxRj/5+Pi5aEhHqh9F581wsyaUgn5W3lweiIligtYQChBU13SJY2Cp8rmxFE3TTyi9tRWVdt5zqzWhHZJivcHHoa3KUbixoHy93JMYGgdGWXuMg3v6kFFwRSOEc3hXHg7vIa098TKCccMYTVVwQCi5Ql2VGW8j/fLygCTX1Bl11W7YEtVUrqezAsfxG9svbgNTEEN3NCNaNQHsIgU6KDQSjLRSAbWk34tUPSqCvXhdfh779azuLxfHo58wWG5AUHyiuY30V6NJVwX7qsMxoD2UtfHqgWvqj9eqLphmDDc09OHyygYOmNiIq3E93qbK6+baUCx0S6CUtaUZbyFqsazTgudfyZJ1oPWIQ3/v51/NRI44DW8/a4yks59Agb+ioDIdEV2rl6emO8FAfMNpDPteP91Ui/2yr7upzULbGmbI2fLi3kn3PNiI81E9ev3pDNwJNgV9PTzekJXKg0FZ09wzir6/moaq+WzciPTR0DjUN3Xjm1dPy+'+
         'zO2YXZCEDyo3ZXO+vjoyoIO8PVEdno4GNtAokwFgt4QAcMeoz7EqqtnAK+/X4yjpxq5sp8NyUgJhZ+Pp+46pOtKoKkv4cKsKDC2wygCZNvfL8KhE/Uun3ZHruZDJ+uwTXxfIwcGbcq8jAh467CvqK4Emjp7J8fzZBVbYxBD/cf/dhInC5vktGdXhLqknChoxhMvnZLfl7EtaUkh7IN2dWQmR5APArlokk2hCm4llZ34/XPHke+CNaNpZFBQ0iq+3zE5MYUr1tmWQH9PhIX66s69Qegu54y6e8/PjABjW8gfe0T4o//8Ui5KKjpcRqQpY4PqYP/trULx/RrY72wHMmeH6yw0+BW6E2hqOrlqUSwY22MyjeCLI7V44Y18KdLO7pMmS7ngbAteeqdQTsyh78fYngVzIxEYQKNe/cm07jqpegs/Fv3gjH2gmYU7d1fI5qn33TIfc0Q0noJrXk4W8KHJJ7nC50wBUBLnzu5+MPZhaU6UdEvq0cWhO4GmqaLx0QEyIsyTCuxDr9GEj/ZWoLd3EPfcPB8JsYGICPGFjxN0WqcgJ03dPlHQhFeFOO85WgdDLwcF7YW3t4cskjSaA60/dCfQNEry9/XC7MQgFJV1gLEPVK/jiyM1aGjrw61b52DRvGhpTbuLC8/NQefvkjg3NBuw92gt3t5VhlMi4DkwwDd1e5ISH/RlUJ8FWhfQz+zr64FVC+NYoO3MoAio5Ze0oK6xGzdcNgeXrUvB3NQweAm3kyO5PKjw0YhwL1PX8n3Ha/HWJ6WoaTCAsT8rF8bCz09/E1QU9GdBYzRQuHpJPJ5/swCMnRH+546uAbz8zhmUlHfgqktSkTMnAunJoTIjYibdHuQvp1x5Sp0jcaa+godONrBLYwZZuzROXq96RZcCTcNqcnEE+HvqtvraTEMuj73HanGqqBlbN6Ri85pkxEb5S7cHpeTZszC7SdwYqIplXWMPisrbcfBkPT7eW4lm4Y5hZg66PlN07H8mdCnQox2+vbEoKwr7jtWBmTmowNDrHxZj/4k6bFyZKFMgE0UQMT05TA5ryT/t5al9NqhJWMvDw2TQn0N1fTcq67pw6kwLPtlXpatiT45MzpxI+PuR9cwCrTuCAr2w+aIkFmgHgIJxtcLHS26PA8frsFKIdHZ6BOKi/ZEUF4T46EB5jVIs0Wsa031pkgnlYiv1q6mxa0NzLwpLW3E4twHVYh9YmB2HDSsSEBSgz/Q6Bd0KNF3olElAXYJNQxyZdwRIPMtruuQjONAbmWlhyMmIQEpCEEKDfBAd6S8b/442XnDHsIjk0XsUS5tGRtRQdEQsV6ZfUycdkzCVuw2DaGzpFY8+tHb0oUJ8Rv7ZFhko7jIMgHEsqO7G8oUxuutBaI5uvz1d0NER/mIoHYwzZe1gHAsSzSPCqqUHBYkod5riBinxwYiNDEBggKcM6NGFTC4QuuFSvW8KQlJ+'+
         'e5/wcVNK3JAQZypm1Cj8ydW1Qvxru2VGBjV4ZRwXqv9M16feOqiYo+vbE134l62fzQLt4NBEl2IRvKMHQRYz1QYOEVZ2gBgC+wkry9PLXS6nWYomEuiBISnMnULojeL9XM7IuaCgMf3GevY/E7oWaF9xYV+0NF6WxmTfo/NAIkyiTQ80g3ExqP8gBYwDde5/JnTdQZXS7RKiA8RwKhgMwzgGaUlhMjjsrnf/BnQu0ISvD7k5UsAwjGNw9cWpup6cokb3Ah3g5yHTefQeLWYYR4DcjquF29HXCQpp2QPdC7SbmxtiowIwfw43k2WYmWZhdqR0OzpqAS17o3uBpiBxgJ8nrrw4DQzDzCzXb8n4sjg/Q+heoOk+HeDnhdWLYhEe4gOGYWaGiFBfLM6OtsnUfmeFj4RglhhOhYf6YcuaFDAMMzOsEb7nsBBv6D33WQ0LNEZPh+BAL1yzJU02lWUYxr54e7tjw8pEBAX66D73WQ2r0ZfQtOGM5FBkpXGwkGHsDdUET0sKlnMTmK9ggVZBwYmrNnGwkGHsDZVciIsOYOeGGSzQKqiyXU5mhAxWMAxjH8JDfTAvIwKhwRykN4cFWgX5vmiK6TWb2YpmGHtx1cVpSIxl69kSLNBmkPW8blmCrEfMMIxtoetsw/IkRIf7y1rezIWwQJvhJoKFSfFBuGR1EhiGsS10naXEB3JwcAxYoM2gGabUYunS9SkI9OcZTQxjKwL9RwuVxcYEsPU8BizQFqCUu7SkEJmXyTCMbVi3PAGzE4NFcJ5laCz4yFjATRwV6n139SWp7ItmGBtAo1NKaU2MCZK9JBnLsECPgYfH6MSVSy5iXzTDaM3GlQlISw4Z7SPJjAkfnTGQvuiYQHmXD+MiSgyjGSFB3ti6MU2mtHJZ0fFhgR4Hd+GLTk8JkXmaDMNow6XrZiM9OVjGepjx4SM0DnRzj4vyx2VrUxAV7g+GYaZHVLifGJWmIiU+hFPrrIAFegJmzXKTvrLbr54LD08+oRhmqnh4zMJt4jpKF9eTmzsYK2CBngAKMEeKu/7mNUnITAkFwzBTIys1HFvWJiMm0p8zN6yEBdoK6FSiySs3XzFXtsdiGGZy0HVzxzVZSI4LBmM9LNBWEhTghZULY7FmSTwYhpkca5cmYOn8aPj7crfuycACbSWUDpSSEIzrL89AZBiXI2UYa6HA4C1XZSJJXD88pXtysEBPAgpyzE0Nwy1XZMLbi6McDDMRNI2bAuxz08LgwVkbk4YFehK4u7nJ5PqrL0nH/DkRYBhmfDJEYH3rhlTERHBgcCqwQE8BKkd69SVpcujGMIxlqN7GLVfORWJsIJipwQI9Bbw83XGRCBZesXG27EbMMMyFUI2Nretni+skDl7sDpwyLNBTgGYYUrL9JRelYNHcKDAMcyFzZofJwCBdJ+'+
         '5cb2PKsEBPg8XzInHdlnTERweAYZhRqPnrt26Yh6z0cDDTgwV6Gvj5eGLtigQh0hncfYVhBD7eHrj1ikysFi5AH3ZtTBsW6GkSF+mPTasSsWZZvEzDYxi94uY+CysWxuKKTamIifTjnGcNYIGeJnQSLsyKklZ05mwe0jH6JTkuCPfdMl+6NjilThtYoDWAyiauXhyLW67MRBz7oxkdEiL8zvfdkoPF2dEcFNQQFmiNIB80tce64dIMhARxBxZGP/j5ekq/84bliSIuw7U2tIQFWkNihT/60nUpUqh9vflEZVwfL0832V/wms3piIny5xZWGsMCrSHkj6Yp4DdeloGlOVHcMYJxaUiMczIjcP9tC5CVFsauDRvAAm0DlsyPwW1XZclkfYZxVZJiA/EP31yMeelcl8ZWsEDbABr2rVuegNuvmosErkPAuCARob74/l1LsGpRHDw8WEZsBR9ZG0FBw8uEP/q2KzMRHMiTWBjXgTI2bhZBwYsp1sJBQZvCAm1DqJfhFZtm49K1KQjw51ZZjPND5/EVG2bLbKWgAG8wtoUF2sZQD7brL5uDZcIvTRW+GMZZofOXzuOrLknD7MRg8FwU28PjExtDmR3Lc6IxMDhfPIZxLL8RJtMIGMaZUMT5nptzsCInhtPp7AQLtB1wdxdBw2XxGBkZwdDQCE6eaZb/MowzQG2rqKzut2/NwZolcSzOdoQF2k7QSb1hRRLOCV1+4qVcnCpuYZG2E9SRfSx/aXfPgHgMnn+eEPNV1k1to+Fr64/3Or1m6T3ODGVoLMiMxHduXyjO30QWZzvDAm1H3IQLetPqJPn3n4VIn2aRtgs/+NYSGahVowj2I7/ZjU/2VX25zAsPi3VXLoqVz//w/Am88WHJ+feQAKtff+Q3X+BwbsP51x77yQb8SCxzFZEmyzlHiPODdyzCxlUszjOByx3xcwI4OLSHuw9Vnxdp9knbn98JMT0kxFURYBLnn31vNV4XzxXRffn3VwmRPj7m8z3bb8MdP3xfCrL6b1eAfM5kOT/0DSHOK51HnGe5WI1TtqBnADqFNqxMkn88te0UThY2sUjbERJjgtwbCmRlf7yv8rz4ToZR10YPXAUSZ6pK953bF7BbY4ZhgZ4hyN2xYUUCPEQA8antp3DsdAMGWaTtAlnKZD0rrg3i0ccPXbCO2tc8ES///kqXsZ69Pd2xbEGMrK+xdikHBGcaFugZhE7+i5bECl/fLPzlFXccOFmHgYFhMLbDkvWsRhFm8icnxFxY27tOCDC9Xhczai27ktVMULuqtcvj8e1bFmDpvChxfnLe/kzDAj3DUArespwYeAnLhWrpfiZ808b+ITC2wZL1rMY8SKh2eVBQkHzXtA5BVjOhCPVEGSCODPXXXLEwBj+4azGy0sLlecnMPCzQDgClMi0SPr8f3usN08gIDh6vQ0/fEJwg3ulykAgrkBgT6kwO9euEEhwk1Fa3OsPDkaGYmr+'+
         'fB9YvS8D37l6CjOQQFmcHgn8JB4FGk2lJIfiPH6zGdVvmIDLUl+vrzjAksjdePue8RW2OOjhIfmhKsVt/23b5+J0Ua8euZEjnV0SYj+yn+a/fXcXi7ICwBe1gxEQE4CcPrkBslB9e+6BEDpU5w0MbxvM/f/XaIKzFmYODlKlBN5Cbt2bim9dlIcCPKy46Iny7dECohCNNDvjenaP+QB9un6UJ4/mf6TWyltXIgOAY4uvMqXXUjm1eRgQeFi6NB+9YyOLswPCV78BcfXEaoiJ88fT2PJwsaEIv+6VtRpewqu+5ab60oBXfMQUD1RNX1JjPGiSxjldlfTiieJO/OUD4m1cuisODty9CzlzuhOLo8ExCB4cq4NU39+C51/Ol5dfWaeTp4VPkp99bJcV2rAwOgnzHlqZyW1qPsjzU7g2aaagECR3N9UGBaOqCcvmG2Xjg1gWIDPNzyZ6ZrjaTkAXaCSBBJqF+8+OzeOW9YpTXdKJ/gFPxGOsgF1l6cjDuuCoLN2ydI1M6XRUWaAfHFQVaYdA0jCOnGvDXV/NlydJuwwAYZixoIlSAvxdWLIiR1egWZkXKmauuDAu0g+PKAk30Dwyjvbsfr7xbhNd2FqOxtRcMY463lzuiwv2wYWUivn/XYoQF++gihY4F2sFxdYFW88EX5XhGWNP5JVwRjxll1Gr2REp8ML59Sw6uEoFmPcEC7eDoSaDJL93c1ocXRABx554KNLawNa1nyNccFeaLtcvi8dA3FiMy3Nel/c2WYIF2cPQk0Ar0lSkz4ZlX84Q13coBRJ3h4UHpc95ITQyWufPrqbg+9AkLtIOjR4EmjEKUDT2DeOW9Iry9qwxVdV0YHuGcaVdG1tHw9UB0hL9Mn7v35hwEBXjCXcdV6FigHRy9CrTCgBDqM+Ud+NuOAuw7VouWdiMY18Pb2x3hwb5YPC8KD35jIeakhMkWVXqHBdrB0btAE6OW8znsOVKLv2w/jTzh9ujtM4FxDfz9PJGRHIoHbluAS4XlzLL8FSzQDg4L9FdQZseAaRjb3z2DV3eWyLoSRvZPOy1UQyMuOgA3XJqBb1yXDS8vN/h4cbUGNSzQDg4L9NehbA+q4Pb8mwUyNa+xuY8DiU4EZWfERvpjq7CW775hnpx8QgW1mK/DAu3gsECPDYky1fJ4cUchPtlXiabWPu7e4sCQCMdE+GHLuhQpzKHC5+zjpa+0ucnCAu3gsEBPTJ8Q5fYOI7a9W4SP9lagub0PPb3so3YUyMccLYR567rZwpVBwuwtZwYyE8MC7eCwQFsPCbXRaMJbn5TitQ+K0dxmhEG4Qjg9z/64f1k3g6ZnU4eTm6+YgwAh1FwLfHKwQDs4LNCTh3zUpMn7jtTiye25qG3ogaF3kP3UdoAEmIQ4MS4Q37wmG5cKdwZpjJ8vC/NUYIF2cFigpw4dOTp8p4ta8Le3CmT3EUrP6xNW9tAwH1at8HCnRq1eUoRXLYzFHddmY1F2pMy6YYt5erBAOzgs0NrQI4TZ2G/Cy++'+
         'cwZsfnUVNg/P13XNUEmMDccc1WbLFFqXOkc+Z0QYWaAeHBVpbaPo4NRgtqejAtveK8MHuCotNV5nxoaa0Wzek4s7rspGeEiIvPE+dFTKyByzQDg4LtO0gvzT5S08JF8gLbxbgi8M16OxmsR6LkEBvrFuegGs2p2HT6iT09JgQFMgNWm0JC7SDwwJtH/oHhzBLHOliYVnvFFb1pwerUFbVCb2TlhiCi9ckCWs5BXNTw2UANtDfS9ZpZmwPC7SDwwJtX+hom4aGMSgCXBRQ3HesDp8drMaJ/EY0tfXB1YkK98XS+TGyMP6KhTHw8/GEl3AJ6aF7iSPCAu3gsEDPLCMj50SAcVB2kSb3x4n8JuzaV4XTxS2orOuGs5McH4QFmRFYtyJRFsZXWkmRhcw28szDAu3gsEA7FvRrDAh3COVZjwyP4GxlB04UNiO/uA0lle2oFqLda3S8WYyUApdCYjw3CssWxGBeegSS4gJBpZbdxH+o+aprSYFrwALt4LBAOz5DQqh7RMCRzj5vTw/5d02jAeXVXSgub5d/Nzb3yFoh7cIKN5mGoTWUQREW7C2L3cdE+iMpNhCZqWHISg9HXFSATH2ji8OdhdipYIF2cFignRuaZk6CTK4SslTd3cnHPYLunkH5IDGniTOjedpDMlg5ODiCIbEOCf+I+PnppKb3UrEhyqSgWhbB4t8gf28EBIxOEKHi9nSmDIv3kHuCXDJurMRODwu0g8MCzTD6xdUEmkPNDMMwDgoLNMMwjIPCAs0wDOOgsEAzDMM4KCzQDMMwDgoLNMMwDMMwDMNMhlmcN8wwDOOYsIuDYRjGQWGBZhiGcVBYoBmGYRwUbiHM6J7m7gHsKWlDfk03Slt60WIYlMtjg30wNyYAazLCkJMYhBBu7srYGQ4SMrrFNDyCU1Vd2HakDg1dA2gSj+5+E3oHRsub+nm5I9zfC7GhPpgfF4iNmeFYlhoKhrEXbEEzuqSzz4Tihh68sL8GXxS3gqwUc1OFhLp3wIiaDiPONvagvKUPft4eSInwlf+ORV1dHV5//fVxP//GG29EQkICbMEnn3yCoKAgrFy5Es7Ac889hy1btkzqeBw+fBjd3d3yfRNte9WqVcjKyoIzMiWBbm7twoFDxTiVX42yyka0thrk8ujoYGTMjsG6NdmYn52I0GB/MIyjQTWna9uNeCe3EZ8XtU64Pgl3e69Jrpsa5YcblsQhOcId7mM0gq2pqcEf//jHcQWSxIgqY8bHx0NrSKBpu84i0CS2k93XQ4cOoba2dkKBfv755+XNShcCPTg4hMPHz+Ivz+9CTV0b6urb0dnVh55eo3w9IMAXkWGB2HvoDJYsnI3LNy/GutXOeWAY18XQP4TjlV1SoCcLWdzz4wMRE+ItXSBjQQL58ssvj/n6HXfcIQXm4Ycfht558sknwVjGaoFu7+'+
         'jB6YIqPP7Uh/hg10nZ8cIcg8EoHxXVLcgvrEVxSQMC/H2QkRorxNvHqs+hIQkNXdRM9SQ+c+YMCgsL5XCSYRQOlXXgYGk7hoYnH36h9+wqaEVimB/mCaHWkg0bNkjRVlNWVnb+7zfeeEM+SPjT0tLOL7/hhhvwu9/97mvbICtevY0f/ehH8v1qXnrpJekCsMQf/vAHad1autHQZ9BnffHFF3I0QOsqn6fw2GOPXXDt0T7T57355ptyP+gmtmfPHrmd3/72txfsh/r7EWRhj7cfCj/4wQ8m1AvzbSv74YhYJdDUFqiiqhnb39iP9z8+MeH6FHdsbeuW62ZmxOKu2zciPTVmwlb0NGyh4Zml5fPmzUNg4OQuCPrxWKAZc0qbelDa3IOpUlDXjVbDgPhLG4Gm8/Qb3/iGFClzPyyJD4maspwEUxFGBVpGFjkJGK376KOPStG55557zq9Dr9N1QAKmhkSbDBn1upPlwQcflC4E9T4RJNh0/f3sZz87v+yhhx7CT3/606/thwJd6z/+8Y+/ti1L33vXrl3S369eRsL/yCOPnL9hqVGOs/m2FZFXH2dHwSqBbm7txuf78vHSK3sxWf741AfIyIhHZGQwwkIs+6QNBgMKCgrkD2PpINHBox/00ksvvUCkza0NQv1euiObWwf0WV1dXRcsCw4OnrT4M85Lp3FIPqZKS+8gega0bWRL5zKdu+bnvvk5TkJIYqpej8RLWY+Wk8+VHup1vvWtbyE7O9uiAJmPWBXoeiPMBY8+j4KgZCHTtUPbpn+t2TatS9bwWEJI+0jXuqXjYM2xIEi0x0I5zpaWOyJWCfTBw8XYd6BYNuWcLNTM8/Mv8rAgO0kI9GyL65A40518rGEG3fEs+ezobjjekPDjjz8+PyRUePbZZyccijGuTb9pWD6m/P7BYZmiNx5kCJi7E9SQSJEYqaHzlYRuPEh4p3KuKmJL4kVWqsJY4kyQAJIxQ9eLWqDpmiORVpYpRpD5tmk98yDoeOJMqL8fHQ86jsq2zKFtTxQktIT57zLeMZhprBJo8j3nFVZjqhw5XioCim0ycDhV1CJr7v9SQ/4lS8sJEnk6QdQiTtDNgQM2+sHDzQ1eHm4wDk7e4CC8PNzhOYG7ji56tRDQcxIwJZuAhvnmAk2+WRIoNXS+TiTa1qKk/5G4qpeNB3027YPiZqTvQdeKedaFIs7q72xJoK2FtkUZGApaiqilG6eWx1lLrBLozs5etLUbMFWaW7rR2zsAraCTeCr+IroozC8ARn+E+nkgyMdTCPTUzslwf0/4eI4v0OZZHOoA31hQNoMtfaAUyKP4kHofyGgZD7qhKEFJJcBH2zD38SrCr942GT5TnQen+IqV40GCTcu0YLzfwNGwSqAHBoeEq2LqQ8KBQROGR6ZmrViCRFYZVtHwi/JOrUGxWBQfmgI9ZxeHfsiMDcTcmB40dU9NoBcmBiMm2LqsJAU6v0i0SejMR3D2QInj2OI8V0amWgifIsQzcYwcEauKJfn7e8t0uakSFOQHby/t6xhQSh7doZXgijXWB4kxnQTq97BVrS/mxvgjJykIblMoFUaejaWzRUAsdPLXAxkIZIWSoFF2gzUosRdbQNumDA5roP1WUuOscQVSYNFSRtZUoGuWMlMsLacMkulC7hNbHufpYJUFHREehNjoUHR192EqJMSFISTED9OBTmjyESk+LSUlz9yXZx4ANN8GvY8EWZ1WNJEfjnEtYkJ8ZW2N1Wlh2H+'+
         '2fVLv3Tg3AtlxQfD3nvwkXGXkR8JC5y4FwMjypOVk3WrpG6XPIJcGQYJK2RMkQMoyZdvWihLtN11b9K+5IURWufm2aZ2p+J8TExPlsVBviyBXi/nNRJkhaL7uWKME5Tibr084tQ96flYicjNiUVxah8m6lGbNAlYsSUdszNhFZpQUnfFSYChgoKTVqPMZlfUtpc+ZQ3dh+iHU4kzbovfZYsot45iQ/zg7PhB3rIxH38Awcmu6xj+vxTkc5uuJ5Ag/fOuiRCSH+8LDfdaYq5PIjJddQIKpnpBFwkHLfvGLX3wtGKb29dK5bmlKNC1Xfx6tQyNLtfjSOU83AHWWBW3bPB1vPOgzLF0nJIh0w6GsC4Wf//znX9suTaixNFrdvHnz+eWKhU4WuALdFG666aYL3qOkDNI+0XFToGwV9bGgbSv7rBxn9baV5epcbUfCqmp2NIvwpdf24l//82WZNjcZPD3d8fwT38VllyyCv5/3mOtNlJmhnvFkaV11EEFZbh6YUXxl6iGaMvPKmhlIjGtBxZCoUNL/fFSGbuOQTJ0bHD53PrBFtTY8xCPA2x0pkX64fWUCrlgQDYaxF1ZZ0GGhAbhcCOxAvwk/++UrmAx/+M09uGhF5rjiTJCgUmBgoumuY62rpM+ZT+NUQ0JNwxv1OiTm47lFGNfFXwgvCe7ipGDsKmzFkfIOFDcaZOlRIiGMXCFB2DIvAktTQhAe4AWGsSdWO9LIB33V1qVob+/B/z39gczKGMv2niWsjqT4cNxw1Ups3bJYCry10HTXqayr+I8mSr+j4Zh6mEjrkn+OA4X6JTLIGzctj8WVC6NkrY2hL+vMkPVMrgxfr4nznhnGFkyqYD9Vs6uuacEHn+bi6PEylFY0iuet6Ozqla9HRgQhMUFYG4tSsTgnWVrO6WmxmCmsyT1lGIZxVKbUUYWyOUpK61FV3YrG5k5ZwY4ICfGXlvbcOXFCqMOFW2PqqXnTQR2AIQuZc5wZhnFGXLLlFeVGKt0WplOli2EYZibhnoQMwzAOCkc+GIZhHBQWaIZhGAeFBZphGMZBYYFmGIZxUFigGYZhHJTJl+RiGBdjZGQEfX19GB4ehslkks8Jd3d3eHh4wMfHB15eXpg1axYYxp6wQDO6p62tDQcPHkZ+fh4qKirQ0tIql8fERCM9PR2rV6/GvHnZCAkJAcPYkynlQTe19WH3oWqcLmpBaWUHmttHZxLGRfljblo41i1PwKKsSIQEzcxMQoaxBqPRiL179+KJJ56S1vNYl4KbmxsSEuJx7bXXnG++'+
         'yjD2YHK1OEzD2He8Dk++lIvWjn50GQbQZzTJ5YSPtwcC/D0RFuyDOalhuHZzOi5elQSGcTRaWlpw5MhRvPTSy+jp6RFLzo1d/Et6NmYhICAADz30HSxatAiBgYFjbptK3/74xz/GeDzxxBNfaxqrFVT3nGog23MWLZVXoIYYSv1qKu1Lnz+Vrtv2gGYbm9eGd8R9ttrF0Sys5lPCYn5qWy5OFjRbPJmN/UPy0dJmRHW9AXWNBvj7emJ+RgT8/cZueUWdEp599tlxP59qNduqoSYVVKJqdlr+MEpRcKoDQr5LKmauFAWn8qbUfMBRT15Xp7+/H0VFxdi161PZ6GEiRs/1c3Ld99/fifDwCGRkpMPTc+xzmkoNULefsSBBMy8urxX02ePdQGyB0rVcgf7WshO31tC+me8fVbVUuq47ClYJ9ODgMMpruvDeZ2U4kd9szVukUNO6Oz4qQahwdaQlhYigi+UgC3U02bVrl+x+MBYkonRC2+IAUnsgsji0uFiU9vPjYe+Lh7kQqiFO1l55eTkmy5kzRTh9+hQiIsIRFRU15nr0G49XpIvOZ9oH9TmnLvKloG4iQYYMvYe2q27bRJa4sh3FklW3oFK2QV1PzHsh0rasMXzM20SZt41ToP1Xvgd9ntIlSTkW9L3N673fe++9568Jun6oobO66wx9P3ooy9XbsLQfyjbUqI8RfRfl/fS3sg16H3XDIT2g1y39fsr3U46p0uNUjZY6ZZVAN7f3Yd+xWuzcPfkT+o2PzmJ+ZiRCg70RGTZ2X0L6gcxbuatR2sOrvzidbOYntNJ1hSCLhw40vUd9EKl2tLId5WQmT4+yjrIN+sHMO4bPmzdvTIGl9clSpiEm1aUm6AenE0DtSbLU/2yi78Jox9mzZ1FScvZ8tsZkoPfk5eUjJydnXIGeDIqYWWokqxgmdM7R64pQWuolSAJEy5XzSL0OnZck8Obvm8jwUQwOS5+n3jc1yrpkeKnfpwir+bZo35Tt0PVGI0wSdeV40N/q5ebbUO+HchMbq9eicoxIG+g40d9KLXhqq0d/0zIS3rEEmvaDBHqsY0rLaT1L7ckmi1UCfTy/SQYEh4cnX1eJ3rPnaC3mpUeMK9CThQ4KCaF5w1d1wX46UHS3e/LJJy/wCa5YseK8y4S2QQeZHkeOHJGvU5cV2j79EPRDqaHWWJZOSuXzlO4syufRMJd+LLqw9uzZI5cpvRGVu7A134XRjubmFuGDtm4kaIn6+nohPtoN3+n8+NGPfjRmuzc6V5TzjYSFzjFaV4EEivrykfiQG43WMe++'+
         'TeJDVqJ5WzdLho/5vpl/HqG0nVPvG0ECR4YWvUZ9BNUiR9+RzmnzfaB1aX/VBgl9pvr8V4wnWk6NOtTXjno/aD26ZumaV6M+RrR/ltrfqb+Dsm3176EYfMoyGvXTcTM3LOl7kgVvN4EurezE2aoOTJWisnYRVDRCKybqX6heTsJL66rbZtGPRT8QCSYV86cDan5CU39DEuPHHnvsgu0r7dkt/bB0AdAPpjS0VX/eVL+Luhcjow1k2U1HYNvbO6Qfeyag82sqDSim2rSCPs9cnO3BWJ850b7QNTjd4KhyHZvrBhlgakPLXBtsgVUC3dZpRFvH1E/IptZe9BoHMRPQXWwqB5KE0R5tsEiULYkz49zQaGi8/piWbrwkCLaGjAUySNRYa+mRcWI+opwsSmNne2B+/C11JNcCdcNqBepgrgVWCfTIyDlMp2w0vX9kgrfT8EEZblnCvJcgYX6ijcVUxE95D52Q6gAJWeRaDF0sfRa5Y8gXydgWSpcLDAwSVnQnpgJNWKHZheNBN3dKpVOg84h+WyWzw1KKHRkSlkREq5u3EkBU4iMEudasga5NugZpVEnQ9UqpapOFvr8ld4qWKYd0jZI7Q/096fiPN5K1tD/0fvretM/0fjp2Tz311AXr0TZJoNWfRe4krbBKoCm3OcDPE12GqVnBlMXh4+U+4Xpqf5VyQJThComi+YlKWR/mwTbahvmyqaIENdT7ZR7N1go6oeiiNj8GjPbExsYgOjpqygKdnJwszrHxR1fkD1VbyMq5S+fUWMFwS+e4VqjPL/V+TTRKVFJgFQNJ2b+xgnATQeJsS5edEmw1/57m8Z2JoONC7yfLmPzwdBwI9c2F/OFkuFJMSv1Zb775JrTqg2KVQMdGBiBGPLoM7ZgKCbGBCPQfv2W9eVoSnQjKlxwrXYkOjK1OaPI3macIEZO5C1uDEsFXWnSpf2hrRwjM5MjIyEB1dQ1KS0snnclBswqzs+ciMjJyUu+j84iCZhQ8opv8ZNLb1GloU4UCWmT9qs8vJd1svBEh+etJcNQ3FRIr8zS26UCWPZ37WlzLJM5k2KhjRHR90fU8FeiYKWm45lY+Wc507MxTJWkf7Jpml54SinkZ4SipaMdkbww0C2vh3Agp0pOBvjjdxejOTwdnvPQ2NXTQrF13PH75y1/KH0ctzrRtrZPvLUXwafhYUFAAxjbExcUhNTVVTt8moZ4M9BtlZmYiNDQUk0UJRNOwmbZDE5gUlwad75ZS0EgcSKAnC21HnTaqCIY63ZS2PdFEHRqN0r6Zv0+'+
         'xKK3ZByWtlbZjaZ4ACahWbkMlDU/9GbR9Sxa0+TGyhPJ7kQ6Yz5NQBNv8s7TUCKsEelF2JBqae2S6XGv75LIxwkN9sWpxvLDC/TFZlIg1BU/M09uUH8IcSm8jf9BkBVrJiVS2rVw46s+gbdNzrWd/mX8X+nuiqcLM1PHz88OiRQsxODh4fqr3RENSb29vWdHutttukS6O8WYRkiCNZw0qmUN0zpELj9alZSQE5kKizlogg8WSS4KWqT+PnpNQqNNGKe2M/M1KGqiynPZjPDeH+hpUINci+cvVgTHzfaPrhyxvetA26POV723uulOn04117MY7purlJKQknGr/OPmQ6Zol61b9HtoPOkZKih/9a+lY0LqWltN2aZvqa5W+C/mgtXJxWF2Lo6K2Cx/tqcBjTx/FZPj1I+uwaVUSosLHzoGmOxD9cEr6iiUs5S3SSWMu0ubpdPQwTzGiZep0GfpstetC2Yal5ePlTyrfhU5c8/1Qf95E34Veo33mNDvbwsWSGEfHaoE2mUbQ0d2PNz8uwX8/c+zLzI4xNircGjS1+4bLM3DntfPg5ekuLI7xewOYJ4Wbowwb1HcySxa0ehvKfHvz7ZovN5+XP95yS/sx0Xcx/zxLAm3+XRSreiyridEOKpzE5UYZR2TS1ew6uwdwLK8RR083oqC0DdV1XWjrHM2RjgzzRUpCCFYtisXieVHInB02ruWsVyaywhn7Qq4O8sWSq4MmoFDRfoLcGr6+vtJd5u/vL4v3M4w9mVI9aEPvIMqqO1HbYJA+aUPfaPpdcIC3FOT0lBDERQfCz4dPaAWlyIoCuS20zqdmGMa1mJKCUsrcoqwo+WCsR3FjUGDIVrWAGYZxHaZkQTMMwzC2h7t6MwzDOCgs0AzDMA4KCzTDMIyDwgLNMAzjoPw/XXDB2aYNeAsAAAAASUVORK5CYII='

         var doc = new jsPDF()

         doc.addImage(imgData, 'PNG', 25, 21, 50, 9) //Logo
         doc.addImage(grafico1, 'PNG', 70, 155, 70, 60) //Grafico 1

         doc.fromHTML($('#pdf-title').html(), 140, 18, { //Reporte del perfil
            'width': 170,
            'elementHandlers': function() {
                return true;
              }
        });
        
        doc.fromHTML($('#identificador').html(), 155, 38, { //Identificador
            /*'width': 170,
            'elementHandlers': function() {
                return true;
              }*/
        });

         //Código para importar todo el contenido de 'pdf-container' y enviarlo al pdf
         doc.fromHTML($('.pdf-container').html(), 25, 50, {
             'width': 170,
             'elementHandlers': function() {
                 return true;
               }
         });

         doc.fromHTML($('#pdf-title-retorno').html(), 25, 230, {
          /*  'width': 170,
            'elementHandlers': function() {
                return true;
              }*/
        });

        doc.fromHTML($('#pdf-result-retorno').html(), 65, 230, {
           /* 'width': 170,
            'elementHandlers': function() {
                return true;
              }*/
        });

           doc.save('sample-file.pdf');

        });
    });

/*
function Modal() {
  var modal = $('<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"></div>');
  var modalDialog = $('<div class="modal-dialog modal-lg" role="document"></div>');
  var modalContent = $('<div class="modal-content col-xs-12 center-block text-center"></div>');
  var title = $('<h3 class="">Has digitado el número</h3>');
  var number = $('<h3 class="blue" id="id-cliente"></h3>');
  var div = $('<div></div>');
  var btnIniciar = $('<button type="button" class="btn btn-lg init" data-toggle="modal" data-target=".bs-example-modal-lg">Es Correcto</button>');
  var btnEditar = $('<button type="button" class="btn btn-lg editar" data-toggle="modal" data-target=".bs-example-modal-lg">Editar</button>');

  modal.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(title);
  modalContent.append(number);
  modalContent.append(div);
  div.append(btnIniciar);
  div.append(btnEditar);
  return modal;
}
*/
function SeleccionarCliente(update) {

  var container = $('<div class="vertical-center" id="form"></div>');
  var row = $('<div class="row"></div>');
  var h1 = $('<h1 class="col-xs-12 text-center">Vas a empezar a perfilar a:</h1>');
  var containerCards = $('<div class="col-xs-6 col-xs-offset-3 items-container text-center"></div>');
  var cliente = $('<div class="card"></div>')
  var imgCliente = $('<img class="card-img-top" src="assets/img/Vector.svg">');
  var titleCliente = $('<div class="card-block"><h3 class="card-title">Cliente</h3></div>');
  var prospecto = $('<div class="card"></div>');
  var imgProspecto = $('<img class="card-img-top" src="assets/img/Vector1.svg">');
  var titleProspecto = $('<div class="card-block"><h3 class="card-title">Prospecto</h3></div>');
  var inputGroup = $('<div class="col-xs-6 col-xs-offset-3 hidden-on input-group"></div>');
  var input = $('<input id="documento" type="text" class="text-center" maxlength="8">');
  var linkSubmit = $('<a href="#" class=""><img src="assets/img/circle-arrow.svg"></a>');
  var spanError = $('<span class="col-xs-12 hidden-on text-center">Este campo es obligatorio</span>');

  container.append(row);
  row.append(h1);
  row.append(containerCards);
  containerCards.append(cliente);
  containerCards.append(prospecto);
  cliente.append(imgCliente);
  cliente.append(titleCliente);
  prospecto.append(imgProspecto);
  prospecto.append(titleProspecto);

  row.append(inputGroup);
  inputGroup.append(input);
  inputGroup.append(linkSubmit);
  inputGroup.append(spanError);

  cliente.on('click', function(e) {
    state.cliente = "cliente";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    input.attr("placeholder", "Ingrese código de cliente");
  });

  prospecto.on('click', function(e) {
    state.cliente = "prospecto";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    input.attr("placeholder", "Ingrese número de documento");
  });

  linkSubmit.on('click', function(e) {

    if (input.val().length != 0) {
      $('#id-cliente').text(input.val());
      linkSubmit.attr("data-toggle", "modal");
      linkSubmit.attr("data-target", ".bs-example-modal-lg");
      spanError.removeClass("hidden-off");
      spanError.addClass("hidden-on");
    } else if (input.val().length == 0) {
      linkSubmit.removeAttr("data-toggle");
      linkSubmit.removeAttr("data-target");
      spanError.removeClass("hidden-on");
      spanError.addClass("hidden-off");
    }

  });

  $('button.init').on('click', function(e) {
    if (state.cliente == "cliente") {
      codigoCliente = input.val();
    } else if (state.cliente == "prospecto") {
      documento = input.val();
    }
    tipoUsuario = state.cliente;
    state.screenView = "Iniciar formulario";
    console.log(state.screenView);

    update();
  });


  jQuery.fn.NumberOnly = function() {
    return this.each(function() {
        $(this).keydown(function(e) {
            const key = e.charCode || e.keyCode || 0;
            return (
                key == 8 || key == 9 ||
                key == 110 || key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
  };
  input.NumberOnly();

  return container;
}

function Description(update) {
  var container = $('<div class="container"></div>');
  var h1= $('<h1>'+perfil+'</h1>')
  var div1 = $('<div class="grafico"><img src="https://d500.epimg.net/cincodias/imagenes/2016/08/19/mercados/1471614030_865280_1471702913_noticia_normal.jpg"></img></div>');
  var p1=$('<p>Puede tolerar el riesgo, pero valora su dinero, le gusta saber con certeza cuanto genera su inversion.</p>');
  var btn = $('<button type="button" class="btn btn-primary">Hágase cliente nuestro</button>');

  div1.append(p1);
  div1.append(btn);
  container.append(h1);
  container.append(div1);

  btn.on('click', function(e) {
    state.screenView = "register";
    update();
  });
  return container;
}

function Profile(update) {
  prueba();
  var container = $('<div class="container"></div>');
  var div1 = $('<div class="profile"></div>');
  var h1= $('<h1>El perfil del cliente: </h1>')
  var h2= $('<h2>Su perfil es: '+ perfil +' </h2>')
  var h3=$('<h3>Te sugerimos este plan de inversión: </h3>')
  var div3 = $('<div class="informacion"></div>');
  var img = $('<img src="assets/img/chartpie.jpg">')
  var span1=$('<span class="texto"><i></i>  Rentabilidad:4.3%  </span>');
  var span2=$('<span class="texto"><i></i> Mejor Año:27% </span>');
  var span3=$('<span class="texto"><i></i>Peor Año:16.09%</span>');
  var btnReviewPerfil = $('<button type="button" class="btn btn-primary" id="reviewPerfil">Review perfil</button>');
  var btnRegister = $('<button type="button" class="btn btn-primary" id="enviarMail">Generar pdf</button>');

  container.append(div1);
  container.append(div3);
  div1.append(h1);
  div1.append(h2);
  div1.append(h3);
  div1.append(img);
  div3.append(span1);
  div3.append(span2);
  div3.append(span3);

  div3.append(btnReviewPerfil);
  div3.append(btnRegister);

  btnRegister.on('click', function(e) {
        //console.log(state.cliente);
    var doc = new jsPDF();
    doc.text(documento, 10, 10);
    doc.text(perfil, 10, 20);
    doc.save('perfil-cliente.pdf');
  });

  btnReviewPerfil.on('click', function(e) {
    state.screenView = "question-1";
    update();
  });

  return container;
}


function Home(update) {

	var container = $('<div class="text-center vertical-center" id="home"></div>');
	var row = $('<div class="row"></div>');
	var img = $('<img src="assets/img/secundaria-vertical.jpg" class="img-inicio col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1" alt="Logo inicio">');
	var h1 = $('<h1 class="col-xs-12">Perfila a tu cliente</h1>');
	var inputGroup = $('<div class="col-xs-6 col-xs-offset-3 hidden-on input-group"></div>');
  var input = $('<input id="sector" type="text" class="text-center" placeholder="Ingresa tu sector">');
  var linkSubmit = $('<a href="#"><img src="assets/img/circle-arrow.svg" class="icon-svg"></a>');
	var spanError = $('<span class="col-xs-12 hidden-on text-center">Este campo es obligatorio</span>');

	container.append(row);
	row.append(img);
	row.append(h1);
	row.append(inputGroup);
	inputGroup.append(input);
	inputGroup.append(linkSubmit);
	inputGroup.append(spanError);

	setTimeout(function(){
		inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
	}, 2000);

	linkSubmit.on('click', function(e) {
		if (input.val().length != 0) {
			spanError.removeClass("hidden-off");
			spanError.addClass("hidden-on");
			sector = input.val();
			state.screenView = "Seleccionar cliente";
			update();
		} else if (input.val().length == 0) {
			spanError.removeClass("hidden-on");
			spanError.addClass("hidden-off");
		}

  });

	jQuery.fn.NumberOnly = function() {
		return this.each(function() {
				$(this).keydown(function(e) {
						const key = e.charCode || e.keyCode || 0;
						return (
								key == 8 || key == 9 ||
								key == 110 || key == 190 ||
								(key >= 35 && key <= 40) ||
								(key >= 48 && key <= 57) ||
								(key >= 96 && key <= 105));
				});
		});
	};
	input.NumberOnly();

	return container;
}

function InicioForm(update) {
	var container = $('<div class="text-center vertical-center"></div>');
  var row = $('<div class="row"></div>');
  var img = $('<img src="assets/img/Group.png" class="col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1">');
	var h3 = $('<h3 class="col-xs-12 col-sm-6 col-sm-offset-3">Es momento de compartir el dispositivo con tu cliente</h3>');
	var btnIniciar = $('<div class="col-xs-12"><button type="button" class="btn col-md-2 col-md-offset-5 btn-lg btn-blue">Iniciar</button></div>');

  container.append(row);
  row.append(img);
  row.append(h3);
	row.append(btnIniciar);

	btnIniciar.on('click', function(e) {
		state.screenView = "question-1";
		update();
	});
	return container;
}

var documento = "";
var codigoCliente =  "";
var tipoUsuario = "";
var sector = "";
var sumaX = 0;
var sumaY = 0;
var pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8 = 0;
var option1,option2,option3,option4,option5,option6,option7,option8 = "";
var idChecked1, idChecked2,idChecked3,idChecked4,idChecked5,idChecked6,idChecked7,idChecked8 ="";

var perfil;
var matrizLength = 4*8;
var matriz=new Array(matrizLength);

  function prueba(id) {
    for (i = 0; i < matrizLength; i++) {
      matriz[i] = new Array(3);
    }
    for (i = 0; i < matrizLength; i++) {
      for (e=0; e < matrizLength; e++) {
        matriz[i][e] = i +","+ e;
      }
    }
    comparar(0,7,0,4, "defensivo",id);
    comparar(0,5,5,12, "defensivo",id);
    comparar(0,3,13,20, "defensivo");

    comparar(8,17,0,4, "altamente conservador",id);
    comparar(6,15,5,12, "altamente conservador",id);
    comparar(4,13,14,20, "altamente conservador",id);
    comparar(0,11,22,28, "altamente conservador",id);
    comparar(0,9,30,32, "altamente conservador",id);

    comparar(19,31,0,4, "conservador",id);
    comparar(17,31,6,12, "conservador",id);
    comparar(15,25,14,20, "conservador",id);
    comparar(13,23,22,28, "conservador",id);
    comparar(11,21,30,32, "conservador",id);

    comparar(27,31,14,20, "moderado",id);
    comparar(25,27,22,28, "moderado",id);
    comparar(23,25,30,32, "moderado",id);

    comparar(29,31,22,28, "agresivo",id);
    comparar(27,31,30,32, "agresivo",id);
  }

  function comparar(valorxInicial,valorxFinal,valoryInicial,valoryFinal, parametroPerfil,id) {
    for (i = valorxInicial; i <= valorxFinal; i++) {
      for (e = valoryInicial; e <= valoryFinal; e++) {
        var valor = sumaX + "," + sumaY
        if(matriz[i][e] == valor){
          perfil = parametroPerfil;
        }
      }
    }
  }

function Nav(update) {
	var header = $('<header></header>');
  var nav = $('<nav class="navbar navbar-default navbar-fixed-top">');
  var container = $('<div class="container">');
  var navHeader = $('<div class="navbar-header">');
  var button = $('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">');
  var span1 = $('<span class="icon-bar"></span>');
  var span2 = $('<span class="icon-bar"></span>');
  var span3 = $('<span class="icon-bar"></span>');

  header.append(nav);
  nav.append(container);
  container.append(navHeader);
  navHeader.append(button);
  navHeader.append(span1);
  navHeader.append(span2);
  navHeader.append(span3);

  var navbarCollapse = $('<div class="navbar-collapse" id="myNavbar">');
  var ul = $('<ul class="nav navbar-nav navbar-right text-uppercase">');
  var li1 = $('<li><a href="#">acerca de inteligo sab</a></li>');
  var li2 = $('<li><a href="#">productos y servicios</a></li>');
  var li3 = $('<li><a href="#">mercado al día</a></li>');
  var li4 = $('<li><a href="#">servicio al cliente</a></li>');

  container.append(navbarCollapse);
  navbarCollapse.append(ul);
  ul.append(li1);
  ul.append(li2);
  ul.append(li3);
  ul.append(li4);

  // <header>
	// 		<nav class="navbar navbar-default navbar-fixed-top">
	// 			<div class="container">
	// 				<div class="navbar-header">
	// 					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	// 						<span class="icon-bar"></span>
	// 						<span class="icon-bar"></span>
	// 						<span class="icon-bar"></span>
	// 					</button>
	// 				</div>
	// 				<div class="navbar-collapse" id="myNavbar">
	// 					<ul class="nav navbar-nav navbar-right text-uppercase">
	// 						<li><a href="#">acerca de inteligo sab</a></li>
	// 						<li><a href="#">productos y servicios</a></li>
	// 						<li><a href="#">mercado al día</a></li>
	// 						<li><a href="#">servicio al cliente</a></li>
	// 					</ul>
	// 				</div>
	// 			</div>
	// 		</nav>
	// 	</header>

	return header;
}

function Question1(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:0%"><span class="sr-only">80% Complete</span></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+ state.questions.pregunta1.pregunta +'</h3>');

	var anchorA = $('<a href="#collapse" data-toggle="collapse"></a>');
	var divA = $('<div class=""></div>');
	var labelA = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.a.texto+'</label>');
	var inputA = $('<input type="radio" id="question1-a" data-option="a" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.a.valor +'">');
	var collapseA = $('<div id="collapse" class="collapse">Seguridad </div>');

	var divB = $('<div class=""></div>');
	var labelB = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.b.texto+'</label>');
	var inputB = $('<input type="radio" id="question1-a" data-option="b" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.b.valor +'">');

	var divC = $('<div class=""></div>');
	var labelC = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.c.texto+'</label>');
	var inputC = $('<input type="radio" id="question1-b" data-option="c" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.c.valor +'">');

	var divD = $('<div class=""></div>');
	var labelD = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.d.texto+'</label>');
	var inputD = $('<input type="radio" id="question1-c" data-option="d" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.d.valor +'">');

	var divE = $('<div class=""></div>');
	var labelE = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.e.texto+'</label>');
	var inputE = $('<input type="radio" id="question1-d" data-option="e" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.e.valor +'">');
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);
	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(inputA,labelA);
	form.append(divB);
	divB.append(inputB,labelB);
	form.append(divC);
	divC.append(inputC,labelC)
	form.append(divD);
	divD.append(inputD,labelD);
	form.append(divE);
	divE.append(inputE,labelE);

	form.append(btn);

	$(function(){
	  	$('form input[type=radio]').change(function() {
	  			btn.prop('disabled', false);
	  	});
	  });

	btn.on('click', function(e) {
		 pregunta1 = $("input[name='option-1']:checked").val();
		 option1 = $("input[name='option-1']:checked").attr('data-option');
		 idChecked1 = $("input[name='option-1']:checked").attr("id");

		 //option1 = option.slice(-1);
			if(pregunta1){
				sumaX += parseInt(pregunta1);
				console.log(sumaX);
			}
			state.screenView = "question-2";
			update();
	});
	return container;
}

function Question2(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:12.3%"></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+state.questions.pregunta2.pregunta +'</h3>');

	var divA = $('<div class=""></div>');
	var radioA = $('<label><input type="radio" data-option="a" id="question2-a" name="option-2" class="option-input radio" value="'+ state.questions.pregunta2.opciones.a.valor +'">'+state.questions.pregunta2.opciones.a.texto+'</label>');
	var divB = $('<div class=""></div>');
	var radioB = $('<label><input type="radio" data-option="b" id="question2-b" name="option-2" class="option-input radio" value="'+ state.questions.pregunta2.opciones.b.valor +'">'+state.questions.pregunta2.opciones.b.texto+'</label>');
	var divC = $('<div class=""></div>');
	var radioC = $('<label><input type="radio" data-option="c" id="question2-c" name="option-2"  class="option-input radio" value="'+ state.questions.pregunta2.opciones.c.valor +'">'+state.questions.pregunta2.opciones.c.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);
	console.log(option1);
	console.log(idChecked1);
	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		 pregunta2 = $("input[name='option-2']:checked").val();
		 option2 = $("input[name='option-2']:checked").attr('data-option');
		 //option2 = option.slice(-1);
			if(pregunta2){
				sumaX += parseInt(pregunta2);
				console.log(sumaX);
			}
			state.screenView = "question-3";
			update();
	});

	return container;
}

function Question3(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:24.6%"></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+state.questions.pregunta3.pregunta +'</h3>');

  var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" data-option="a" id="question3-a" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.a.valor +'">'+ state.questions.pregunta3.opciones.a.texto +'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" data-option="b" id="question3-b" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.b.valor +'">'+ state.questions.pregunta3.opciones.b.texto +'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio"  data-option="c" id="question3-c" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.c.valor +'">'+ state.questions.pregunta3.opciones.c.texto +'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio"  data-option="d" id="question3-d" name="option-3"  class="option-input radio" value="'+ state.questions.pregunta3.opciones.d.valor +'">'+ state.questions.pregunta3.opciones.d.texto +'</label>');
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta3 = $("input[name='option-3']:checked").val();
		option3 = $("input[name='option-3']:checked").attr('data-option');
		// option3 = option.slice(-1);
      if(pregunta3){
				sumaX += parseInt(pregunta3);
				console.log(sumaX);
      }
		state.screenView = "question-4";
		update();
	});

	return container;
}

function Question4(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:36.9%"></div>');

	var h3 = $('<h3>' + state.questions.pregunta4.pregunta +'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
  var divA = $('<div class=""></div>');
	var radioA = $('<label><input type="radio" id="question4-a" data-option="a" name="option-4" class="option-input radio" value="'+ state.questions.pregunta4.opciones.a.valor +'">'+ state.questions.pregunta4.opciones.a.texto +'</label>');
	var divB = $('<div class=""></div>');
	var radioB = $('<label><input type="radio" id="question4-b" data-option="b" name="option-4" class="option-input radio" value="'+ state.questions.pregunta4.opciones.b.valor +'">'+ state.questions.pregunta4.opciones.b.texto +'</label>');
	var divC = $('<div class=""></div>');
	var radioC = $('<label><input type="radio" id="question4-c" data-option="c" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.c.valor +'">'+ state.questions.pregunta4.opciones.c.texto +'</label>');
	var divD = $('<div class=""></div>');
	var radioD = $('<label><input type="radio" id="question4-d" data-option="d" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.d.valor +'">'+ state.questions.pregunta4.opciones.d.texto +'</label>');
	var divE = $('<div class=""></div>');
	var radioE = $('<label><input type="radio"  data-option="e" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.e.valor +'">'+ state.questions.pregunta4.opciones.e.texto +'</label>');
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	container.append(form);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta4 = $("input[name='option-4']:checked").val();
		option4 = $("input[name='option-4']:checked").attr('data-option');
		// option4 = option.slice(-1);
      if(pregunta4){
				sumaX += parseInt(pregunta4);
				console.log(sumaX);
      }
		state.screenView = "question-5";
		update();
	});

	return container;
}

function Question5(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:48.2%"></div>');

	var h3 = $('<h3>'+state.questions.pregunta5.pregunta +'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
  var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" id="question5-a" data-option="a" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.a.valor +'">'+ state.questions.pregunta5.opciones.a.texto +'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" id="question5-b" data-option="b" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.b.valor +'">'+ state.questions.pregunta5.opciones.b.texto +'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio" id="question5-c" data-option="c" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.c.valor +'">'+ state.questions.pregunta5.opciones.c.texto +'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio" id="question5-d" data-option="d" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.d.valor +'">'+ state.questions.pregunta5.opciones.d.texto +'</label>');
  var divE = $('<div class=""></div>');
	var radioE = $('<label><input type="radio" id="question5-e" data-option="e" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.e.valor +'">'+ state.questions.pregunta5.opciones.e.texto +'</label>');
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta5 = $("input[name='option-5']:checked").val();
		option5 = $("input[name='option-5']:checked").attr('data-option');
		// option5 = option.slice(-1);
      if(pregunta5){
					sumaY += parseInt(pregunta5);
					console.log(sumaY);
      }
		state.screenView = "question-6";
		update();
	});
	return container;
}

function Question6(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:60.5%"></div>');

	var h3 = $('<h3>'+state.questions.pregunta6.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var divA = $('<div class=""></div>');
	var radioA = $('<label><input type="radio" id="question6-a" data-option="a" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.a.valor +'">'+state.questions.pregunta6.opciones.a.texto+'</label>');
	var divB = $('<div class=""></div>');
	var radioB = $('<label><input type="radio" id="question6-b" data-option="b" name="option-6"  class="option-input radio" value="'+ state.questions.pregunta6.opciones.b.valor +'">'+state.questions.pregunta6.opciones.b.texto+'</label>');
	var divC = $('<div class=""></div>');
	var radioC = $('<label><input type="radio" id="question6-c" data-option="c" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.c.valor +'">'+state.questions.pregunta6.opciones.c.texto+'</label>');
	var divD = $('<div class=""></div>');
	var radioD = $('<label><input type="radio" id="question6-d" data-option="d" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.d.valor +'">'+state.questions.pregunta6.opciones.d.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta6 = $("input[name='option-6']:checked").val();
		option6 = $("input[name='option-6']:checked").attr('data-option');
		// option6 = option.slice(-1);

			if(pregunta6){
				sumaY += parseInt(pregunta6);
				console.log(sumaY);
			}
		state.screenView = "question-7";
		update();
	});

	return container;
}

function Question7(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:72.9%"></div>');


	var h3 = $('<h3>'+state.questions.pregunta7.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" id="question7-a" data-option="a" name="option-7" class="option-input radio" value="'+ state.questions.pregunta7.opciones.a.valor +'">'+state.questions.pregunta7.opciones.a.texto+'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" id="question7-b" data-option="b" name="option-7" class="option-input radio" value="'+ state.questions.pregunta7.opciones.b.valor +'">'+state.questions.pregunta7.opciones.b.texto+'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio" id="question7-c" data-option="c" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.c.valor +'">'+state.questions.pregunta7.opciones.c.texto+'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio" id="question7-d" data-option="d" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.d.valor +'">'+state.questions.pregunta7.opciones.d.texto+'</label>');
  var divE = $('<div class=""></div>');
  var radioE = $('<label><input type="radio" id="question7-e" data-option="e" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.e.valor +'">'+state.questions.pregunta7.opciones.e.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta7 = $("input[name='option-7]:checked").val();
		option7 = $("input[name='option-7']:checked").attr('data-option');
		// option7 = option.slice(-1);
			if(pregunta7){
				sumaY += parseInt(pregunta7);
				console.log(sumaY);
			}
		state.screenView = "question-8";
		update();
	});

	return container;
}

function Question8(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:86.2%"><span class="sr-only">100% Complete</span></div>');

	var h3 = $('<h3>'+state.questions.pregunta8.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" id="question8-a" data-option="a" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.a.valor +'">'+state.questions.pregunta8.opciones.a.texto+'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" id="question8-b" data-option="b" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.b.valor +'">'+state.questions.pregunta8.opciones.b.texto+'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio" id="question8-c" data-option="c" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.c.valor +'">'+state.questions.pregunta8.opciones.c.texto+'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio" id="question8-d" data-option="d" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.d.valor +'">'+state.questions.pregunta8.opciones.d.texto+'</label>');
  var divE = $('<div class=""></div>');
  var radioE = $('<label><input type="radio" id="question8-e" data-option="e" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.e.valor +'">'+state.questions.pregunta8.opciones.e.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta8 = $("input[name='option-8']:checked").val();
		option8 = $("input[name='option-8']:checked").attr('data-option');
		

		// option8 = option.slice(-1);
      if(pregunta8){
					sumaY += parseInt(pregunta8);
					console.log(sumaY);
      }
		state.screenView = "profile";
		update();
	});

	return container;
}

function Register(update) {
  var container = $('<div class="form-group"></div>');
  var div1 = $('<div class="profile"></div>');
  var input1=$('<input type="text" name="name" placeholder="Ingrese su nombre" id="nombre"><br>');
  var input2=$('<input type="text" name="lastname" placeholder="Ingrese sus apellidos" id="apellidos"><br>');
  var birthday=$('<input type="date" name="birthday" placeholder="Ingrese su fecha de nacimiento" id="nac"><br>')
  var radioF = $('<label><input type="radio" name="gender">Femenino</label><br>');
  var radioM = $('<label><input type="radio" name="gender">Masculino</label><br>');
  var checkbox=$('<label><input type="checkbox" name="email" value="enviarEmail" id="terminos">Acepto los <a>Terminos y Condiciones</a></label><br>')
  var input3=$('<input type="email" name="email" placeholder="Ingrese su email" id="email-reg"><br>');
  var btn = $('<button type="button" class="btn btn-primary" id="registrarse">ACEPTAR</button><br>');

  container.append(div1);
  div1.append(input1);
  div1.append(input2);
  div1.append(birthday);
  div1.append(radioF);
  div1.append(radioM);
  div1.append(checkbox);
  div1.append(input3);
  div1.append(btn);


  btn.on('click', function(e) {
    alert('Registro exitoso')
      //state.screenView = null;
      //update();
    });

  return container;
}

function Result(update) {
	var container = $('<div class="nav text-center"></div>');
	var h3 = $('<h3>¿Quieres saber como invertir?</h3>');
  var p = $('<p id = "#resultado"></p>');
	var btn = $('<button type="button" class="btn btn-primary">conozca su perfil</button>');

	container.append(h3);
	container.append(btn);
  alert('llegue hasta aqui ');
  // console.log(p.id);
  prueba();
	// btn.on('click', function(e) {
	// 	state.screenView = "question-1";
	// 	update();
	// });
	return container;
}

var render = function(root) {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Nav(_ => render(root)));
	switch(state.screenView) {
	case null:
		//wrapper.append(Home(_ => render(root)));
		break;
  case "Seleccionar cliente":
		wrapper.append(SeleccionarCliente(_ => render(root)));
		break;
  case "Iniciar formulario":
		wrapper.append(InicioForm(_ => render(root)));
		break;
	case "question-1":
		wrapper.append(Question1(_ => render(root)));
		break;
	case "question-2":
		wrapper.append(Question2(_ => render(root)));
		break;
  case "question-3":
    wrapper.append(Question3(_ => render(root)));
    break;
  case "question-4":
    wrapper.append(Question4(_ => render(root)));
    break;
  case "question-5":
    wrapper.append(Question5(_ => render(root)));
    break;
  case "question-6":
    wrapper.append(Question6(_ => render(root)));
    break;
  case "question-7":
    wrapper.append(Question7(_ => render(root)));
    break;
  case "question-8":
    wrapper.append(Question8(_ => render(root)));
    break;
  case "profile":
    wrapper.append(Profile(_ => render(root)));
    break;
  case "description":
    wrapper.append(Description(_ => render(root)));
    break;
  case "register":
    wrapper.append(Register(_ => render(root)));
    break;
	}
  root.append(wrapper);
}

var state = {
  cliente: null,
	questions: null,
	screenView: null,
  perfil: ""
}

$(document).ready(function() {
  getJSON('/api/preguntas', (err, json) => {
  state.questions = json;
  var root = $('.root');
  render(root);
  });

	$('.collapse').collapse({
  toggle: true
	})
});
