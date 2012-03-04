define([
  "use!backbone"
], function(Backbone) {
  var Result = Backbone.Model.extend({
    validate : function(attrs) {
      _.each([ 'text', 'from_user' ], function(attr) {
        if (!attrs[attr]) { return "No " + attr; }
      });
    }
  });

  var Results = Backbone.Collection.extend({ model : Result });

  return {
    query : function(term) {
      var req = $.getJSON('http://search.twitter.com/search.json?callback=?&q=' + term),
          dfd = $.Deferred();

      req.then(function(resp) {
        var results = new Results(resp.results);
        dfd.resolve(results);
      });

      return dfd.promise();
    }
  };
});
