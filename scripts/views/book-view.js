'use strict';

var app = app || {};

( function( module ) {
  const bookView = {};
  bookView.initIndexPage = function( ) {
    app.showOnly( '#book-list-view' );
    let $bookList = $( '#book-list' );
    $bookList.empty();
    app.Book.all.forEach( elem => $bookList.append( elem.toHtml() ) );
  }
  module.bookView = bookView;
} )( app );