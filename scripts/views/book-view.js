'use strict';

var app = app || {};

( function ( module ) {
  const bookView = {};
  
  bookView.initIndexPage = function () {
    app.showOnly( '#book-list-view' );
    let $bookList = $( '#book-list' );
    $bookList.empty();
    app.Book.all.forEach( elem => $bookList.append( elem.toHtml() ) );
  }

  bookView.initDetailPage = function ( book ) {
    app.showOnly( '#book-detail-view' );
    let $bookDetail = $( '#book-detail' );
    $bookDetail.empty();
    $bookDetail.append( book.toHtml() );
  }

  bookView.initCreateFormPage = function () {
    app.showOnly( '#add-book-view' );
    $( '#add-book-form' ).on( 'submit', function ( event ) {
      event.preventDefault();

      let current = event.target;
      let book = {
        title: current.title.value,
        author: current.author.value,
        isbn: current.isbn.value,
        image_url: current.image_url.value,
        description: current.description.value,
      };
      module.Book.create( book );
    })
  }

  bookView.initSearchFormPage = function () {
    app.showOnly( '#add-book-view' );
    $( '#add-book-form' ).on( 'submit', bookView.submit );
    module.Book.create( book );
  }

  bookView.submit = event => {
    event.preventDefault();
    let current = event.target;
    let book = {
      title: current.title.value || '',
      author: current.author.value || '',
      isbn: current.isbn.value || '',
    };
    module.Book.find( book, bookView.initSearchResultsPage );

    current.title.value = '';
    current.author.value = '';
    current.isbn.value = '';
  }

  module.bookView = bookView;
} )( app );