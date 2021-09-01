import MainPage from "./components/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className={`app-container`}>
        <ToastContainer
            position={`top-right`}
            autoClose={4000}
        />
        <MainPage/>
    </div>
  );
}

export default App;
