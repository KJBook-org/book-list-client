'use strict';

var app = app || {};

( function( module ) {
  function errorCallback( err ) {
    console.error( err );
    module.errorView.initErrorPage( err );
  }

  function Book( bookObj ) {
    Object.keys( bookObj ).forEach( key => this[ key ] = bookObj[ key ] );
  }

  Book.prototype.toHtml = function() {
    return app.render( 'book-list-template', this );
  }

  Book.all = [];
  Book.loadAll = rows => {
    Book.all = rows.map( book => new Book( book ) ).sort( ( a, b ) => a.title - b.title );
  }

  Book.fetchAll = callback => {
    $.get( `${app.ENVIRONMENT.apiUrl}/api/v1/books` )
      .then( Book.loadAll )
      .then( callback )
      .catch( errorCallback );
  }
  Book.loadOne = book => new Book( book )

  Book.fetchOne = oneBook => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books/${oneBook.params.id}`)
    .then(data => Book.loadOne(data[0]))
    .then(book => console.log(book))
    .catch(console.log)
  }

  module.Book = Book;
} )( app );

