import { Form, Upload } from '@Form'

const inputs = <>
    <Upload
        column='ImageUrl'
        placeholder='Select image'
        required='Please select an image'
    />
</>

const UploadImage = () => {
    return <Form
        title='Upload image'
        entityType='ProductImage'
        inputs={inputs}
        large={true}
    />
}

export default UploadImage