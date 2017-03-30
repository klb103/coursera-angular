(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var controller = this;
    controller.items = ShoppingListCheckOffService.getItemsToBuy();

    controller.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var controller = this;
    controller.items = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      {
        name: "Garlic Bread",
        quantity: 3
      },
      {
        name: "Cans of pop",
        quantity: 10
      },
      {
        name: "Pizza",
        quantity: 2
      },
      {
        name: "Wedges",
        quantity: 2
      },
      {
        name: "Chicken Strips",
        quantity: 1
      },
      {
        name: "Ice-cream",
        quantity: 8
      }
    ];
    var boughtList = [];

    service.getItemsToBuy = function() {
      return toBuyList;
    };

    service.getItemsBought = function() {
      return boughtList;
    };

    service.buyItem = function(itemIndex) {
      var item = toBuyList[itemIndex];
      toBuyList.splice(itemIndex, 1);
      boughtList.push(item);
    };

  }

})();
