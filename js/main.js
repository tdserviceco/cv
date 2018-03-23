const start = {
  onReady: function(){
    start.lazy_load()
  },

  lazy_load: function() {
    jQuery('.presentation__content__intro').addClass('lazy-load');
  }
}

jQuery( document ).ready( start.onReady );
