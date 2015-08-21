### Code Fellows Code Challenge - Modular Library

#### Construct a Modular Library - Assignment
+ A library contains shelves. Shelves contain books. Books have an author and a title.
+ Include methods to add and remove a shelf, and methods to add/remove a book.
+ Use a modular approach so that each type of object is contained in its own file.
+ Add any additional functionality you think is appropriate.
+ Create a "main" file that demonstrates the capabilities of your library.


#### JS Functionality:
+ This is program creates a simple modular libary.
+ The Book Module includes a function to createBook taking the following parameters: the book's title, author, ISBN#, genre and number in our libary.
+ The Shelves Module includes functions to add or remove a book from a shelf, as well as add or remove a shelf itself. Adding or removing a book requires the Book Module and uses the book number and shelf name. Adding or removing a shelf only requires the shelf name.
+ The Library Module includes functions to add or remove shelves based on the shelf Name and requires the Shelf Module.
+ I demonstrate the function of the libary in the main file, using three William Faulker book titles for reference.




