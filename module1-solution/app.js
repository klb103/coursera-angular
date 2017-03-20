(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    // Provide an initial empty value for the menu
    $scope.lunchMenu = "";

    // Check the menu provided and set the message
    $scope.checkMenu = function () {

      // If no menu is provided, prompt the user to enter data
      if ($scope.lunchMenu == "") {
        $scope.menuMessage = "Please enter data first";
        return;
      }

      // Split the menu into an array of individual items
      var lunchArray = $scope.lunchMenu.split(",");

      // Provide a response to the user based on the number of menu items
      if (lunchArray.length > 3) {
        $scope.menuMessage = "Too much!";
      }
      else {
        $scope.menuMessage = "Enjoy!";
      }
    };
  }

})();
