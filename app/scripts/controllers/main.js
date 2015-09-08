'use strict';

angular.module('smalldataCepPortalApp')
  .controller('MainCtrl', function ($scope, eventConsumerService) {

    $scope.messages = [];

    eventConsumerService.receive().then(null, null, function(message) {
      $scope.messages.push(message);
    });
  });
