'use strict';

/**
 * shoppinglist service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shoppinglist.shoppinglist');
