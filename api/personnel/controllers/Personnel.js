'use strict';

/**
 * Personnel.js controller
 *
 * @description: A set of functions called "actions" for managing `Personnel`.
 */

module.exports = {

  /**
   * Retrieve personnel records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.personnel.search(ctx.query);
    } else {
      return strapi.services.personnel.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a personnel record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.personnel.fetch(ctx.params);
  },

  /**
   * Count personnel records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.personnel.count(ctx.query);
  },

  /**
   * Create a/an personnel record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.personnel.add(ctx.request.body);
  },

  /**
   * Update a/an personnel record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.personnel.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an personnel record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.personnel.remove(ctx.params);
  }
};
