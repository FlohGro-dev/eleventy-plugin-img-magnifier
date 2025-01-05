export default function(eleventyConfig){
    eleventyConfig.addPlugin('imgMagnifierPlugin', function(){
        eleventyConfig.addPassthroughCopy({ 'img-magnifier.css': 'img-magnifier-plugin/img-magnifier.css' });
        eleventyConfig.addPassthroughCopy({ 'img-magnifier.js': 'img-magnifier-plugin/img-magnifier.js' });
    
        eleventyConfig.addShortcode("img-magnifier", function() {
            return `
              <link rel="stylesheet" href="/img-magnifier-plugin/img-magnifier.css">
              <script src="/img-magnifier-plugin/img-magnifier.js"></script>
            `;
          });
    })
}