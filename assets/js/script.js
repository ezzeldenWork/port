(function () {
  // tab toggle
  $(".nav_box nav ul li a").click(function () {
    idName = $(this).attr("data-tab");
    $(this).addClass("active");
    $(this).parents("li").siblings().children("a").removeClass("active");
    $(".tab_min_box .tab_box").removeClass("active");
    $(".tab_min_box .tab_box#" + idName).addClass("active");
    $(".tab_min_box .tab_box .login_layOut").removeClass("active");
    setTimeout(function () {
      $(".tab_min_box .tab_box.active .login_layOut").addClass("active");
    }, 800);
  });

  // fillter

  if ($(".filter-content").length) {
    var mixer = mixitup(".filter-content");
  }
})();


