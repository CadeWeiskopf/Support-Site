/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(["N/error", "N/log", "N/record", "N/search"], (
  error,
  log,
  record,
  search
) => {
  const endpoints = {
    users: (method, body) => {
      if (method === "POST") {
        //login
        log.debug(`users post`, body);
      } else {
        throw error.create({
          message: `Unsupported request method. /users`,
          name: `UNSUPPORTED_REQUEST_METHOD`,
          notifyOff: false,
        });
      }
    },
  };
  /**
   * Defines the Suitelet script trigger point.
   * @param {Object} scriptContext
   * @param {ServerRequest} scriptContext.request - Incoming request
   * @param {ServerResponse} scriptContext.response - Suitelet response
   * @since 2015.2
   */
  const onRequest = (scriptContext) => {
    scriptContext.response.addHeader({
      name: "Access-Control-Allow-Origin",
      value: "http://localhost:3001",
    });
    scriptContext.response.addHeader({
      name: "Access-Control-Allow-Methods",
      value: "GET,POST",
    });
    scriptContext.response.addHeader({
      name: "Access-Control-Allow-Headers",
      value: "Content-Type",
    });
    log.debug(`request`, scriptContext);
    const { body, method, clientIpAddress } = scriptContext.request;
    const { endpoint } = scriptContext.request.parameters;
    log.debug(
      clientIpAddress,
      `${scriptContext.request.method} @ /${endpoint}`
    );
    endpoints[endpoint](method, body);

    scriptContext.response.write(JSON.stringify({ ok: true }));
  };

  return { onRequest };
});
