define([
  "namespace",
  "components/base"
], function(app, Component) {
  return Component({
    template : "app/templates/search/input.html",

    events : {
      "submit form"    :   "_onSubmit"
    },

    _onSubmit : function(e) {
      e.preventDefault();
      var term = $.trim(this.$el.find('input')[0].value);
      if (!term) { return; }
      this.trigger('search', term);
    }
  });
});
