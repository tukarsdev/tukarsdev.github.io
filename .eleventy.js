module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src/dev/tukars/pages", // where your Markdown lives
      output: "_site",               // where to write the HTML
      includes: "../includes",       // optional (relative to input)
      layouts: "../layouts"          // optional (relative to input)
    }
  };
};