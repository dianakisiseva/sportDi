import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Formik } from 'formik'
import { api, Validate } from '../../utils'
import { Inertia } from '@inertiajs/inertia'
import { Input } from './FormElements/Input'
import { FieldWrapper } from './FormElements/FieldWrapper'
import { Checkbox } from './FormElements/Checkbox'
import { Radio } from './FormElements/Radio'
import { Textarea } from './FormElements/Textarea'
import { Select } from './FormElements/Select'
import { AsyncSelect } from './FormElements/AsyncSelect'
import { Text } from './FormElements/Text'
import { Datepicker } from './FormElements/Datepicker'
import { usePage } from '@inertiajs/inertia-react'
import FileDropzone from './FormElements/FileDropzone'
import FormData from 'form-data'

const FormBuilder = forwardRef((props, ref) => {
  const {
    formData,
    useInertia,
    validateOnChange,
    validateOnBlur,
    successCallback,
    errorCallback,
    model,
    showOnly = false,
    file = false
  } = props
  let multipart = ''
  if (file) {
    multipart = { encType: 'multipart/form-data' }
  }
  const { globalErrors } = usePage().props

  const submitter = useInertia ? Inertia : api

  const formRef = useRef(null)

  const initialValuesLocal = { submitBtn: '' }
  formData.fields.forEach((formField) => {
    initialValuesLocal[formField.name] = formField.value
  })

  const [initialValues, setInitialValues] = useState(initialValuesLocal)

  useEffect(() => {
    if (!!globalErrors && !!Object.keys(globalErrors).length) {
      formRef.current.setErrors(globalErrors)
      formRef.current.setSubmitting(false)
    }
  }, [globalErrors])

  useEffect(() => {
    formRef.current.setSubmitting(false)

    const initialValuesLocal = { submitBtn: '' }
    formData.fields.forEach((formField) => {
      initialValuesLocal[formField.name] = formField.value
    })

    setInitialValues(initialValuesLocal)
  }, [model, formData])

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      enableReinitialize
      validate={values => {
        let errors = {}
        let validate = {}
        let rules = {}
        const messages = formData.validationMessages ?? []
        const attributeNames = {}

        formData.fields.forEach((formField) => {
          validate = {
            ...validate,
            [formField.name]: typeof values[formField.name] === 'boolean'
              ? (+values[formField.name]).toString()
              : values[formField.name]
          }

          if (typeof (formField.rules) !== 'undefined' || formField.rules != null) {
            rules = { ...rules, [formField.name]: formField.rules }
          }

          attributeNames[formField.name] =
            formField.attributeName
              ? formField.attributeName
              : (formField.label
                ? formField.label
                : formField.name
              )
        })

        const validation = new Validate(validate, rules, messages)
        validation.setAttributeNames(attributeNames)

        if (validation.fails()) {
          errors = validation.errors.errors
        }

        return errors
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        let data = { ...values }

        formData.fields.forEach((formField) => {
          // don't include text elements
          if (formField.element === 'text') {
            return
          }

          // don't include not visible elements
          if (!!formField.visible && !formField.visible(values)) {
            return
          }

          if (typeof values[formField.name] !== 'undefined') {
            if (file) {
              const dataToSend = new FormData()
              dataToSend.append(formField.name, values[formField.name], values[formField])
              data = dataToSend
            } else {
              data[formField.name] = values[formField.name]
            }
          }
        })

        let method = formData.form.method

        if (formData.form.method === 'put') {
          data._method = 'put'
          method = 'post'
        }

        if (formData.form.method === 'delete') {
          data._method = 'delete'
          method = 'post'
        }

        const request = submitter[method](
          formData.form.url, data
        )
        if (!useInertia) {
          request
            .then((res) => {
              setSubmitting(false)

              if (typeof res.data.success !== 'undefined' && !res.data.success) {
                if (errorCallback) {
                  /**
                   * error will be manually handled
                   */
                  errorCallback(res.data)
                  return
                }
              }

              !!successCallback && successCallback(res)
            })
            .catch((error) => {
              setSubmitting(false)

              if (error.response.status === 422) {
                setErrors(error.response.data.errors)
              } else {
                if (errorCallback) {
                  /**
                   * error will be manually handled
                   */
                  errorCallback(error)
                } else {
                  /**
                   * default error handle
                   */
                  if (Object.keys(error.response.data).length === 1) {
                    /**
                     * TODO: set other way to check for prod?
                     */
                    window.location.replace(`/error/${error.response.status}`)
                  } else {
                    /**
                     * TODO: set better ui
                     */
                    alert(JSON.stringify(error.response.data)) // eslint-disable-line
                  }
                }
              }
            })
        }
      }}
      validateOnChange={typeof validateOnChange !== 'undefined' ? validateOnChange : false}
      validateOnBlur={typeof validateOnBlur !== 'undefined' ? validateOnBlur : false}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
        /* and other goodies */
      }) => (
        <form ref={ref} onSubmit={handleSubmit} className={formData.form.class ?? 'form-class'} {...multipart}>
          <FieldWrapper wrapper={formData.form.wrapper}>
            {formData.fields.map((formField) => {
              if (formField.visible && !formField.visible(values)) {
                return null
              }

              switch (formField.element) {
                case 'input':
                  return (
                    <Input
                      key={formField.name}
                      formField={formField}
                      value={values[formField.name]}
                      onChange={(e) => {
                        const value = e.target.value
                        setFieldValue(formField.name, value)

                        !!formField.callback && formField.callback(value, values, setFieldValue)
                      }}
                      errors={errors[formField.name]}
                      showOnly={showOnly}
                    />
                  )
                case 'checkbox':
                  return (
                    <Checkbox
                      key={formField.name}
                      formField={formField}
                      value={values[formField.name]}
                      onChange={(e) => {
                        const value = e.target.checked
                        setFieldValue(formField.name, value)

                        !!formField.callback && formField.callback(value, values, setFieldValue)
                      }}
                      errors={errors[formField.name]}
                      showOnly={showOnly}
                    />
                  )
                case 'radio':
                  return (
                    <Radio
                      key={formField.name}
                      formField={formField}
                      value={values[formField.name]}
                      onChange={(e) => {
                        const value = e.target.value
                        setFieldValue(formField.name, value)

                        !!formField.callback && formField.callback(value, values, setFieldValue)
                      }}
                      errors={errors[formField.name]}
                      showOnly={showOnly}
                    />
                  )
                case 'textarea':
                  return (
                    <Textarea
                      key={formField.name}
                      formField={formField}
                      value={values[formField.name]}
                      onChange={(e) => {
                        const value = e.target.value
                        setFieldValue(formField.name, value)

                        !!formField.callback && formField.callback(value, values, setFieldValue)
                      }}
                      errors={errors[formField.name]}
                      showOnly={showOnly}
                    />
                  )
                case 'select':
                  return (
                    <Select
                      key={formField.name}
                      formField={formField}
                      value={values[formField.name]}
                      onChange={(e) => {
                        setFieldValue(formField.name, e)

                        !!formField.callback && formField.callback(e, values, setFieldValue)
                      }}
                      errors={errors[formField.name]}
                      showOnly={showOnly}
                    />
                  )
                case 'async-select':
                  return (
                    <AsyncSelect
                      key={formField.name}
                      formField={formField}
                      value={values[formField.name]}
                      onChange={(e) => {
                        setFieldValue(formField.name, e)

                        !!formField.callback && formField.callback(e, values, setFieldValue)
                      }}
                      errors={errors[formField.name]}
                      showOnly={showOnly}
                    />
                  )
                case 'text':
                  return (
                    <Text
                      key={formField.name}
                      formField={formField}
                      showOnly={showOnly}
                    />
                  )
                case 'datepicker':
                  return (
                    <Datepicker
                      key={formField.name}
                      formField={formField}
                      value={values[formField.name]}
                      onChange={(e) => {
                        setFieldValue(formField.name, e)

                        !!formField.callback && formField.callback(e, values, setFieldValue)
                      }}
                      minDate={formField.minDateElement ? values[formField.minDateElement] : null}
                      errors={errors[formField.name]}
                      showOnly={showOnly}
                    />
                  )
                case 'file-dropzone':
                  return (
                    <FileDropzone
                      key={formField.name}
                      formField={formField}
                      value={values[formField.name]}
                      errors={errors[formField.name]}
                      onChange={(e) => {
                        setFieldValue(formField.name, e)
                        !!formField.callback && formField.callback(e, values, setFieldValue)
                      }}
                      showOnly={showOnly}
                    />
                  )
              }
            })}
          </FieldWrapper>

          {!showOnly &&
            <FieldWrapper wrapper={formData.submit.wrapper}>
              {!!formData.cancel &&
                <button
                  className={formData.cancel.class}
                  type='button'
                  onClick={() => formData.cancel.clickFn()}
                >
                  {formData.cancel.text}
                </button>}

              <button
                className={formData.submit.class}
                type='submit' disabled={isSubmitting || formData.submit.disabled}
                onClick={(e) => {
                  setFieldValue('submitBtn', '')
                  if (formData.submit.confirm && formData.submit.confirm(values)) {
                    e.preventDefault()
                  }
                }}
              >
                {formData.submit.text}
              </button>

              {!!formData.submit_continue &&
                <button
                  className={formData.submit_continue.class}
                  type='submit' disabled={isSubmitting || formData.submit.disabled}
                  onClick={(e) => {
                    setFieldValue('submitBtn', 'continue')
                    if (formData.submit.confirm && formData.submit.confirm(values)) {
                      e.preventDefault()
                    }
                  }}
                >
                  {formData.submit_continue.text}
                </button>}
            </FieldWrapper>}
        </form>
      )}
    </Formik>
  )
})

export default FormBuilder
