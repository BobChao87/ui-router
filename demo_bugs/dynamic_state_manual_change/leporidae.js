(function() {

'use strict';

angular
  .module('leporidae', ['ng', 'ui.router'])
  .config(leporidaeConfig)
  .run(leporidaeRun)
  .controller('leporidaeController', leporidaeController);

leporidaeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
function leporidaeConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider
    .otherwise('/rabbit/white');
  $stateProvider
    .state('leporidae', {
      url: '/:species/:color',
      templateUrl: 'leporidae.html',
      controller: 'leporidaeController',
      reloadOnSearch: false,
      params: {
        species: {
          dynamic: true
        },
        color: {
          dynamic: true
        }
      }
    })
}

leporidaeRun.$inject = ['$templateCache'];
function leporidaeRun($templateCache) {
  $templateCache
    .put('leporidae.html',
    `
      <div id="species-choices">
        <span>Species: </span>
        <a ui-sref=".({species: 'rabbit'})" ng-hide="stateParams.species === 'rabbit'">
            Rabbit
        </a>
        <span ng-show="stateParams.species === 'rabbit'">
            Rabbit
        </span>
        <a ui-sref=".({species: 'hare'})" ng-hide="stateParams.species === 'hare'">
            Hare
        </a>
        <span ng-show="stateParams.species === 'hare'">
            Hare
        </span>
      </div>
      <div id="color-choices">
        <span>Color: </span>
        <a ui-sref=".({color: 'white'})" ng-hide="stateParams.color === 'white'">
            White
        </a>
        <span ng-show="stateParams.color === 'white'">
            White
        </span>
        <a ui-sref=".({color: 'brown'})" ng-hide="stateParams.color === 'brown'">
            Brown
        </a>
        <span ng-show="stateParams.color === 'brown'">
            Brown
        </span>
      </div>
    `);
}

leporidaeController.$inject = ['$scope', '$stateParams'];
function leporidaeController($scope, $stateParams) {
  $scope.stateParams = $stateParams;
}

})();
