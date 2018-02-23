// The Api module is designed to handle all interactions with the server

var Api = (function() {
  let requestPayload;
  let responsePayload;
  const messageEndpoint = '/api/message';

  // Publicly accessible methods defined
  return {
    sendRequest,

    // The request/response getters/setters are defined here to prevent internal methods
    // from calling the methods without any of the callbacks that are added elsewhere.
    getRequestPayload() {
      return requestPayload;
    },
    setRequestPayload(newPayloadStr) {
      requestPayload = JSON.parse(newPayloadStr);
    },
    getResponsePayload() {
      return responsePayload;
    },
    setResponsePayload(newPayloadStr) {
      responsePayload = JSON.parse(newPayloadStr);
    },
  };

  // Send a message request to the server
  function sendRequest(text, context) {
    // Build request payload
    const payloadToWatson = {};
    payloadToWatson.input = {
      text,
    };
    payloadToWatson.context = context;

    // Built http request
    const http = new XMLHttpRequest();
    http.open('POST', messageEndpoint, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200 && http.responseText) {
        Api.setResponsePayload(http.responseText);
      }
    };

    const params = JSON.stringify(payloadToWatson);
    // Stored in variable (publicly visible through Api.getRequestPayload)
    // to be used throughout the application
    if (Object.getOwnPropertyNames(payloadToWatson).length !== 0) {
      Api.setRequestPayload(params);
    }

    // Send request
    http.send(params);
  }
})();
