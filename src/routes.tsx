import { lazy } from "react";
import { Redirect } from "react-router";
import { RouteConfig } from "react-router-config";
import Layout from "./Layout";

let routes: RouteConfig[] = [
  {
    path: "/",
    component: () => <Redirect to="/html" />,
    exact: true,
  },
  {
    path: "/html",
    exact: true,
    component: lazy(() => import("pages/Main")),
    render: Layout.OfficialLayout,
  },
  {
    path: "/html/detail/:name",
    component: lazy(() => import("pages/Main/HtmlDetail")),
    render: Layout.OfficialLayout,
  },
];

export default routes;
