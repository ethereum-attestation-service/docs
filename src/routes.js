import React from "react";

// Root Include
import Root from "./pages/Integration/index";

//Main Index
// import Main from "./pages/Integration/index";

// import PageError from "./pages/Pages/Special/PageError";


const routes = [
  { path: "/", component: Root, isWithoutLayout: false, exact: true },
  // { component: PageError, isWithoutLayout: true, exact: false },
];

export default routes;
