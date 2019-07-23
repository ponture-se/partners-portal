const axios = require("axios");

const config = process.env;
const baseUrl = config.REACT_APP_BASE_URL;
const getTokenUrl = baseUrl + config.REACT_APP_GET_TOKEN_URL;
const isMock = config.REACT_APP_IS_MOCK_DATA === "true" ? true : false;

export function getToken() {
  let _onOkCallBack;
  function _onOk(result) {
    if (_onOkCallBack) {
      _onOkCallBack(result);
    }
  }
  let _onServerErrorCallBack;
  function _onServerError(result) {
    if (_onServerErrorCallBack) {
      _onServerErrorCallBack(result);
    }
  }
  let _onBadRequestCallBack;
  function _onBadRequest(result) {
    if (_onBadRequestCallBack) {
      _onBadRequestCallBack(result);
    }
  }
  let _unAuthorizedCallBack;
  function _unAuthorized(result) {
    if (_unAuthorizedCallBack) {
      _unAuthorizedCallBack(result);
    }
  }
  let _notFoundCallBack;
  function _notFound(result) {
    if (_notFoundCallBack) {
      _notFoundCallBack(result);
    }
  }
  let _onRequestErrorCallBack;
  function _onRequestError(result) {
    if (_onRequestErrorCallBack) {
      _onRequestErrorCallBack(result);
    }
  }
  let _unKnownErrorCallBack;
  function _unKnownError(result) {
    if (_unKnownErrorCallBack) {
      _unKnownErrorCallBack(result);
    }
  }

  const _call = async (userName, password) => {
    try {
      let rawResponse;
      if (!isMock) {
        const url = getTokenUrl;
        rawResponse = await axios({
          url: url,
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            userName,
            password
          }
        });
      } else {
        rawResponse = { status: 200, data: { access_token: "hghgh" } };
      }

      const status = rawResponse.status;
      const result = rawResponse.data;

      switch (status) {
        case 200:
          _onOk(result);
          break;
        case 400:
          _onBadRequest();
          break;
        case 401:
          _unAuthorized();
          break;
        case 404:
          _notFound();
          break;
        case 500:
          _onServerError(result);
          break;
        default:
          _unKnownError();
          break;
      }
    } catch (error) {
      _onRequestError(error.message);
    }
  };

  return {
    call: _call,
    onOk: function(callback) {
      _onOkCallBack = callback;
      return this;
    },
    onServerError: function(callback) {
      _onServerErrorCallBack = callback;
      return this;
    },
    onBadRequest: function(callback) {
      _onBadRequestCallBack = callback;
      return this;
    },
    notFound: function(callback) {
      _notFoundCallBack = callback;
      return this;
    },
    unAuthorized: function(callback) {
      _unAuthorizedCallBack = callback;
      return this;
    },
    onRequestError: function(callback) {
      _onRequestErrorCallBack = callback;
      return this;
    },
    unKnownError: function(callback) {
      _unKnownErrorCallBack = callback;
      return this;
    }
  };
}

export function getUserInfo() {
  let _onOkCallBack;
  function _onOk(result) {
    if (_onOkCallBack) {
      _onOkCallBack(result);
    }
  }
  let _onServerErrorCallBack;
  function _onServerError(result) {
    if (_onServerErrorCallBack) {
      _onServerErrorCallBack(result);
    }
  }
  let _onBadRequestCallBack;
  function _onBadRequest(result) {
    if (_onBadRequestCallBack) {
      _onBadRequestCallBack(result);
    }
  }
  let _unAuthorizedCallBack;
  function _unAuthorized(result) {
    if (_unAuthorizedCallBack) {
      _unAuthorizedCallBack(result);
    }
  }
  let _notFoundCallBack;
  function _notFound(result) {
    if (_notFoundCallBack) {
      _notFoundCallBack(result);
    }
  }
  let _onRequestErrorCallBack;
  function _onRequestError(result) {
    if (_onRequestErrorCallBack) {
      _onRequestErrorCallBack(result);
    }
  }
  let _unKnownErrorCallBack;
  function _unKnownError(result) {
    if (_unKnownErrorCallBack) {
      _unKnownErrorCallBack(result);
    }
  }

  const _call = async () => {
    try {
      let rawResponse;
      if (!isMock) {
        const url = getTokenUrl;
        rawResponse = await axios({
          url: url,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
      } else {
        rawResponse = {
          status: 200,
          data: { firstName: "Saeed", lastName: "Pdyb" }
        };
      }

      const status = rawResponse.status;
      const result = rawResponse.data;

      switch (status) {
        case 200:
          _onOk(result);
          break;
        case 400:
          _onBadRequest();
          break;
        case 401:
          _unAuthorized();
          break;
        case 404:
          _notFound();
          break;
        case 500:
          _onServerError(result);
          break;
        default:
          _unKnownError();
          break;
      }
    } catch (error) {
      _onRequestError(error.message);
    }
  };

  return {
    call: _call,
    onOk: function(callback) {
      _onOkCallBack = callback;
      return this;
    },
    onServerError: function(callback) {
      _onServerErrorCallBack = callback;
      return this;
    },
    onBadRequest: function(callback) {
      _onBadRequestCallBack = callback;
      return this;
    },
    notFound: function(callback) {
      _notFoundCallBack = callback;
      return this;
    },
    unAuthorized: function(callback) {
      _unAuthorizedCallBack = callback;
      return this;
    },
    onRequestError: function(callback) {
      _onRequestErrorCallBack = callback;
      return this;
    },
    unKnownError: function(callback) {
      _unKnownErrorCallBack = callback;
      return this;
    }
  };
}
