import Axios from 'axios';
import initApiRequest from 'services/api-request';

/**
 * Request details for XMLHTTP request
 */

function sanitizeController(apiDetail, pathVariables) {
  return pathVariables && Object.keys(pathVariables).length
    ? {
        ...apiDetail,
        controllerName: Object.entries(pathVariables).reduce(
          (acc, [key, value]) =>
            (acc = acc.replace(`{${key}}`, value?.toString())),
          apiDetail.controllerName
        ),
      }
    : apiDetail;
}

const axiosCancelSource = Axios.CancelToken.source();

/**
 * Manages API call and updates reducer with success or failure
 * @param apiDetails redux action and api config
 * @param apiRequestDetails request details for XMLHTTP request
 */
export default async function performApiAction(apiDetails, apiRequestDetails) {
  const { requestMethod, pathVariables, params, cancelSource } =
    apiRequestDetails;

  // Check for path variables in controllername
  const sanitizedApiDetails = sanitizeController(apiDetails, pathVariables);

  let responseData;
  try {
    responseData = await initApiRequest(
      sanitizedApiDetails,
      requestMethod || sanitizedApiDetails.requestMethod || 'GET',
      params,
      cancelSource || axiosCancelSource
    );
  } catch (error) {
    responseData = error;
    throw new Error(responseData.message);
  }
  return responseData;
}
