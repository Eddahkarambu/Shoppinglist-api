module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/me/shoppinglists',
        handler: 'shoppinglist.getMyShoppingList',
      },
      {
        method: 'POST',
        path: '/me/shoppinglists',
        handler: 'shoppinglist.postMyShoppingList',
      }
    ]
  }

