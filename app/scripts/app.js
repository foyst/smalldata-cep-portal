'use strict';

/**
 * @ngdoc overview
 * @name smalldataCepPortalApp
 * @description
 * # smalldataCepPortalApp
 *
 * Main module of the application.
 */
angular
  .module('smalldataCepPortalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/streams', {
        templateUrl: 'views/streams.html',
        controller: 'StreamsCtrl',
        controllerAs: 'streams'
      })
      .when('/scenarios', {
        templateUrl: 'views/scenarios.html',
        controller: 'ScenariosCtrl',
        controllerAs: 'scenarios'
      })
      .when('/consumers', {
        templateUrl: 'views/consumers.html',
        controller: 'ConsumersCtrl',
        controllerAs: 'consumers'
      })
      .when('/producers', {
        templateUrl: 'views/producers.html',
        controller: 'ProducersCtrl',
        controllerAs: 'producers'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.element(document).ready(function () {
  $.get('config/environment.json', function (envData) {

      angular.module('smalldataCepPortalApp').config(['configServiceProvider', function(configServiceProvider) {
        configServiceProvider.configure(envData);
      }]);

      angular.bootstrap('#app', ['smalldataCepPortalApp'])
    });
});
