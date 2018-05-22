const isProduction = app.ENVIRONMENT.apiUrl;


module.render = (templateId, data) => {
  let template = Handlebars.compile($(`#${templateId}`).text());
  return template(data);
};

