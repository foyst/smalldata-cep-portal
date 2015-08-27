'use strict';

angular.module('smalldataCepPortalApp')
  .controller('ConsumersCtrl', function ($scope, consumers, streams) {

    $scope.existingStreams = [];
    var Consumer = consumers;

    $scope.eventConsumerTypes = [
      {name: "kafka", class: "KafkaEventConsumerConfigDto"}
    ];

    $scope.viewStateEnum = {
      LIST: "LIST",
      EDIT: "EDIT"
    };

    $scope.modifyStateEnum = {
      ADDING: "ADDING",
      EDITING: "EDITING"
    };
    $scope.modifyState = $scope.modifyStateEnum.ADDING;

    $scope.consumers = [];
    $scope.currentConsumer = {};

    $scope.addConsumer = function () {

      $scope.currentConsumer = new Consumer();
      $scope.modifyState = $scope.modifyStateEnum.ADDING;
      $scope.viewState = $scope.viewStateEnum.EDIT;
    };

    $scope.editConsumer = function (consumer) {

      $scope.currentConsumer = consumer;
      $scope.modifyState = $scope.modifyStateEnum.EDITING;
      $scope.viewState = $scope.viewStateEnum.EDIT;
    };

    $scope.saveConsumer = function (modifiedConsumer) {

      if ($scope.modifyState === $scope.modifyStateEnum.ADDING) {
        modifiedConsumer.$save().then(function(){
          $scope.resetPage();
        });
      }
      else {
        modifiedConsumer.$update().then(function(){
          $scope.resetPage();
        });
      }
    };

    $scope.resetPage = function() {

      consumers.query(function (returnedConsumers) {
        $scope.consumers = returnedConsumers;
      });
      $scope.viewState = $scope.viewStateEnum.LIST;
      streams.query(function(returnedStreams) {
        $scope.existingStreams = returnedStreams;
      });
    };

    $scope.resetPage();
  });
