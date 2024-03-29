import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homework from "./components/homework/Homework";
import './i18n'
import {store} from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
    {
        path: "/template",
        element: <App />,
    },
    {
        path: "/homework",
        element: <Homework />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
