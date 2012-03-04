define([
  "namespace",
  "use!backbone"
], function(app, Backbone) {
  return function(config) {
    config.render = config.render || function(destinationNode) {
      var el = this.$el;

      this.fetchTemplate(function(t) {
        el.html(t());
        destinationNode.html(el);
      });
    };

    config.fetchTemplate = function(done) {
      app.fetchTemplate(this.template, done);
    };

    var component = Backbone.View.extend(config);
    component.extend(Backbone.Events);
    return component;
  };
});
