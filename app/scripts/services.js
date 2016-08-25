'use strict';

angular.module('smalldataCepPortalApp')
  .factory("streams", function ($resource, configService) {
    return $resource(configService.cepPortalUrl + "/streams/:id", null, {
      'update': {method: 'PUT'}
    });
  }).factory("scenarios", function ($resource, configService) {
    return $resource(configService.cepPortalUrl + "/scenarios/:id", null, {
      'update': {method: 'PUT'}
    });
  }).factory("consumers", function ($resource, configService) {
    return $resource(configService.cepPortalUrl + "/eventConsumers/:id", null, {
      'update': {method: 'PUT'},
      'start': {method: 'POST', url: configService.cepPortalUrl + "/eventConsumers/:id/start", params: {id:'@eventConsumerId'}},
      'stop': {method: 'POST', url: configService.cepPortalUrl + "/eventConsumers/:id/stop", params: {id:'@eventConsumerId'}}
    });
  });
