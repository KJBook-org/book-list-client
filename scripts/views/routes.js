
page( '/', ( ctx ) => app.Book.fetchAll( app.bookView.initIndexPage ) );
page( '/book/:id', ( ctx ) => app.Book.fetchOne( ctx, app.bookView.initDetailPage ) );

page();