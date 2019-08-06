import React from "react";
import "./styles.scss";
import { String } from "components/FormComponents";
const fields = [
  {
    name: "test",
    title: "Test",
    description: "Test Description",
    type: "string",
    isFocus: true
  },
  {
    name: "test1",
    title: "Test1",
    description: "Test1 Description",
    type: "string"
  }
];
const Form = props => {
  return (
    <div className="issueOfferForm animated fadeIn">
      <div className="issueOfferForm__header">
        <div className="issueOfferForm__icon">
          <i className="icon-file-text" />
        </div>
        <span>Issue Offer Form</span>
      </div>
      <div className="issueOfferForm__body">
        <div className="formRow">
          <div className="formRow__column">
            <String field={fields[0]} />
          </div>
          <div className="formRow__column">
            <String field={fields[1]} />
          </div>
        </div>
        <div className="formRow">
          <div className="formRow__column">
            <String field={fields[0]} />
          </div>
          <div className="formRow__column">
            <String field={fields[1]} />
          </div>
        </div>
        <div className="formRow">
          <div className="formRow__column">
            <String field={fields[0]} />
          </div>
          <div className="formRow__column">
            <String field={fields[1]} />
          </div>
        </div>
        <div className="formRow">
          <div className="formRow__column">
            <String field={fields[0]} />
          </div>
          <div className="formRow__column">
            <String field={fields[1]} />
          </div>
        </div>
      </div>
      <div className="issueOfferForm__footer">
        <button className="btn --primary">Submit Offer</button>
      </div>
    </div>
  );
};
export default Form;
// {
// 	"partnerID" : "123456789",
//     "productName": "Test",
//     "amount": 1, number input
//     "interestRate": 2, number input
//     "repaymentPeriod": 3,
//     "monthlyRepaymentAmount": 4,
//     "totalRepaymentAmount": 5,
//     "startFee": 6,
//     "cost": 7,
//     "personalGuaranteeNeeded": true, checkbox
//     "otherGuaranteeNeeded": true,
//     "personalGuaranteeDetails": "8",
//     "otherGuaranteeDetails": "9",
//     "otherGuaranteesType": "company car",
//     "moreDetails": "10",
//     "offerDescription": "11",
//     "extraOfferDescription": "12",
//     "productMasterID": "a0G5E000004w15VUAQ",
//     "oppID": "0065E00000DlPDaQAN"
// }
