var packageAttributeBuilder = require('livefyre-package-attribute');
var packageJson = require('json!streamhub-gallery/../package.json');

module.exports = packageAttributeBuilder(packageJson);