import { ToastContainer } from "react-toastify";
import Routes from "./routes/index";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Routes />
      <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
    </>
  );
}

export default App;