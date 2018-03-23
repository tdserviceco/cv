const start = {
  onReady: function(){
    start.lazy_load()
  },

  lazy_load: function() {
    $('.presentation__content__intro').addClass('lazy-load');
  }
}

jQuery( document ).ready( start.onReady );
