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
  });
