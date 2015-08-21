var booksModule = (function(){
  return{
    createBook : function(title, author, isbn, genre, bookNum){
      return booksModule[bookNum] = {
        'title' : title,
        'author' : author,
        'isbn' : isbn,
        'genre' : genre,
        'bookNum' : bookNum
      },
      console.log('The book titled ' + title + ' has been added!');
    }
  };
})();

exports.booksModule = booksModule;
