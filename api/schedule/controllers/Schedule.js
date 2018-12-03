'use strict';

/**
 * Schedule.js controller
 *
 * @description: A set of functions called "actions" for managing `Schedule`.
 */

module.exports = {

  /**
   * Retrieve schedule records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.schedule.search(ctx.query);
    } else {
      return strapi.services.schedule.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a schedule record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.schedule.fetch(ctx.params);
  },

  /**
   * Count schedule records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.schedule.count(ctx.query);
  },

  /**
   * Create a/an schedule record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.schedule.add(ctx.request.body);
  },

  /**
   * Update a/an schedule record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.schedule.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an schedule record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.schedule.remove(ctx.params);
  }
};
