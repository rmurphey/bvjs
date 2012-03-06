define([
  "namespace",
  "use!backbone",

  "components/page",
  "components/search/input",
  "components/search/results",

  "services/twitter"
], function(app, B, Page, SearchInput, SearchResults, twitterService) {
  return {
    init : function() {
      this.page = new Page({ template : 'app/templates/pages/search.html' });
      this.page.render().then(_.bind(this.setupPage, this));
    },

    setupPage : function() {
      var p = this.page;

      this.searchInput = p.place(new SearchInput(), 'searchInput');
      this.searchResults = p.place(new SearchResults(), 'searchResults');

      this.searchInput.on('search', _.bind(this.handleSearch, this));
    },

    handleSearch : function(term) {
      twitterService.query(term).then(_.bind(this.showResults, this));
    },

    showResults : function(results) {
      this.searchResults.show(results);
    }
  };
});
