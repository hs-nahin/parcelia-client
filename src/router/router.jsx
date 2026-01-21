import {
    createBrowserRouter
} from "react-router";
import App from "../App";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
]);