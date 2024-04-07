module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Set app keys here
    keys: env('APP_KEYS', '1TLrcBUYAXBSAIe7n6csTXP4dfvCgedJqITBjxKf4gFx8fimGdHHZCu9inbvuuor'),
  },

  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
