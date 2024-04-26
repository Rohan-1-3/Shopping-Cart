import About from "./About/About";
import App from "./App";
import ErrorPage from "./ErrorPage";
import HomePage from "./Home/HomePage";
import InitialPage from "./InitialPage/InitialPage";

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
        ]
    },
];

export default routes;
