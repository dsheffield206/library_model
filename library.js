var shelf = require('./shelves.js');

var libaryModule = (function(){
  return {
    addShelf : function(shelfName){
      return libaryModule[shelfName.name] = shelfName,
      console.log('The shelf named ' + shelfName + ' has been added to the library!');
    },
    removeShelf : function(shelfName){
      delete libaryModule[shelfName.name],
      console.log('The shelf named ' + shelfName + ' has been removed from the library!');
    },
  };

})();

exports.libaryModule = libaryModule;
