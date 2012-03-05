define([
  "namespace",
  "use!backbone"
], function(app, Backbone) {
  return function(config) {
    config.render = function() {
      var el = this.$el,
          dfd = $.Deferred();

      this.fetchTemplate(function(t) {
        dfd.resolve(el.html(t()));
      });

      return dfd.promise();
    };

    config.fetchTemplate = function(done) {
      app.fetchTemplate(this.template, done);
    };

    var component = Backbone.View.extend(config);
    component.extend(Backbone.Events);
    return component;
  };
});
