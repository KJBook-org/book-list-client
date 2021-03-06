'use strict';

var app = app || {};

( function ( module ) {
  let productionApiUrl = 'https://ka-jw-booklist.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test( window.location.hostname );
  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  module.showOnly = selector => {
    $( '.container' ).hide();
    $( selector ).show();
  };

  module.render = ( templateId, data ) => {
    let bookTemplate = Handlebars.compile( $( `#${ templateId }` ).text() );
    return bookTemplate( data );
  };
} )( app );
