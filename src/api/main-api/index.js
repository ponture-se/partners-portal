const axios = require("axios");

const config = process.env;
const baseUrl = config.REACT_APP_BASE_URL;
const isMock = true;

export function getNewApplications() {
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

  const _call = async (cID = "123456789") => {
    try {
      let rawResponse;
      if (!isMock) {
        const url =
          "https://crmdev-ponture-crmdev.cs84.force.com/needs/services/apexrest/pCommunity?action=new&cID=" +
          cID;
        rawResponse = await axios({
          url: url,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
      } else {
        rawResponse = {
          status: 200,
          data: [
            {
              createdAt: "2019-07-22 10: 11: 01",
              RecordType: "Business Loan",
              amortizationPeriod: 13.0,
              amount: 450000.0,
              CompanyRegisterationDate: "2015-01-05",
              need: [],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankIdVeridied: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              createdAt: "2019-07-22 10: 11: 34",
              RecordType: "Business Loan",
              amortizationPeriod: 13.0,
              amount: 450000.0,
              CompanyRegisterationDate: "2015-01-05",
              need: [],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankIdVeridied: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              createdAt: "2019-07-22 10: 14: 34",
              RecordType: "Business Loan",
              amortizationPeriod: 13.0,
              amount: 450000.0,
              CompanyRegisterationDate: "2015-01-05",
              need: [],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankIdVeridied: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              createdAt: "2019-07-22 10: 19: 55",
              RecordType: "Business Loan",
              amortizationPeriod: 13.0,
              amount: 450000.0,
              CompanyRegisterationDate: "2015-01-05",
              need: [],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankIdVeridied: true,
              activeCompany: true,
              companyVerified: true
            }
          ]
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
export function getOpenedApplications() {
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

  const _call = async (cID = "123456789") => {
    try {
      let rawResponse;
      if (!isMock) {
        const url =
          "https://crmdev-ponture-crmdev.cs84.force.com/needs/services/apexrest/pCommunity?action=open&cID=" +
          cID;
        rawResponse = await axios({
          url: url,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
      } else {
        rawResponse = {
          status: 200,
          data: [
            {
              opportunityID: "0065E00000DkjDzQAJ",
              Name: "Ek. för. Sydsvenska höglandets biokol",
              createdAt: "2019-07-19 10: 48: 39",
              RecordType: "Business Loan",
              amortizationPeriod: 12.0,
              amount: 200000.0,
              CompanyRegisterationDate: "2012-03-20",
              need: [],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankIdVeridied: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DkjMQQAZ",
              Name: "Atsol AB",
              createdAt: "2019-07-19 11: 20: 10",
              RecordType: "Business Loan",
              amortizationPeriod: 13.0,
              amount: 450000.0,
              CompanyRegisterationDate: "2015-01-05",
              need: [],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankIdVeridied: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DkyPVQAZ",
              Name: "Atsol AB",
              createdAt: "2019-07-22 10: 36: 30",
              RecordType: "Business Loan",
              amortizationPeriod: 13.0,
              amount: 450000.0,
              CompanyRegisterationDate: "2015-01-05",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankIdVeridied: true,
              activeCompany: true,
              companyVerified: true
            }
          ]
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
export function getApplicationById() {
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

  const _call = async (cID = "123456789") => {
    try {
      let rawResponse;
      if (!isMock) {
        const url =
          "https://crmdev-ponture-crmdev.cs84.force.com/needs/services/apexrest/pCommunity?action=open&cID=" +
          cID;
        rawResponse = await axios({
          url: url,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
      } else {
        rawResponse = {
          status: 200,
          data: {
            opportunityID: "0065E00000DkyPVQAZ",
            Name: "Atsol AB",
            createdAt: "2019-07-22 10: 36: 30",
            RecordType: "Business Loan",
            amortizationPeriod: 13.0,
            amount: 450000.0,
            CompanyRegisterationDate: "2015-01-05",
            need: ["finance_debts", "general_liquidity"],
            lastAvailableRevenue: 1887,
            creditSafeScore: 2,
            bankIdVeridied: true,
            activeCompany: true,
            companyVerified: true
          }
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
