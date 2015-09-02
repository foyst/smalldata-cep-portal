'use strict';

angular.module('smalldataCepPortalApp')
  .factory("streams", function ($resource, configService) {
    return $resource(configService.apiUrl + "/streams/:id", null, {
      'update': {method: 'PUT'}
    });
  }).factory("scenarios", function ($resource, configService) {
    return $resource(configService.apiUrl + "/scenarios/:id", null, {
      'update': {method: 'PUT'}
    });
  }).factory("consumers", function ($resource, configService) {
    return $resource(configService.apiUrl + "/eventConsumers/:id", null, {
      'update': {method: 'PUT'},
      'start': {method: 'POST', url: configService.apiUrl + "/eventConsumers/:id/start", params: {id:'@eventConsumerId'}},
      'stop': {method: 'POST', url: configService.apiUrl + "/eventConsumers/:id/stop", params: {id:'@eventConsumerId'}}
    });
  });
