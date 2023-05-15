import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Error from "./Error";
import Header from "./Header";
import RestaurantMenu from "./RestaurantMenu";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./Cart";
import Search from "./Search";
import Profile from "./Profile";

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
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/search",
        element: <Search/>
      },{
        path:"/profile",
        element: <Profile/>
      }
    ],
  },
]);

export default AppLayout;
