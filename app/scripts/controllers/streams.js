'use strict';

angular.module('smalldataCepPortalApp')
  .controller('StreamsCtrl', function ($scope, streams) {

    var Stream = streams;

    $scope.viewStateEnum = {
      LIST: "LIST",
      EDIT: "EDIT"
    };

    $scope.modifyStateEnum = {
      ADDING: "ADDING",
      EDITING: "EDITING"
    };
    $scope.modifyState = $scope.modifyStateEnum.ADDING;

    $scope.streams = [];
    $scope.currentStream = {};

    $scope.addStream = function () {

      $scope.currentStream = new Stream();
      $scope.modifyState = $scope.modifyStateEnum.ADDING;
      $scope.viewState = $scope.viewStateEnum.EDIT;
    };

    $scope.editStream = function (stream) {

      $scope.currentStream = stream;
      $scope.modifyState = $scope.modifyStateEnum.EDITING;
      $scope.viewState = $scope.viewStateEnum.EDIT;
    };

    $scope.saveStream = function (modifiedStream) {

      if ($scope.modifyState === $scope.modifyStateEnum.ADDING) {
        modifiedStream.$save().then(function(){
          $scope.resetPage();
        });
      }
      else {
        modifiedStream.$update().then(function(){
          $scope.resetPage();
        });
      }
    };

    $scope.resetPage = function() {

      streams.query(function (data) {
        $scope.streams = data;
      });
      $scope.viewState = $scope.viewStateEnum.LIST;
    };

    $scope.resetPage();
  });
