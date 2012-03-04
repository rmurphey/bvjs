define([
  "namespace",
  "use!backbone",
  "components/base"
], function(app, Backbone, Component) {
  return Component({
    template : "app/templates/search/results.html",
    resultTemplate : "app/templates/search/result.html",

    show : function(Results) {
      var el = this.$el;

      app.fetchTemplate(this.resultTemplate, function(t) {
        el.html(Results.map(function(r) {
          if (!r.isValid()) { return ''; }
          return t(r.toJSON());
        }).join(''));
      });
    }
  });
});

