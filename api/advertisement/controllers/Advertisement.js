'use strict';

/**
 * Advertisement.js controller
 *
 * @description: A set of functions called "actions" for managing `Advertisement`.
 */

module.exports = {

  /**
   * Retrieve advertisement records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.advertisement.search(ctx.query);
    } else {
      return strapi.services.advertisement.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a advertisement record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.advertisement.fetch(ctx.params);
  },

  /**
   * Count advertisement records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.advertisement.count(ctx.query);
  },

  /**
   * Create a/an advertisement record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.advertisement.add(ctx.request.body);
  },

  /**
   * Update a/an advertisement record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.advertisement.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an advertisement record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.advertisement.remove(ctx.params);
  }
};
