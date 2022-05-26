import Axios from 'axios';

const getRequestHeaders = () => {
  let headers = {
    'Content-Type': 'application/json',
  };

  return headers;
};

// Cancel a request using a cancel token.
const cancelToken = Axios.CancelToken;
const source = cancelToken.source();

export default function initApiRequest(
  apiDetails,
  requestMethod,
  params,
  cancelSource
) {
  // API URL
  const url = process.env.REACT_APP_API_ENDPOINT;

  const headers = getRequestHeaders();

  let axiosReqParams = {
    // baseURL: apiDetails.controllerName,
    baseURL: url,
    url: apiDetails.controllerName,
    method: requestMethod,
    responseType: 'json',
    timeout: 60 * 3 * 1000,
    cancelToken: cancelSource ? cancelSource.token : source.token,
    headers,
  };

  if (params) {
    axiosReqParams = {
      ...axiosReqParams,
      params: params,
    };
  }

  return Axios.request(axiosReqParams)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}
