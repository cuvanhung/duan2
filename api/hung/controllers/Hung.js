'use strict';

/**
 * Hung.js controller
 *
 * @description: A set of functions called "actions" for managing `Hung`.
 */

module.exports = {

  /**
   * Retrieve hung records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.hung.search(ctx.query);
    } else {
      return strapi.services.hung.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a hung record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.hung.fetch(ctx.params);
  },

  /**
   * Count hung records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hung.count(ctx.query);
  },

  /**
   * Create a/an hung record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hung.add(ctx.request.body);
  },

  /**
   * Update a/an hung record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hung.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hung record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hung.remove(ctx.params);
  }
};
