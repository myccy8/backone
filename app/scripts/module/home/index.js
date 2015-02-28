/**
 * Created by BillLin on 2015/2/28.
 */

define('/scripts/module/home/index', ['backbone'], function(reuqire) {
  var Backbone = reuqire('backbone');
  App.Views.Home = Backbone.View.extend({
    el: '#app',
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html("hello world");
    }
  })

  return function() {
    new App.Views.Home();
  }
});
