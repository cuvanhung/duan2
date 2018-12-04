'use strict';

/**
 * Mark.js controller
 *
 * @description: A set of functions called "actions" for managing `Mark`.
 */

module.exports = {

  /**
   * Retrieve mark records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.mark.search(ctx.query);
    } else {
      return strapi.services.mark.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a mark record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.mark.fetch(ctx.params);
  },

  /**
   * Count mark records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mark.count(ctx.query);
  },

  /**
   * Create a/an mark record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mark.add(ctx.request.body);
  },

  /**
   * Update a/an mark record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mark.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mark record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mark.remove(ctx.params);
  }
};
