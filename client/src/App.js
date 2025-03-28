import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./common/Header";
import Main from "./common/Main";
import B from "./common/B";

const router = createBrowserRouter([
  { path: "/", element: <Main />, errorElement: <div>404</div> },
  { path: "/b", element: <B /> },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
