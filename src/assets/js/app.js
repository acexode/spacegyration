

$(function(){

  
  $("#vertical-menu-btn").on("click", function (e) {
    e.preventDefault(),
   
      $(".main-sidebar").toggleClass("sidebar-enable")
      992 <= $(window).width()
        ? (
          $(".main-sidebar").toggleClass("vertical-collpsed"), 
          $(".navbar-brand-box").toggleClass('active'),
          $(".vertical-menu").toggleClass('active')
          
          )
        : $(".main-sidebar").removeClass("vertical-collpsed");
  })
  $.sidebarMenu = function(menu) {
    
    var animationSpeed = 300;
    // alert('hrllo')
    $(menu).on('click', 'li a', function(e) {
      e.preventDefault()
      var $this = $(this);
      var checkElement = $this.next();
  
      if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed, function() {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent("li").removeClass("active");
      }
  
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        var parent = $this.parents('ul').first();
        //Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        var parent_li = $this.parent("li");
  
        //Open the target menu and add the menu-open class
        checkElement.slideDown(animationSpeed, function() {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  }
  $.sidebarMenu($('.sidebar-menu'))
})


// !(function (s) {
//   "use strict";
 
//   function t(e) {
//     1 == s("#light-mode-switch").prop("checked") && "light-mode-switch" === e
//       ? (s("#dark-mode-switch").prop("checked", !1),
//         s("#rtl-mode-switch").prop("checked", !1),
//         s("#bootstrap-style").attr("href", "assets/css/bootstrap.min.css"),
//         s("#app-style").attr("href", "assets/css/app.min.css"),
//         sessionStorage.setItem("is_visited", "light-mode-switch"))
//       : 1 == s("#dark-mode-switch").prop("checked") && "dark-mode-switch" === e
//       ? (s("#light-mode-switch").prop("checked", !1),
//         s("#rtl-mode-switch").prop("checked", !1),
//         s("#bootstrap-style").attr("href", "assets/css/bootstrap-dark.min.css"),
//         s("#app-style").attr("href", "assets/css/app-dark.min.css"),
//         sessionStorage.setItem("is_visited", "dark-mode-switch"))
//       : 1 == s("#rtl-mode-switch").prop("checked") &&
//         "rtl-mode-switch" === e &&
//         (s("#light-mode-switch").prop("checked", !1),
//         s("#dark-mode-switch").prop("checked", !1),
//         s("#bootstrap-style").attr("href", "assets/css/bootstrap.min.css"),
//         s("#app-style").attr("href", "assets/css/app-rtl.min.css"),
//         sessionStorage.setItem("is_visited", "rtl-mode-switch"));
//   }
//   function e() {
//     document.webkitIsFullScreen ||
//       document.mozFullScreen ||
//       document.msFullscreenElement ||
//       (console.log("pressed"), s("body").removeClass("fullscreen-enable"));
//   }
//   var n;
  // s("#side-menu").metisMenu(),
  //   s("#vertical-menu-btn").on("click", function (e) {
  //     e.preventDefault(),
  //       s("body").toggleClass("sidebar-enable"),
  //       992 <= s(window).width()
  //         ? s("body").toggleClass("vertical-collpsed")
  //         : s("body").removeClass("vertical-collpsed");
  //   }),
//     s("body,html").click(function (e) {
//       var t = s("#vertical-menu-btn");
//       t.is(e.target) ||
//         0 !== t.has(e.target).length ||
//         e.target.closest("div.vertical-menu") ||
//         s("body").removeClass("sidebar-enable");
//     }),
//     s("#sidebar-menu a").each(function () {
//       var e = window.location.href.split(/[?#]/)[0];
//       this.href == e &&
//         (s(this).addClass("active"),
//         s(this).parent().addClass("mm-active"),
//         s(this).parent().parent().addClass("mm-show"),
//         s(this).parent().parent().prev().addClass("mm-active"),
//         s(this).parent().parent().parent().addClass("mm-active"),
//         s(this).parent().parent().parent().parent().addClass("mm-show"),
//         s(this)
//           .parent()
//           .parent()
//           .parent()
//           .parent()
//           .parent()
//           .addClass("mm-active"));
//     }),
//     s(".navbar-nav a").each(function () {
//       var e = window.location.href.split(/[?#]/)[0];
//       this.href == e &&
//         (s(this).addClass("active"),
//         s(this).parent().addClass("active"),
//         s(this).parent().parent().addClass("active"),
//         s(this).parent().parent().parent().addClass("active"),
//         s(this).parent().parent().parent().parent().addClass("active"),
//         s(this)
//           .parent()
//           .parent()
//           .parent()
//           .parent()
//           .parent()
//           .addClass("active"));
//     }),
//     s('[data-toggle="fullscreen"]').on("click", function (e) {
//       e.preventDefault(),
//         s("body").toggleClass("fullscreen-enable"),
//         document.fullscreenElement ||
//         document.mozFullScreenElement ||
//         document.webkitFullscreenElement
//           ? document.cancelFullScreen
//             ? document.cancelFullScreen()
//             : document.mozCancelFullScreen
//             ? document.mozCancelFullScreen()
//             : document.webkitCancelFullScreen &&
//               document.webkitCancelFullScreen()
//           : document.documentElement.requestFullscreen
//           ? document.documentElement.requestFullscreen()
//           : document.documentElement.mozRequestFullScreen
//           ? document.documentElement.mozRequestFullScreen()
//           : document.documentElement.webkitRequestFullscreen &&
//             document.documentElement.webkitRequestFullscreen(
//               Element.ALLOW_KEYBOARD_INPUT
//             );
//     }),
//     document.addEventListener("fullscreenchange", e),
//     document.addEventListener("webkitfullscreenchange", e),
//     document.addEventListener("mozfullscreenchange", e),
//     s(".right-bar-toggle").on("click", function (e) {
//       s("body").toggleClass("right-bar-enabled");
//     }),
//     s(document).on("click", "body", function (e) {
//       0 < s(e.target).closest(".right-bar-toggle, .right-bar").length ||
//         s("body").removeClass("right-bar-enabled");
//     }),
//     s(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
//       return (
//         s(this).next().hasClass("show") ||
//           s(this)
//             .parents(".dropdown-menu")
//             .first()
//             .find(".show")
//             .removeClass("show"),
//         s(this).next(".dropdown-menu").toggleClass("show"),
//         !1
//       );
//     }),
//     s(function () {
//       s('[data-toggle="tooltip"]').tooltip();
//     }),
//     s(function () {
//       s('[data-toggle="popover"]').popover();
//     }),
//     window.sessionStorage &&
//       ((n = sessionStorage.getItem("is_visited"))
//         ? (s(".right-bar input:checkbox").prop("checked", !1),
//           s("#" + n).prop("checked", !0),
//           t(n))
//         : sessionStorage.setItem("is_visited", "light-mode-switch")),
//     s("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch").on(
//       "change",
//       function (e) {
//         t(e.target.id);
//       }
//     ),
//     s(window).on("load", function () {
//       s("#status").fadeOut(), s("#preloader").delay(350).fadeOut("slow");
//     }),
//     Waves.init();
//     $(document).ready(function() {
//       $('#example').DataTable();
//   } );
// })(jQuery);