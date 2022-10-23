import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'

const CreateUserModal = ({ cancelCallback, successCallback }) => {
  const { links } = usePage().props
  const [errors, setErrors] = useState()
  const { addToast } = useToasts()

  const { t } = useTranslation()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(links.store, data)
      if (res.status === 200) {
        addToast(t('users.message.successfully_created'), { appearance: 'success' })
        successCallback()
      }
    } catch (errors) {
      setErrors(errors.response.data.errors)
    }
  }

  const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  return (
    <div className='select-input input-element'>
      <div>
        <div>
          <label htmlFor='name'>{t('ui.name')}</label>
          <input
            type='text' id='name' name='name' value={data.name}
            onChange={e => handleChange('name', e.target.value)}
          />
          {errors?.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>
        <div>
          <label htmlFor='email'>{t('ui.email')}</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={e => handleChange('email', e.target.value)}
          />
          {errors?.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div>
          <label htmlFor='password'>{t('ui.password')}</label>
          <input type='password' id='password' name='password' value={data?.password} onChange={e => handleChange('password', e.target.value)} />
          {errors?.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>
        <div>
          <label htmlFor='password_confirmation'>{t('ui.confirm_password')}</label>
          <input type='password' id='password_confirmation' name='password_confirmation' value={data?.password_confirmation} onChange={e => handleChange('password_confirmation', e.target.value)} />
        </div>

        <div className='form-footer'>
          <button className='btn btn-primary-ghost' onClick={cancelCallback}>{t('ui.cancel')}</button>
          <button type='button' onClick={(e) => submit(e)} className='btn btn-primary'>{t('ui.confirm')}</button>
        </div>
      </div>
    </div>
  )
}

export default CreateUserModal
