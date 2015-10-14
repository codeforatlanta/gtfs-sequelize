var Promise = require('bluebird');

var pgConfig = {
  database: 'postgres://gtfs_sequelize:gtfs_sequelize@localhost:5432/gtfs-sequelize-test',
  downloadsDir: 'downloads',
  gtfsFileOrFolder: 'google_transit.zip',
  spatial: true,
  sequelizeOptions: {
    logging: false
  }
}

describe('postgis', function() {
  it('data should load', function() {
    this.timeout(30000000);
    
    var gtfs = require('../index.js')(pgConfig),
      promise = Promise.promisify(gtfs.loadGtfs);

    return promise();
    
  });
});