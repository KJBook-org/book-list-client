Task.prototype.toHtml = function() {
  return app.render('task-template', this);
}
///CONSTRUCTOR///


function Book ( bookObj ) {
  this.title = bookObj.title,
  this.author = bookObj.author,
  this.description = bookObj.description,

}

Book.all = []


///RENDER TO HTML///
Book.prototype.toHtml = function (){
 var template = Handlebars.compile($('#book-template').text());
}