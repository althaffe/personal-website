module.exports = function(config) {
  config.addPassthroughCopy("assets");

  config.addCollection("works", function(collection) {
    return collection.getFilteredByGlob("./src/works/*.md").reverse();
  });

  return {
    dir: {
      input: "src/"
    },
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html", "css", "png", "jpg"]
  };
};
