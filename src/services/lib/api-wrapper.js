const API_URL = "https://aspire.co/api";

function ApiError(message, data, status) {
  let response = null;
  let isObject = false;

  try {
    response = JSON.parse(data);
    isObject = true;
  } catch (e) {
    response = data;
  }

  this.response = response;
  this.message = message;
  this.status = status;
  this.toString = function () {
    return `${this.message}\nResponse:\n${isObject ? JSON.stringify(this.response, null, 2) : this.response}`;
  };
}

const fetchResource = (path, userOptions = {}) => {
  const defaultOptions = {};
  const defaultHeaders = {};

  const options = {
    ...defaultOptions,
    ...userOptions,
    headers: {
      ...defaultHeaders,
      ...userOptions.headers,
    },
  };

  const url = `${API_URL}/${path}`;

  let response = null;

  return fetch(url, options)
    .then((responseObject) => {
      response = responseObject;

      if (response.status === 401) {
        // Maybe redirect to login page?
      }

      if (response.status < 200 || response.status >= 300) {
        return response.text();
      }

      return response.json();
    })
    .then((parsedResponse) => {
      if (response.status < 200 || response.status >= 300) {
        throw parsedResponse;
      }
      return parsedResponse;
    })
    .catch((error) => {
      if (response) {
        throw new ApiError(`Request failed with status ${response.status}.`, error, response.status);
      } else {
        throw new ApiError(error.toString(), null, "REQUEST_FAILED");
      }
    });
};

export default fetchResource;
