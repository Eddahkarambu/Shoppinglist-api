'use strict';

/**
 *  shoppinglist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::shoppinglist.shoppinglist', ({strapi}) => ({
     async getMyShoppingList(ctx) {
        let shoppingLists = await (strapi.query('api::shoppinglist.shoppinglist').findMany({
            where: {
              user: ctx.state.user.id
            },
          }))

        
        return shoppingLists
      },
      async postMyShoppingList(ctx) {
        ctx.request.body.data.user = ctx.state.user.id;
        let shoppingLists = await (strapi.query('api::shoppinglist.shoppinglist').create(ctx.request.body))
 
        
        return shoppingLists
      }
      
}));


