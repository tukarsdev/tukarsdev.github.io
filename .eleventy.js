module.exports = function (eleventyConfig) {
	eleventyConfig.addNunjucksShortcode("year", function () {
		return new Date().getFullYear();
	});
	
  return {
    dir: {
      input: "src/dev/tukars/pages",
      output: "_site",
      includes: "../includes",
      layouts: "../layouts"
    }
  };
};