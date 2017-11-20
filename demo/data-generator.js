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
DataGenerator.generateApiData = function(apisIndex) {
  var result = [];
  apisIndex.forEach(item => {
    result.push({
      _id: item._id,
      raml: {}
    });
  });
  return result;
};
DataGenerator.generateData = function(size) {
  var projects = DataGenerator.generateApis(size);
  var data = DataGenerator.generateApiData(projects);
  var indexDb = new PouchDB('rest-api-index');
  var dataDb = new PouchDB('rest-api-data');
  return indexDb.bulkDocs(projects)
  .then(() => {
    return dataDb.bulkDocs(data);
  });
};
DataGenerator.destroyData = function() {
  var db = new PouchDB('rest-api-index');
  var dataDb = new PouchDB('rest-api-data');
  return db.destroy()
  .then(() => dataDb.destroy());
};
