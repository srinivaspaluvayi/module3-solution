(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);


  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        message: '<',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function NarrowItDownDirectiveController(){
    var list=this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    // controller properties
    ctrl.item = "";

    ctrl.items = [];

    ctrl.message = "";

    ctrl.remove= function(itemIndex){
      ctrl.items.splice(itemIndex,1);
    }

    ctrl.searchItems = function () {

      var totalItems = [];
      var promise = MenuSearchService.getMenuItems();

      promise.then(function (response) {

        totalItems = (response.data).menu_items;

        if (ctrl.item === "") {
          ctrl.items = [];
          ctrl.message = "Nothing found";
        }
        else {

          var temp = [];
          for (var menuItem of totalItems) {
            if (menuItem.description.indexOf(ctrl.item) != -1) {
              temp.push(menuItem);
            }
          }
          if (temp.length == 0) {
            ctrl.items = [];
            ctrl.message = "Nothing found";
          }
          else {
            ctrl.message="";
            ctrl.items = temp;
           
          }

        }
      })
        .catch(function (error) {
          ctrl.items = [];
          ctrl.message = "Nothing found";
        });

    };
  }


  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMenuItems = function () {
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      });
      return response;
    };

  }

})();
