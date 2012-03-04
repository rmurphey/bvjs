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
      var page = new Page({ template : 'app/templates/pages/search.html' }),
          searchInput = new SearchInput(),
          searchResults = new SearchResults(),
          self = this;

      $.when(page.render()).then(function() {
        searchInput.render(page.searchInput);
        searchResults.render(page.searchResults);
        searchInput.on('search', _.bind(self.handleSearch, self));
      });

      this.searchResults = searchResults;
      this.searchInput = searchInput;
    },

    handleSearch : function(term) {
      var searchResults = this.searchResults;

      searchService.query(term).then(function(results) {
        searchResults.show(results);
      });
    }
  };
});
