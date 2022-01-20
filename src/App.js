import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinnerr from "./components/Spinner/Spinner";
import { useSelector } from "react-redux";
import UsersPage from "./components/UsersPage";

function App() {
  const { errorMessage, successMessage, loading } = useSelector(
    (state) => state
  );
  if (errorMessage) {
    toast.error(errorMessage);
  }
  if (successMessage) {
    toast(successMessage);
  }

  return (
    <div className="back">
      <UsersPage />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loading && <Spinnerr />}
    </div>
  );
}

export default App;
