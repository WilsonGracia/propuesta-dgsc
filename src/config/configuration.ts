export default () => ({
  port: process.env.PORT || 8000,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'posgres',
    name: process.env.DB_NAME || 'postgres',
    pass: process.env.DB_PASS || '123',
  },
});
