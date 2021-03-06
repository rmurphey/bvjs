define([
  "namespace",
  "components/base"
], function(app, Component) {
  return Component({
    template : "app/templates/search/results.html",
    className : 'search-results',
    tagName : 'ul',

    resultTemplates : {
      twitter : "app/templates/search/result.html"
    },

    show : function(Results) {
      var el = this.$el;

      app.fetchTemplate(this.resultTemplates[Results.type], function(t) {
        el.html(Results.map(function(r) {
          if (!r.isValid()) { return ''; }
          return t(r.toJSON());
        }).join(''));
      });
    }
  });
});

