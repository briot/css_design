var TransformerTabs = {
  init: function() {
    this.bindUIfunctions();
    this.changeTab('#tab-1');
  },

  bindUIfunctions: function() {

    // Delegation
    $(document)
      .on("click", ".transformer-tabs a[href^='#']:not('.active')", function(event) {
        TransformerTabs.changeTab(this.hash);
        event.preventDefault();
      })
      .on("click", ".transformer-tabs a.active", function(event) {
        TransformerTabs.toggleMobileMenu(event, this);
        event.preventDefault();
      });

  },

  changeTab: function(hash) {
    var anchor = $("[href=" + hash + "]");
    var div = $(hash);

    // activate correct anchor (visually)
    anchor.addClass("active").parent().siblings().find("a").removeClass("active");

    // activate correct div (visually)
    div.addClass("active").siblings().removeClass("active");

    // Close menu, in case mobile
    anchor.closest("ul").removeClass("open");

  },

  toggleMobileMenu: function(event, el) {
    $(el).closest("ul").toggleClass("open");
  }
}
