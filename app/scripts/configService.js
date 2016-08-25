'use strict';

angular.module('smalldataCepPortalApp')
  .provider("configService", function() {

    var config = {};

    this.configure = function(newConfig) {

      angular.extend(config, newConfig);
    };

    this.$get = [function () {
      if (!config) {
        throw new Error('CEP API URL must be configured');
      }
      return config;
    }];
});
