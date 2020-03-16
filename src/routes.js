import ManagementPage from "./pages/ManagmentPage";
import OrderPage from "./pages/OrderPage";

import UsersPage from "./pages/UsersPage";
import ManagersPage from "./pages/ManagersPage";


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
},{
    path: '/managers',
    component: ManagersPage
}
];

export default routes;