import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { FieldError } from './FieldError'
import { FieldWrapper } from './FieldWrapper'
import { isRequiredFromRules } from '../../../utils'

const FileDropzone = (props) => {
  const [files, setFiles] = useState([])
  const { formField, errors, onChange } = props

  // let type = formField.dropzone_type
  return (
    <FieldWrapper wrapper={formField.wrapper}>
      {formField.label &&
        <label
          className={isRequiredFromRules(formField.rules) ? 'label-required' : ''}
          htmlFor={formField.name}
        >
          {formField.label}
        </label>}

      <Dropzone
        onDrop={(files) => {
          setFiles(files)
          onChange(files[0])
        }}
        multiple={false}
      >
        {
          (dropzoneProps) => (
            <GeneralDropzone formField={formField} files={files} {...dropzoneProps} />
          )

        }
      </Dropzone>
      <FieldError name={formField.name} errors={errors} />
    </FieldWrapper>
  )
}

export default FileDropzone

function GeneralDropzone ({ files, formField, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) {
  let placeholder =
    <div className='dropzone-placeholder form-group-flex-no-margin'>
      {files.length > 0
        ? <h3>{files[0].name}</h3>
        : <h3>Drop file here</h3>}
    </div>

  if (isDragAccept) {
    placeholder = <div className='dropzone-placeholder'><p className='text-success'>Frop File here</p></div>
  }

  if (isDragReject) {
    placeholder = <div className='dropzone-placeholder'><p className='text-error'>File not allowed</p></div>
  }

  return (
    <div className='dropzone-upload-image'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} name={formField.name} />
        <div className='dropzone-wrapper-justified'>
          {placeholder}
        </div>
      </div>
    </div>
  )
}
