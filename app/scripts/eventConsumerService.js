angular.module("smalldataCepPortalApp").service("eventConsumerService", function($q, $timeout, configService) {

  var service = {},
    listener = $q.defer(),
    socket = {
    client: null,
    stomp: null
  },
    messageIds = [];

  service.RECONNECT_TIMEOUT = 30000;
  service.SOCKET_URL = configService.cepPortalUrl + "/eventWebSocketHandler";
  service.CHAT_TOPIC = "/v1/topic";
  service.CHAT_BROKER = "/app/chat";

  service.receive = function() {
    return listener.promise;
  };

  var reconnect = function() {
    $timeout(function() {
      initialize();
    }, this.RECONNECT_TIMEOUT);
  };

  var startListener = function() {
    socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
      listener.notify(JSON.parse(data.body));
    });
  };

  var initialize = function() {
    socket.client = new SockJS(service.SOCKET_URL);
    socket.stomp = Stomp.over(socket.client);
    socket.stomp.connect({}, startListener);
    socket.stomp.onclose = reconnect;
  };

  initialize();
  return service;
});
