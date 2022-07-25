import {
    Image,
    List,
    SvgProperty,
    Text,
} from '@List'
import UpsertBrand from './Upsert'

const filters = <>
    <Text
        column='Name'
    />
</>

const sorts = [
    {
        caption: "Name A-Z",
        column: 'Name',
        direction: 'asc'
    },
    {
        caption: 'Name Z-A',
        column: 'Name',
        direction: 'desc'
    }
]

const headers = <>
    <th></th>
    <th>Name</th>
    <th>SVG</th>
</>

const row = (entity) => <>
    <td>
        <Image
            url={entity.relatedItems.logoUrl}
            uploadUrl={`/brand/setImage?id=${entity.id}&property=LogoGuid`}
            deletionUrl={`/brand/deleteImage?id=${entity.id}&property=LogoGuid`}
        />
    </td>
    <td>{entity.name}</td>
    <td>
        <SvgProperty
            value={entity.logoSvg}
            actionUrl={`/brand/setSvg?id=${entity.id}`}
        />
    </td>
</>

const Brands = () => {
    return <List
        title='Brands'
        entityType='Brand'
        create={UpsertBrand}
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        hasEdit={true}
        hasDelete={true}
    />
}

export default Brands