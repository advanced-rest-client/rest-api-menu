/* global chance */
const DataGenerator = {};

DataGenerator.createApiObject = function() {
  var project = {
    _id: chance.string({length: 12}),
    title: chance.sentence({words: 2}),
    version: 'v' + chance.integer({min: 1, max: 5}),
    order: 0,
    description: chance.paragraph(),
    dataid: chance.string({length: 32}),
  };
  return project;
};
DataGenerator.generateApis = function(size) {
  size = size || 5;
  var result = [];
  for (var i = 0; i < size; i++) {
    result.push(DataGenerator.createApiObject());
  }
  return result;
};
DataGenerator.generateData = function(size) {
  var projects = DataGenerator.generateApis(size);
  var projectsDb = new PouchDB('rest-api-index');
  return projectsDb.bulkDocs(projects);
};
DataGenerator.destroyData = function() {
  var db = new PouchDB('rest-api-index');
  return db.destroy();
};
