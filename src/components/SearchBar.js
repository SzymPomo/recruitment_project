import {Formik} from 'formik';
import useApiCallback from "../callbacks/useApiCallback";

function SearchBar ({onLocationFound}) {
    const {execute} = useApiCallback('');

    function handleSubmit(values, {resetForm}) {
        execute(values.ipAddress).then((response)=> {
            onLocationFound((state) => {
                return [
                    ...state,
                    response
                ]
            });
        });
    }

    return (
        <div className="input-group">
            <Formik
                initialValues={{ipAddress: ''}}
                onSubmit={handleSubmit}
            >
                {({handleSubmit, handleChange})=> (
                 <form
                    className={`w-100 d-flex`}
                    onSubmit={handleSubmit}
                 >
                     <input
                         type="text"
                         className="form-control me-4"
                         placeholder="IP address"
                         name={`ipAddress`}
                         onChange={handleChange}
                     />
                     <button
                         className={`btn btn-primary`}
                         type={`submit`}
                     >
                         Search
                     </button>
                 </form>
                )}
            </Formik>
        </div>
    )
}

export default SearchBar;