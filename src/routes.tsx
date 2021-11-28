import { RouteConfig } from "react-router-config";
import { DefaultLayout } from "./Layout";
import Index from "./pages/Index";
import Story from "./pages/Story";

let routes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
    exact: true,
    render: DefaultLayout,
  },
  {
    path: "/story",
    component: Story,
    render: DefaultLayout,
  },
];

export default routes;
