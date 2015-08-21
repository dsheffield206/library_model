var book = require('./book.js');

var shelfModule = (function(){
  return {
    createShelf : function (shelfName) {
      return shelfModule[shelfName] = {
        'name' : shelfName,
        'storage' : [ ]
      };
    },
    deleteShelf : function (shelfName) {
      delete shelfModule[shelfName],
      console.log('The shelf ' + shelfName + ' has been deleted.');
    },
    addBook : function (bookNum, shelfName){
      return shelfName[book.bookId] = bookNum,
      console.log('The book number ' + bookNum + ' has been added to ' + shelfName);
    },
    removeBook: function (bookNum, shelfName){
      delete shelfName[book.bookId],
      console.log('The book number ' + bookNum + ' has been removed from ' + shelfName);
    }
  };
})();

exports.shelfModule = shelfModule;
