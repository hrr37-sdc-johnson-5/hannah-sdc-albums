// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/albums',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
    directory: __dirname + '/db/seeds'
    }
  }
};