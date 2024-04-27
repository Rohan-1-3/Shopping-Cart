import About from "./About/About";
import App from "./App";
import ErrorPage from "./ErrorPage";
import HomePage from "./Home/HomePage";
import InitialPage from "./InitialPage/InitialPage";
import Products from "./Products/Products";

const routes = [
    {
        path : "/",
        element : <App />,
        errorElement : <ErrorPage  />,
        children : [
            {
                path : "/:",
                element : <InitialPage />,
            },
            {
                path : "/home",
                element : <HomePage />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/products",
                element : <Products />
            }
        ]
    },
];

export default routes;
