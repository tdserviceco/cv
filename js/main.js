const start = {
  onReady: function() {
    start.lazy_load(), start.showYear();
  },

  lazy_load: function() {
    jQuery(".presentation__content__intro").addClass("lazy-load");
  },
  showYear: function() {
    var age = new Date().getFullYear() - 1986;
    jQuery("#year").html(age);
  }
};

jQuery(document).ready(start.onReady);
