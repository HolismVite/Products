import Products from './Product/List'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductsRoutes = [
    {
        path: '/products',
        component: Products
    }
]

const ProductsMenu = [
    {
        title: 'Products',
        icon: ShoppingCartIcon,
        url: '/products'
    }
]

export { ProductsRoutes }
export { ProductsMenu }