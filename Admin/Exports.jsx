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
                title: 'Products',
                url: '/products'
            },
            {
                title: 'Brands',
                url: '/brands'
            },
            {
                title: 'Categories',
                url: '/hierarchies?entityType=product'
            }
        ]
    }
]

export { ProductsRoutes }
export { ProductsMenu }