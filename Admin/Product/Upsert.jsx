import { DialogForm, Text } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Please write product title'
    />
</>

const UpsertProduct = () => {
    return <DialogForm
        entityType='Product'
        inputs={inputs}
    />
}

export default UpsertProduct