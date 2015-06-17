var schemas = [];

require('fs').readdirSync(__dirname)
.filter(function(file) {
  return (file !== 'index.js');
})
.forEach(function(file) {
  schemas.push(require('./' + file));
});

module.exports = schemas;
