'use strict';

angular.module('smalldataCepPortalApp')
  .controller('ScenariosCtrl', function ($scope, scenarios) {

    var Scenario = scenarios;

    $scope.viewStateEnum = {
      LIST: "LIST",
      EDIT: "EDIT"
    };

    $scope.modifyStateEnum = {
      ADDING: "ADDING",
      EDITING: "EDITING"
    };
    $scope.modifyState = $scope.modifyStateEnum.ADDING;

    $scope.scenarios = [];
    $scope.currentScenario = {};

    $scope.addScenario = function () {

      $scope.currentScenario = new Scenario();
      $scope.modifyState = $scope.modifyStateEnum.ADDING;
      $scope.viewState = $scope.viewStateEnum.EDIT;
    };

    $scope.editScenario = function (scenario) {

      $scope.currentScenario = scenario;
      $scope.modifyState = $scope.modifyStateEnum.EDITING;
      $scope.viewState = $scope.viewStateEnum.EDIT;
    };

    $scope.saveScenario = function (modifiedScenario) {

      if ($scope.modifyState === $scope.modifyStateEnum.ADDING) {
        modifiedScenario.$save().then(function(){
          $scope.resetPage();
        });
      }
      else {
        modifiedScenario.$update().then(function(){
          $scope.resetPage();
        });
      }
    };

    $scope.resetPage = function() {

      scenarios.query(function (data) {
        $scope.scenarios = data;
      });
      $scope.viewState = $scope.viewStateEnum.LIST;
    };

    $scope.resetPage();
  });
