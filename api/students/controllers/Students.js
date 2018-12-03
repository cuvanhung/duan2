'use strict';

/**
 * Students.js controller
 *
 * @description: A set of functions called "actions" for managing `Students`.
 */

module.exports = {

  /**
   * Retrieve students records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.students.search(ctx.query);
    } else {
      return strapi.services.students.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a students record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.students.fetch(ctx.params);
  },

  /**
   * Count students records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.students.count(ctx.query);
  },

  /**
   * Create a/an students record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.students.add(ctx.request.body);
  },

  /**
   * Update a/an students record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.students.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an students record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.students.remove(ctx.params);
  }
};
