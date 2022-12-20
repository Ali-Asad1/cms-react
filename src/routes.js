import Comments from './Pages/Comments/Comments'
import Offs from './Pages/Offs/Offs'
import Orders from './Pages/Orders/Orders'
import Products from './Pages/Products/Products'
import Users from './Pages/Users/Users'


const routes = [
    { path: '/products', element: < Products /> },
    { path: '/comments', element: < Comments /> },
    { path: '/users', element: < Users /> },
    { path: '/orders', element: < Orders /> },
    { path: '/offs', element: < Offs /> },
]

export { routes }