module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "reactavancado-strapi"),
        username: env("DATABASE_USERNAME", "reactavancado-strapi"),
        password: env("DATABASE_PASSWORD", "igorgomes08"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
