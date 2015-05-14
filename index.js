var handlebars = require('handlebars');

module.exports = function(content, file, opt){
    content = handlebars.precompile(content, opt);
    return 'Handlebars.template(' + content + ')';
};