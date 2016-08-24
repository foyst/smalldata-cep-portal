'use strict';

angular.module('smalldataCepPortalApp')
  .controller('MainCtrl', function ($scope, eventConsumerService) {

    $scope.messages = [];
    $scope.observedEventTypes = [];
    $scope.selectedEventType = '';

    $scope.istrue = (!!$scope.selectedEventType || undefined)

    eventConsumerService.receive().then(null, null, function(message) {

      var eventType = message.streamId;
      if ($scope.observedEventTypes.indexOf(eventType) == -1) $scope.observedEventTypes.push(eventType);
      $scope.messages.push(message);
    });
  });
