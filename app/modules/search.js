define([
  "namespace",
  "use!backbone",

  "components/page",
  "components/search/input",
  "components/search/results",

  "services/search"
], function(app, B, Page, SearchInput, SearchResults, searchService) {
  return {
    init : function() {
      var p = new Page({ template : 'app/templates/pages/search.html' });

      p.render().then(_.bind(function() {
        this.searchInput = p.place(new SearchInput(), 'searchInput');
        this.searchResults = p.place(new SearchResults(), 'searchResults');
        this.searchInput.on('search', _.bind(this.handleSearch, this));
      }, this));
    },

    handleSearch : function(term) {
      searchService.query(term).then(_.bind(this.showResults, this));
    },

    showResults : function(results) {
      this.searchResults.show(results);
    }
  };
});
