import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Products from './Product/List'
import Brands from './Brand/List';

const ProductsRoutes = [
    {
        path: '/products',
        component: Products
    },
    {
        path: '/brands',
        component: Brands
    }
]

const ProductsMenu = [
    {
        title: 'Products',
        icon: ShoppingCartIcon,
        children: [
            {
                title: 'Brands',
                url: '/brands'
            },
            {
                title: 'Products',
                url: '/products'
            }
        ]
    }
]

export { ProductsRoutes }
export { ProductsMenu }