import { RouteConfig } from "react-router-config";
import { DefaultLayout } from "./Layout";
import Index from "./pages/Index";

let routes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
    render: DefaultLayout,
  },
];

export default routes;
