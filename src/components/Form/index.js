import Number from "./Number";
import Boolean from "./Boolean";
import String from "./String";
import TextArea from "./TextArea";
import Currency from "./Currency";
import Double from "./Double";
import Percent from "./Percent";

export { Number, TextArea, Double, Currency, Boolean, String, Percent };

// renderSelect(input) {
//     return (
//       <Fragment key={input.name}>
//         <label>{input.label}</label>
//         <div>
//           <Field
//             name={input.name}
//             render={(props) => {
//               const { field } = props;
//               const { errors, touched } = props.form;
//               const hasError = errors[input.name] && touched[input.name] ? 'hasError' : '';
//               const defaultOption = <option key='default' value='Please Select'>Please Select</option>;
//               const options = input.data.map(i => <option key={i} value={i}> {i} </option> );
//               const selectOptions = [defaultOption, ...options];
//               return (
//                 <div className='dropdown'>
//                   <select value={field.value} {...field} id={hasError}>
//                     {
//                       selectOptions
//                     }
//                   </select>
//                 </div>
//               );
//             }}
//           />
//         </div>
//       </Fragment>
//     );
//   }
