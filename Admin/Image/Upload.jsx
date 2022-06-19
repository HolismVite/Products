import { DialogForm, Upload } from '@Form'

const inputs = <>
    <Upload
        column='ImageUrl'
        placeholder='Select image'
        required='Please select an image'
    />
</>

const UploadImage = () => {
    return <DialogForm
        title='Upload image'
        entityType='ProductImage'
        inputs={inputs}
        large={true}
    />
}

export default UploadImage