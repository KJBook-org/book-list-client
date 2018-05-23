'use strict';

var app = app || {};

( function( module ) {
  const errorView = {};

  errorView.initErrorPage = function( err ) {
    $( '.container' ).hide();
    app.showOnly( '#error-view' );
    $( '#error-message' ).empty();
    let errorTemplate = app.render( 'error-template', err );
    $( '#error-message' ).append( errorTemplate );
  }

  errorView.errorCallback = function( err ) {
    console.log( err );
    errorView.initErrorPage( err );
  }
  module.errorView = errorView;
} )( app );