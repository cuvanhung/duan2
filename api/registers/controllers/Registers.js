'use strict';

/**
 * Registers.js controller
 *
 * @description: A set of functions called "actions" for managing `Registers`.
 */

module.exports = {

  /**
   * Retrieve registers records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.registers.search(ctx.query);
    } else {
      return strapi.services.registers.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a registers record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.registers.fetch(ctx.params);
  },

  /**
   * Count registers records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.registers.count(ctx.query);
  },

  /**
   * Create a/an registers record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.registers.add(ctx.request.body);
  },

  /**
   * Update a/an registers record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.registers.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an registers record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.registers.remove(ctx.params);
  }
};
