import Number from "./Number";
import Boolean from "./Boolean";
import String from "./String";
export { Number, Boolean, String };


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