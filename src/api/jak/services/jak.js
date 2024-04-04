'use strict';

/**
 * jak service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jak.jak');
