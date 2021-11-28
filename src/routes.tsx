import FullPage from "pages/FullPage";
import { RouteConfig } from "react-router-config";
import { DefaultLayout } from "./Layout";
import Index from "./pages/Index";
import Story from "./pages/Story";

let routes: RouteConfig[] = [
  {
    path: "/",
    component: FullPage,
    exact: true,
    render: DefaultLayout,
  },
  {
    path: "/story",
    component: Story,
    render: DefaultLayout,
  },
  {
    path: "/full-page",
    component: Index,
    render: DefaultLayout,
  },
];

export default routes;
