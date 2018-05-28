'use strict';

var app = app || {};

( function( module ) {
  const bookView = {};
  bookView.initIndexPage = function() {
    app.showOnly( '#book-list-view' );
    let $bookList = $( '#book-list' );
    $bookList.empty();
    app.Book.all.forEach( elem => $bookList.append( elem.toHtml() ) );
  }

  bookView.initDetailPage = function( book ) {
    app.showOnly( '#book-detail-view' );
    let $bookDetail = $( '#book-detail' );
    $bookDetail.empty();
    $bookDetail.append( book.toHtml() );
  }

  bookView.createFromForm = () => {
    $('#create-new-book').on('submit', function(event){
      event.preventDefault();
      ('#submit-book').on('submit', function (){
        let newBook;

        newBook = new newBook ({
         title: $('#book-title').val(),
         author:$('#book-author').val(),
         image_url: $('#image-url').val(),
         isbn: $('#isbn').val()
         
       });
 
       $('#create-new-book').append(newBook.toHtml());
      })
      
      
     })

  }

  module.bookView = bookView;
  
} )( app );