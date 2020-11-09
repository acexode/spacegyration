// const { $ } = require("protractor")


$(function(){

  // 300 <= $(window).width()
  //       ? (
    if(768 >= $(window).width() ){
      $(".vertical-menu").addClass("active")
      $(".main-content").toggleClass('active')
      $(".treeview-menu li a").on("click", function (e) {
        if($(window).width() < 768 ){
          $(".vertical-menu").toggleClass('active')

        }
      })
  }
  $("#vertical-menu-btn").on("click", function (e) {
    e.preventDefault()    
      // $(".main-sidebar").removeClass("sidebar-enable")
      $(".main-sidebar").toggleClass("vertical-collpsed") 
      $(".navbar-brand-box").toggleClass('active')
      $(".main-content").toggleClass('active')
      $(".vertical-menu").toggleClass('active')
      // if(992 <= $(window).width()){
      // }else{
      //   $(".main-sidebar").removeClass("vertical-collpsed");
      // }
      // 992 <= $(window).width()
      //   ? (
      //     $(".main-sidebar").toggleClass("vertical-collpsed"), 
      //     $(".navbar-brand-box").toggleClass('active'),
      //     $(".main-content").toggleClass('active'),
      //     $(".vertical-menu").toggleClass('active')
          
      //     )
      //   : $(".main-sidebar").removeClass("vertical-collpsed");
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

