import ManagementPage from "./pages/ManagmentPage";
import OrderPage from "./pages/OrderPage";

import UsersPage from "./pages/UsersPage";


const routes = [{
    exact: true,
    path: '/users',
    component: UsersPage
}, {
    path: '/management',
    component: ManagementPage
}, {
    path: '/orders',
    component: OrderPage
}
];

export default routes;