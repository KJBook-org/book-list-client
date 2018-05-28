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

  Book.loadOne = book => new Book( book );

  Book.fetchOne = ( oneBook, callback ) => {
    $.get( `${app.ENVIRONMENT.apiUrl}/api/v1/books/${oneBook.params.id}` )
      .then( data => Book.loadOne( data[ 0 ] ) )
      .then( book => callback( book ) )
      .catch( console.log );
  }

  Book.createNew = function (callback){
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/books`, book)
    .then(data => {
      console.log(data);
      if(callback) callback ();
    } )
    // $.post('/api/v1/books', {title: this.title, author:this.author, image_Url:this.image_url})
    // .then(data => {
    //   console.log(data);
    // })
  }

  module.Book = Book;
} )( app );

