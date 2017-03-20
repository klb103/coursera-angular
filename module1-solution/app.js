(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    // Provide an initial empty value for the menu
    $scope.lunchMenu = "";

    // Define a default colour for the message text/border
    $scope.messageColour = "black";

    // Check the menu provided and set the message
    $scope.checkMenu = function () {

      // If no menu is provided, prompt the user to enter data
      // and display the message/border in red
      if ($scope.lunchMenu == "") {
        $scope.messageColour = "red";
        $scope.menuMessage = "Please enter data first";
        return;
      }
      else {
        // If data is provided the message/border is displayed in green
        $scope.messageColour = "green";
      }

      // Split the menu into an array of individual items
      // Use an array filter to get rid of entries that are empty
      var lunchArray = $scope.lunchMenu.split(",").filter(function(arrayItem) {
        return arrayItem.trim() != "";
      });

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
