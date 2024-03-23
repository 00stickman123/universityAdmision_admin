import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import store from './redux/store.js'
import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
          theme="dark"
          draggable={true}
        />
        {/* <ToastContainer /> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
