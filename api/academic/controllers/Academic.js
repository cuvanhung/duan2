'use strict';

/**
 * Academic.js controller
 *
 * @description: A set of functions called "actions" for managing `Academic`.
 */

module.exports = {

  /**
   * Retrieve academic records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.academic.search(ctx.query);
    } else {
      return strapi.services.academic.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a academic record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.academic.fetch(ctx.params);
  },

  /**
   * Count academic records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.academic.count(ctx.query);
  },

  /**
   * Create a/an academic record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.academic.add(ctx.request.body);
  },

  /**
   * Update a/an academic record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.academic.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an academic record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.academic.remove(ctx.params);
  }
};
