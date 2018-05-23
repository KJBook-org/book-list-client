'use strict';

var app = app || {};

( function( module ) {
  function Book( bookObj ) {
    Object.keys( bookObj ).forEach( key => this[ key ] = bookObj[ key ] );
  }

  Book.prototype.toHtml = function() {
    return app.render( 'book-list-template', this );
  }

  Book.all = [];
  Book.loadAll = rows => {
    Book.all = rows.map( book => new Book( book ) );
  } 



} )( app );