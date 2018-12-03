'use strict';

/**
 * Contents.js controller
 *
 * @description: A set of functions called "actions" for managing `Contents`.
 */

module.exports = {

  /**
   * Retrieve contents records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.contents.search(ctx.query);
    } else {
      return strapi.services.contents.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a contents record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.contents.fetch(ctx.params);
  },

  /**
   * Count contents records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.contents.count(ctx.query);
  },

  /**
   * Create a/an contents record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contents.add(ctx.request.body);
  },

  /**
   * Update a/an contents record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contents.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contents record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contents.remove(ctx.params);
  }
};
