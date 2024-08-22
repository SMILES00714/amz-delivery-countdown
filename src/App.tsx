// import { Suspense, lazy, useEffect } from "react";
import { lazy, useEffect } from "react";

/** Vendors */
import { Provider as ReduxProvider } from "react-redux";
import { ConfigProvider, Layout } from "antd";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./dist/css/app.css";

/** Redux */
import store from "./redux/configureStore";

/** Custom Components */
import Building from "./components/building/views/Building";
const CountDetails = lazy(() => import("./components/countdown/views/Details"));
const CountList = lazy(() => import("./components/countdown/views/List"));
const CreateEvent = lazy(() => import("./components/event/views/Add"));
const Day = lazy(() => import("./components/week/views/Day"));
const EventDetails = lazy(() => import("./components/event/views/Details"));
const EventList = lazy(() => import("./components/event/views/List"));
const Navbar = lazy(() => import("./components/shared/navbar/Navbar"));
const Week = lazy(() => import("./components/week/views/Week"));

const antdTheme = {
  components: {
    /** @link https://github.com/ant-design/ant-design/blob/master/components/button/style/index.tsx */
    Button: {
      defaultBg: "#303946",
      defaultColor: "#fff",
    },
    /** @link https://github.com/ant-design/ant-design/blob/master/components/layout/style/index.ts */
    Layout: {
      bodyBg:
        "linear-gradient(90deg, rgba(20,25,32,1) 0%, rgba(20,25,32,1) 28%, rgba(29,37,50,1) 62%)",
      headerBg:
        "linear-gradient(90deg, rgba(20,25,32,1) 0%, rgba(20,25,32,1) 28%, rgba(29,37,50,1) 62%)",
      headerHeight: 100,
      headerPadding: "2vh 50px",
      footerBg:
        "linear-gradient(90deg, rgba(20,25,32,1) 0%, rgba(20,25,32,1) 28%, rgba(29,37,50,1) 62%)",
    },
    /** @link https://github.com/ant-design/ant-design/blob/master/components/menu/style/index.tsx */
    Menu: {
      darkItemBg: "transparent",
    },
  },
  token: {
    borderRadius: 15,
    colorBgBase: "#141920",
    colorPrimaryBg: "#303946",
    fontFamily: "PT Sans",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Suspense>
        <Building />
      // </Suspense>
    ),
  },
  {
    path: "/week",
    element: (
      // <Suspense>
        <Week />
      // </Suspense>
    ),
  },
  {
    path: "/week/day",
    element: (
      // <Suspense>
        <Day />
      // </Suspense>
    ),
  },
  {
    path: "/week/day/event/list",
    element: (
      // <Suspense>
        <EventList />
      // </Suspense>
    ),
  },
  {
    path: "/week/day/event/details",
    element: (
      // <Suspense>
        <EventDetails />
      // </Suspense>
    ),
  },
  {
    path: "/week/day/event/details/add",
    element: (
      // <Suspense>
        <CreateEvent />
      // </Suspense>
    ),
  },
  {
    path: "/coutdown/list",
    element: (
      // <Suspense>
        <CountList />
      // </Suspense>
    ),
  },
  {
    path: "/coutdown/details",
    element: (
      // <Suspense>
        <CountDetails />
      // </Suspense>
    ),
  },
]);

function App() {
  useEffect(() => {
    // @TODO Setup Client Environment
    console.log("Loaded");
  }, []);

  return (
    <ConfigProvider theme={antdTheme}>
      <ReduxProvider store={store}>
        <Layout className="layout">
          <Navbar />
          <Layout.Content style={{ padding: "0 50px" }}>
            <RouterProvider router={router} />
          </Layout.Content>
        </Layout>
      </ReduxProvider>
    </ConfigProvider>
  );
}

export default App;
