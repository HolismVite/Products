import { List, EntityAction } from '@List'
import UploadImage from './Upload'

const card = (item) => <>
    <img src={item.relatedItems.url} />
</>

const Images = () => {
    return <List
        title="Product images"
        entityType="ProductImage"
        card={card}
        hasDelete={true}
        create={UploadImage}
    />
}

export default Images