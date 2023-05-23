$(document).ready(function() {
  $('.navbar-toggle-icon').click(function() {
    $('.nav-links').toggleClass('active');
  });

  $(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.navbar-toggle-icon, .nav-links, .nav-links *')) {
      $('.nav-links').removeClass('active');
    }
  });

  $('.dropdown > a').click(function(e) {
    e.preventDefault();
    $(this).siblings('.dropdown-content').slideToggle();
  });
});
