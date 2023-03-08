/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(["N/log", "N/record", "N/search"], (log, record, search) => {
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
    log.debug(`request`, scriptContext);
    const { clientIpAddress } = scriptContext.request;
    const { endpoint } = scriptContext.request.parameters;
    log.debug(
      clientIpAddress,
      `${scriptContext.request.method} @ /${endpoint}`
    );

    scriptContext.response.write(JSON.stringify({ ok: true }));
  };

  return { onRequest };
});
