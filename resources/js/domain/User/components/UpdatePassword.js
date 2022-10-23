import React, { useMemo } from 'react'
// import { FORM_ELEMENT_TYPES, FormBuilder } from '../../../../components'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import FormBuilder from "../../../components/Form/FormBuilder";

const UpdatePassword = ({
  cancelCallback,
  successCallback
}) => {
  const { t } = useTranslation()
  const { links } = usePage().props

  const formData = useMemo(
    () => ({
      validationMessages: {
        'regex.password': 'Password should be at least 8 letters',
        'confirmed.password': 'Password and password confirmation should be the same'
      },
      form: {
        url: links.updatePassword,
        method: 'put',
        class: 'form-class'
      },
      fields: [
        {
          element: 'input',
          type: 'password',
          name: 'current_password',
          label: 'Current password',
          placeholder: 'Current password',
          rules: 'required'
        },
        {
          element: 'input',
          type: 'password',
          name: 'password',
          label: 'New password',
          placeholder: 'New password',
          rules: 'required|confirmed'
        },
        {
          element: 'input',
          type: 'password',
          name: 'password_confirmation',
          label: 'Password confirmation',
          placeholder: 'Password confirmation',
          rules: 'required'
        }
      ],
        submit: {
            text: 'Confirm',
            class: "btn-primary",
            wrapper: {
                element: "div",
                class: "form-footer"
            },
            clickFn: () =>  successCallback()
        },
        cancel: {
            text: 'Cancel',
            class: "btn-tertiary",
            clickFn: () =>  cancelCallback()
        }
    }),
    []
  )

  return (
    <FormBuilder
      formData={formData}
      successCallback={successCallback}
    />
  )
}

export default UpdatePassword
