import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from "./pages/login/Login";
import MainPage from "./pages/mainpage/MainPage"
import FormClientes from './pages/formCliente/FormClientes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path:'MainPage',
    element: <MainPage />
  },
  {
    path: "/cadastrar",
    element: <FormClientes />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
