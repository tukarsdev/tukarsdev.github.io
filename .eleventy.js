module.exports = function (eleventyConfig) {
	eleventyConfig.addNunjucksShortcode("year", function () {
		return new Date().getFullYear();
	});
  
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });
  eleventyConfig.addPassthroughCopy({ "src/video": "video" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" })
  
  return {
    dir: {
      input: "src/pages",
      output: "_site",
      includes: "../includes",
      layouts: "../layouts"
    }
  };
};