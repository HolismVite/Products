import { Form, Text } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Please write product title'
    />
</>

const UpsertProduct = () => {
    return <Form
        entityType='Product'
        inputs={inputs}
    />
}

export default UpsertProduct