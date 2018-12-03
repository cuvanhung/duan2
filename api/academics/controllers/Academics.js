'use strict';

/**
 * Academics.js controller
 *
 * @description: A set of functions called "actions" for managing `Academics`.
 */

module.exports = {

  /**
   * Retrieve academics records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.academics.search(ctx.query);
    } else {
      return strapi.services.academics.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a academics record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.academics.fetch(ctx.params);
  },

  /**
   * Count academics records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.academics.count(ctx.query);
  },

  /**
   * Create a/an academics record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.academics.add(ctx.request.body);
  },

  /**
   * Update a/an academics record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.academics.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an academics record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.academics.remove(ctx.params);
  }
};
