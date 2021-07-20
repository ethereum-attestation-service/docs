import React from "react";

// Root Include
const Root = React.lazy(() => import("./pages/Integration/index"));

//Main Index
const Main = React.lazy(() => import("./pages/Integration/index"));

const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));


const routes = [



  { path: "/", component: Root, isWithoutLayout: false, exact: true },
  { component: PageError, isWithoutLayout: true, exact: false },
];

export default routes;
