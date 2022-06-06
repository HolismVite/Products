import CollectionsIcon from '@mui/icons-material/Collections'
import { List, Text, Enum, ItemAction } from '@List'
import UpsertProduct from './Upsert'

const filters = <>
    <Text
        column='Title'
        placeholder='Title'
    />
    <Enum
        column='AttributeId'
        placeholder='Attribute'
        entityType='AttributeTypes'
    />
</>

const card = (item) => {
    return <div>
        <div>{item.title}</div>
    </div>
}

const itemActions = (item) => {
    return <>
        <ItemAction
            title='Manage images'
            icon={CollectionsIcon}
            goTo={`/product/images?productId=${item.id}`}
        />
    </>
}

const Products = () => {
    return <List
        title='Products'
        entityType='Product'
        filters={filters}
        card={card}
        itemActions={itemActions}
        upsert={UpsertProduct}
        hasDelete={true}
        hasEdit={true}
    />
}

export default Products