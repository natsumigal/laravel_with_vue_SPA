var resizefunc = [];


$(document).ready(function () {
    $(function () {
        $(".nicescroll").niceScroll({ cursorcolor: "#858586" });
    });
});


!function ($) {
    "use strict";

    var Sidemenu = function () {
        this.$body = $("body"),
            this.$openLeftBtn = $(".open-left"),
            this.$menuItem = $("#sidebar-menu a")
    };
    Sidemenu.prototype.openLeftBar = function () {
        $("#app").toggleClass("enlarged");
        $("#app").addClass("forced");

        if ($("#app").hasClass("enlarged") && $("body").hasClass("adminbody")) {
            $("body").removeClass("adminbody").addClass("adminbody-void");
        } else if (!$("#app").hasClass("enlarged") && $("body").hasClass("adminbody-void")) {
            $("body").removeClass("adminbody-void").addClass("adminbody");
        }

        if ($("#app").hasClass("enlarged")) {
            $(".left ul").removeAttr("style");
        } else {
            $(".subdrop").siblings("ul:first").show();
        }

    },
        //menu item click
        Sidemenu.prototype.menuItemClick = function (e) {           
            //if (!$("#app").hasClass("enlarged")) {
                var $active_menu = $("#sidebar-menu a.active");
                if ($($active_menu).parent().hasClass("submenu")) {

                }
                
                if (!$($active_menu).hasClass("subdrop")) {
                    // hide any open menus and remove all other classes
                    $("ul", $($active_menu).parents("ul:first")).slideUp(350);
                    $("a", $($active_menu).parents("ul:first")).removeClass("subdrop");
                    $("#sidebar-menu .pull-right i").removeClass("md-remove").addClass("md-add");
                    // open our new menu and add the open class
                    $($active_menu).next("ul").slideDown(350);
                    $($active_menu).addClass("subdrop");
                    $($active_menu).css('color', 'red !important');
                    $(".pull-right i", $($active_menu).parents(".submenu:last")).removeClass("md-add").addClass("md-remove");
                    $(".pull-right i", $($active_menu).siblings("ul")).removeClass("md-remove").addClass("md-add");
                } else if ($($active_menu).hasClass("subdrop")) {
                    $($active_menu).removeClass("subdrop");
                    $($active_menu).next("ul").slideUp(350);
                    $(".pull-right i", $($active_menu).parent()).removeClass("md-remove").addClass("md-add");
                }
            //}
        },

        //init sidemenu
        Sidemenu.prototype.init = function () {
            var $this = this;

            var ua = navigator.userAgent,
                event = (ua.match(/iP/i)) ? "touchstart" : "click";

            //bind on click
            this.$openLeftBtn.on(event, function (e) {
                e.stopPropagation();
                $this.openLeftBar();
            });

            // LEFT SIDE MAIN NAVIGATION
            $this.$menuItem.on(event, $this.menuItemClick);

            // NAVIGATION HIGHLIGHT & OPEN PARENT
            $("#sidebar-menu ul li.submenu a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
        },

        //init Sidemenu
        $.Sidemenu = new Sidemenu, $.Sidemenu.Constructor = Sidemenu

}(window.jQuery),


    //main app module
    function ($) {
        "use strict";

        var App = function () {
            this.pageScrollElement = "html, body",
                this.$body = $("body")
        };

        //on doc load
        App.prototype.onDocReady = function (e) {
            FastClick.attach(document.body);
            resizefunc.push("changeptype");

            $('.animate-number').each(function () {
                $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-duration")));
            });

            //RUN RESIZE ITEMS
            $(window).resize(debounce(resizeitems, 100));
            $("body").trigger("resize");

            // right side-bar toggle
            $('.right-bar-toggle').on('click', function (e) {

                $('#app').toggleClass('right-bar-enabled');
            });


        },
            //initilizing
            App.prototype.init = function () {
                var $this = this;
                $(document).ready($this.onDocReady);
                $.Sidemenu.init();
            },

            $.App = new App, $.App.Constructor = App

    }(window.jQuery),

    //initializing main application module
    function ($) {
        "use strict";
        $.App.init();
    }(window.jQuery);


function executeFunctionByName(functionName, context) {
    var args = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
}
var w, h, dw, dh;
var changeptype = function () {
    w = $(window).width();
    h = $(window).height();
    dw = $(document).width();
    dh = $(document).height();

    if (jQuery.browser.mobile === true) {
        $("body").addClass("mobile").removeClass("adminbody");
    }

    if (!$("#app").hasClass("forced")) {
        if (w > 990) {
            $("body").removeClass("smallscreen").addClass("widescreen");
            $("#app").removeClass("enlarged");
        } else {
            $("body").removeClass("widescreen").addClass("smallscreen");
            $("#app").addClass("enlarged");
            $(".left ul").removeAttr("style");
        }
        if ($("#app").hasClass("enlarged") && $("body").hasClass("adminbody")) {
            $("body").removeClass("adminbody").addClass("adminbody-void");
        } else if (!$("#app").hasClass("enlarged") && $("body").hasClass("adminbody-void")) {
            $("body").removeClass("adminbody-void").addClass("adminbody");
        }

    }

}


var debounce = function (func, wait, immediate) {
    var timeout, result;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(context, args);
        return result;
    };
}

function resizeitems() {
    if ($.isArray(resizefunc)) {
        for (i = 0; i < resizefunc.length; i++) {
            window[resizefunc[i]]();
        }
    }
}
