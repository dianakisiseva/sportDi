import React from 'react'
import { FormBuilder } from '../'
import { usePage } from '@inertiajs/inertia-react'
// import { useToasts } from 'react-toast-notifications'

const ExampleTable = () => {
  // const { addToast } = useToasts()

  const formData = React.useMemo(
    () => ({
      form: {
        url: '/disease',
        method: 'post',
        class: 'form-class'
      },
      fields: [
        {
          element: 'input',
          type: 'text',
          name: 'name',
          label: 'Name',
          // value: '',
          placeholder: 'Name'
          // rules: 'required|min:2'
          // wrapper: {
          //   element: 'div',
          //   class: 'input-element input-text',
          // }
        },
        {
          element: 'checkbox',
          name: 'remember',
          label: 'Remember me',
          value: false
          // rules: 'accepted'
          // wrapper: {
          //   element: 'div',
          //   class: 'tick-input checkbox'
          // }
        },
        {
          element: 'radio',
          name: 'radio',
          value: '',
          // rules: "required",
          options: [
            { label: 'Yes', value: '1' },
            { label: 'No', value: '0' }
          ]
          // wrapper: {
          //   element: "div",
          //   class: "tick-input"
          // }
        },
        {
          element: 'textarea',
          name: 'textarea',
          label: 'Textarea',
          // rules: "required",
          rows: 4,
          value: '23'
          // wrapper: {
          //   element: "div",
          //   class: "form-textarea"
          // }
        },
        {
          element: 'select',
          name: 'select',
          label: 'Select',
          // rules: "required",
          placeholder: 'select',
          isSearchable: false,
          // value: {label: "Yes", value : "1"},
          // isMulti: true,
          options: [
            { label: 'Yes', value: '1' },
            { label: 'No', value: '0' }
          ]
          // wrapper: {
          //   element: "div",
          //   class: "form-select"
          // }
        },
        {
          element: 'text',
          name: 'text',
          disableParse: true,
          text: '<div>asd</div>'
        }
      ],
      submit: {
        text: 'Submit',
        class: 'btn btn-primary',
        wrapper: {
          element: 'div',
          class: 'form-group'
        }
      }
    }),
    []
  )

  // const successCallback = (res) => {
  //   addToast(res.data.message, { appearance: 'success' })
  // }
  //
  // const errorCallback = (error) => {
  //   addToast('error', { appearance: 'error' })
  // }

  return (
    <FormBuilder
      formData={formData}
      useInertia
      globalErrors={usePage().props.globalErrors} // this is needed if userInertia = true
      // validateOnChange={false}
      // validateOnBlur={false}
      // successCallback={successCallback} // custom handle for success if useInertia = false
      // errorCallback={errorCallback} // custom handle for error if useInertia = false
    />
  )
}

export default ExampleTable
