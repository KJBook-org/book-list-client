
page( '/', ( ctx ) => app.Book.fetchAll( app.bookView.initIndexPage ) );
page( '/book/:id', ctx => app.Book.fetchOne( ctx, app.bookView.initDetailPage ) );
page( '/books/new', ctx => app.bookView.initCreateFormPage( ctx ) );
page( '/search', ctx => app.BookView.initSearchFormPage );

page();