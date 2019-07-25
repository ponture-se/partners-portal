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
              opportunityID: "0065E00000DlP8oQAF",
              createdAt: "2019-07-24 09: 13: 51",
              RecordType: "Business Loan",
              amortizationPeriod: 32.0,
              amount: 425000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: [
                "hire_staff",
                "general_liquidity",
                "season_investment",
                "renovation"
              ],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPA6QAN",
              createdAt: "2019-07-24 09: 29: 56",
              RecordType: "Business Loan",
              amortizationPeriod: 36.0,
              amount: 450000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: ["general_liquidity", "renovation", "other"],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPBeQAN",
              createdAt: "2019-07-24 09: 35: 39",
              RecordType: "Business Loan",
              amortizationPeriod: 21.0,
              amount: 1500000.0,
              CompanyRegistrationDate: "2014-12-22",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 6,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPDaQAN",
              createdAt: "2019-07-24 09: 40: 15",
              RecordType: "Business Loan",
              amortizationPeriod: 22.0,
              amount: 412047.0,
              CompanyRegistrationDate: "2015-01-05",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankVerified: true,
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
              opportunityID: "0065E00000DlP8FQAV",
              Name: "CFA International AB",
              createdAt: "2019-07-24 09: 05: 52",
              RecordType: "Business Loan",
              amortizationPeriod: 15.0,
              amount: 1375000.0,
              CompanyRegistrationDate: "2014-12-22",
              need: ["general_liquidity"],
              lastAvailableRevenue: 6,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlP8KQAV",
              Name: "RUMSDALS HÄSTSKJUTSAR O SERVICE HANDELSBOLAG",
              createdAt: "2019-07-24 09: 07: 28",
              RecordType: "Business Loan",
              amortizationPeriod: 16.0,
              amount: 875000.0,
              CompanyRegistrationDate: "1997-04-08",
              need: ["general_liquidity", "marketing", "renovation"],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPB0QAN",
              Name: "Wilfast Högsbo Aktiebolag",
              createdAt: "2019-07-24 09: 34: 33",
              RecordType: "Business Loan",
              amortizationPeriod: 12.0,
              amount: 1900001.0,
              CompanyRegistrationDate: "1994-12-12",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPC3QAN",
              Name: "CFA International AB",
              createdAt: "2019-07-24 09: 36: 30",
              RecordType: "Business Loan",
              amortizationPeriod: 21.0,
              amount: 1750000.0,
              CompanyRegistrationDate: "2014-12-22",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 6,
              creditSafeScore: 2,
              bankVerified: true,
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
            opportunityDetails: {
              opportunityID: "0065E00000DlPDaQAN",
              Name: "Atsol AB",
              opportunityStage: "Submitted",
              createdAt: "2019-07-24 09:40:15",
              RecordType: "Business Loan",
              amortizationPeriod: 22.0,
              amount: 412047.0,
              CompanyRegistrationDate: "2015-01-05",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            accountDetails: {
              orgNumber: "5569994600",
              numOfEmployees: "1",
              registeredAddress: "null",
              signatoryPower: "Firman tecknas av styrelsen",
              legalForm: "Privat aktiebolag",
              registedForTax: true,
              registedAsEmployer: true,
              registedForVAT: true,
              registedForVATDate: "2015-07-08",
              CEO: "null",
              lastPublished: "2016-12-10",
              financialYear: "2017",
              revenue: {
                totalRevenue: "1887"
              },
              profitLoss: {
                netProfitLoss: "1887",
                operatingProfitLoss: "null",
                profitAfterFinancial: "-35"
              },
              keyRatio: {
                netMargin: "-1.9",
                cashFlow: "null",
                solidity: "89.4"
              },
              annualAccounts: {
                shareCapital: "50",
                cashAndBankBalance: "181",
                totalAssets: "931",
                totalEquity: "832"
              },
              BoardMember: [
                {
                  firstName: "Christina Birgitta Ulrika",
                  givenName: "Birgitta",
                  surName: "Efternamn3542",
                  personalNum: "193701308888",
                  role: "Ledamot",
                  roleCode: "5",
                  access: "2012-03-20"
                },
                {
                  firstName: "Helga Viktoria",
                  givenName: "null",
                  surName: "Efternamn2609",
                  personalNum: "192907304766",
                  role: "Ledamot",
                  roleCode: "5",
                  access: "2012-03-20"
                },
                {
                  firstName: "Petra",
                  givenName: "null",
                  surName: "Efternamn2401",
                  personalNum: "196805029268",
                  role: "Revisor",
                  roleCode: "8",
                  access: "2012-03-20"
                }
              ]
            }
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

export function getMyOffers() {
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
              opportunityID: "0065E00000DlP8oQAF",
              createdAt: "2019-07-24 09: 13: 51",
              RecordType: "Business Loan",
              amortizationPeriod: 32.0,
              amount: 425000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: [
                "hire_staff",
                "general_liquidity",
                "season_investment",
                "renovation"
              ],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPA6QAN",
              createdAt: "2019-07-24 09: 29: 56",
              RecordType: "Business Loan",
              amortizationPeriod: 36.0,
              amount: 450000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: ["general_liquidity", "renovation", "other"],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPBeQAN",
              createdAt: "2019-07-24 09: 35: 39",
              RecordType: "Business Loan",
              amortizationPeriod: 21.0,
              amount: 1500000.0,
              CompanyRegistrationDate: "2014-12-22",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 6,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPDaQAN",
              createdAt: "2019-07-24 09: 40: 15",
              RecordType: "Business Loan",
              amortizationPeriod: 22.0,
              amount: 412047.0,
              CompanyRegistrationDate: "2015-01-05",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankVerified: true,
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
export function getAcceptedOffers() {
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
              opportunityID: "0065E00000DlP8oQAF",
              createdAt: "2019-07-24 09: 13: 51",
              RecordType: "Business Loan",
              amortizationPeriod: 32.0,
              amount: 425000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: [
                "hire_staff",
                "general_liquidity",
                "season_investment",
                "renovation"
              ],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPA6QAN",
              createdAt: "2019-07-24 09: 29: 56",
              RecordType: "Business Loan",
              amortizationPeriod: 36.0,
              amount: 450000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: ["general_liquidity", "renovation", "other"],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPBeQAN",
              createdAt: "2019-07-24 09: 35: 39",
              RecordType: "Business Loan",
              amortizationPeriod: 21.0,
              amount: 1500000.0,
              CompanyRegistrationDate: "2014-12-22",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 6,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPDaQAN",
              createdAt: "2019-07-24 09: 40: 15",
              RecordType: "Business Loan",
              amortizationPeriod: 22.0,
              amount: 412047.0,
              CompanyRegistrationDate: "2015-01-05",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankVerified: true,
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
export function getFundedApps() {
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
              opportunityID: "0065E00000DlP8oQAF",
              createdAt: "2019-07-24 09: 13: 51",
              RecordType: "Business Loan",
              amortizationPeriod: 32.0,
              amount: 425000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: [
                "hire_staff",
                "general_liquidity",
                "season_investment",
                "renovation"
              ],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPA6QAN",
              createdAt: "2019-07-24 09: 29: 56",
              RecordType: "Business Loan",
              amortizationPeriod: 36.0,
              amount: 450000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: ["general_liquidity", "renovation", "other"],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPBeQAN",
              createdAt: "2019-07-24 09: 35: 39",
              RecordType: "Business Loan",
              amortizationPeriod: 21.0,
              amount: 1500000.0,
              CompanyRegistrationDate: "2014-12-22",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 6,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPDaQAN",
              createdAt: "2019-07-24 09: 40: 15",
              RecordType: "Business Loan",
              amortizationPeriod: 22.0,
              amount: 412047.0,
              CompanyRegistrationDate: "2015-01-05",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankVerified: true,
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
export function getLostApps() {
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
              opportunityID: "0065E00000DlP8oQAF",
              createdAt: "2019-07-24 09: 13: 51",
              RecordType: "Business Loan",
              amortizationPeriod: 32.0,
              amount: 425000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: [
                "hire_staff",
                "general_liquidity",
                "season_investment",
                "renovation"
              ],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPA6QAN",
              createdAt: "2019-07-24 09: 29: 56",
              RecordType: "Business Loan",
              amortizationPeriod: 36.0,
              amount: 450000.0,
              CompanyRegistrationDate: "1994-12-12",
              need: ["general_liquidity", "renovation", "other"],
              lastAvailableRevenue: 0,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPBeQAN",
              createdAt: "2019-07-24 09: 35: 39",
              RecordType: "Business Loan",
              amortizationPeriod: 21.0,
              amount: 1500000.0,
              CompanyRegistrationDate: "2014-12-22",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 6,
              creditSafeScore: 2,
              bankVerified: true,
              activeCompany: true,
              companyVerified: true
            },
            {
              opportunityID: "0065E00000DlPDaQAN",
              createdAt: "2019-07-24 09: 40: 15",
              RecordType: "Business Loan",
              amortizationPeriod: 22.0,
              amount: 412047.0,
              CompanyRegistrationDate: "2015-01-05",
              need: ["finance_debts", "general_liquidity"],
              lastAvailableRevenue: 1887,
              creditSafeScore: 2,
              bankVerified: true,
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
