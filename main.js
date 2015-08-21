// Requiring our three library methods for books, shelves and the library itself
var libary = require('./libary.js');
var shelf = require('./shelves.js');
var book = require('./book.js');


// Adding book data
book.bookModule.createBook('As I Lay Dying', 'William Faulkner', '067973225X', 'Literature', '0001');
book.bookModule.createBook('The Sound and the Fury', 'William Faulkner', '0679732241', 'Literature', '0002');
book.bookModule.createBook('Light In August', 'William Faulkner', '0679732268', 'Literature', '0003');

// Adding, removing shelf and book
shelf.shelfModule.createShelf('shelfOne');
shelf.shelfModule.addBook('0001', 'shelfOne');
shelf.shelfModule.removeBook('0001', 'shelfOne');
shelf.shelfModule.deleteShelf('shelfOne');

// Adding, removing shelf from library
libary.libaryModule.addShelf('0001');
libary.libaryModule.removeShelf('0001');
