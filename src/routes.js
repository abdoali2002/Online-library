import {Navigate, createBrowserRouter } from "react-router-dom"; 
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Books from "./pages/books/Books";
import MangeBook from "./pages/MangeBook/MangeBook";
import App from "./App";
import AddBook from "./pages/MangeBook/AddBook";
import UpdateBook from "./pages/MangeBook/UpdateBook";
import User from "./User/User";
import BorrowBook from "./pages/BorrowBook/BorrowBook";
export const routes = createBrowserRouter([
    {
        path: "",
        element: <App /> ,
        children:[
          {
            path: "/",
            element: <Login /> ,
          },
          {
            path: "/Login",
            element: <Login /> ,
          },
          {
            path: ":id",
            element: <Books /> ,
          },
          {
            path: "/Books",
            element: <Books  /> ,
          },
          {
            path: "/User",
            element: <User  /> ,
          },
          {
           path: "/Register",
           element: <Register /> ,      
           },
           {
            path: "/MangeBook",
            children: [
              {
                path:"",
                element: <MangeBook/>,
              },
              {
                path:"Add",
                element: <AddBook/>,
              },
              {
                path:":id",
                element:<UpdateBook/>,
              },
              


            ], 
            },
            {
              path: "/BorrowBook",
              element: <BorrowBook /> ,      
            },

        ],
      },
    {
      path :"*",
      element:<Navigate to={"/"} />
    }
    
  ]);
