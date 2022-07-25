import {
    DialogForm,
    Text,
} from '@Form'

const inputs = <>
    <Text
        column='Name'
    />
</>

const UpsertBrand = <DialogForm
    entityType='Brand'
    inputs={inputs}
/>

export default UpsertBrand