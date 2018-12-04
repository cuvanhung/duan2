'use strict';

/**
 * Events.js controller
 *
 * @description: A set of functions called "actions" for managing `Events`.
 */

module.exports = {

  /**
   * Retrieve events records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.events.search(ctx.query);
    } else {
      return strapi.services.events.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a events record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.events.fetch(ctx.params);
  },

  /**
   * Count events records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.events.count(ctx.query);
  },

  /**
   * Create a/an events record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.events.add(ctx.request.body);
  },

  /**
   * Update a/an events record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.events.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an events record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.events.remove(ctx.params);
  }
};
