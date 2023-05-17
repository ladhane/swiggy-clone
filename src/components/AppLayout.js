import { Outlet, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Body from "./Body";
import Error from "./Error";
import Header from "./Header";
import RestaurantMenu from "./RestaurantMenu";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./Cart";
import MenuShimmer from "./Shimmer/MenuShimmer";
const Profile = lazy(() => import("./Profile"));
const Help = lazy(() => import("./Help"));
const Search = lazy(() => import("./Search"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<MenuShimmer numberOfCards={6} />}>
            {" "}
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<MenuShimmer numberOfCards={6} />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<MenuShimmer numberOfCards={6} />}>
            <Help />
          </Suspense>
        ),
      },
    ],
  },
]);

export default AppLayout;
