define([
  "use!backbone"
], function(Backbone) {
  var TwitterResult = Backbone.Model.extend({
    validate : function(attrs) {
      _.each([ 'text', 'from_user' ], function(attr) {
        if (!attrs[attr]) { return "No " + attr; }
      });
    }
  });

  var TwitterResults = Backbone.Collection.extend({
    type : 'twitter',
    model : TwitterResult
  });

  return {
    query : function(term) {
      var req = $.getJSON('http://search.twitter.com/search.json?callback=?&q=' + escape(term)),
          dfd = $.Deferred();

      req.then(function(resp) {
        dfd.resolve(new TwitterResults(resp.results));
      });

      return dfd.promise();
    }
  };
});
