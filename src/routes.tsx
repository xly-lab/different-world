import FullPage from "pages/FullPage";
import Main from "pages/Main";
import { RouteConfig } from "react-router-config";
import Layout from "./Layout";
import Index from "./pages/Index";
import Story from "./pages/Story";

let routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    exact: true,
    render: Layout.OfficialLayout,
  },
  {
    path: "/out-index",
    component: Index,
    render: Layout.DefaultLayout,
  },
  {
    path: "/story",
    component: Story,
    render: Layout.DefaultLayout,
  },
  {
    path: "/full-page",
    component: FullPage,
    render: Layout.DefaultLayout,
  },
];

export default routes;
