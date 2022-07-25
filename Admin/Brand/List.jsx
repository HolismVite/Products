import {
    List,
    Text,
    Image,
    SvgProperty,
} from '@List'

const filters = <>
    <Text
        column='Name'
    />
</>

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
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default Brands