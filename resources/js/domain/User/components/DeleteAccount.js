import React, { useMemo } from 'react'
// import { FORM_ELEMENT_TYPES, FormBuilder } from '../../../../components'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import parse from 'html-react-parser'
import FormBuilder from "../../../components/Form/FormBuilder";
import {useToasts} from "react-toast-notifications";
import {route} from "../../../utils";
import axios from 'axios'

const DeleteAccount = ({cancelCallback, successCallback, deleteUser, id}) => {
    const { links, auth } = usePage().props
    const { addToast } = useToasts()


    const userId =  deleteUser ? id : auth.user.id
    console.log(userId)
    const submit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.delete(route(links.delete, { user: userId }))
            if (res.status === 200) {
                successCallback()
            }
        } catch (errors) {
        }
    }

    return (
        <div className='select-input input-element'>
            <div>
                {deleteUser ? <>
                    <p>Are you sure you want to delete this user?</p></>
                 : <p>Are you sure you want to delete your account?</p>}
                <div className='form-footer'>

                    <button className='btn-tertiary' onClick={cancelCallback}>Cancel</button>
                    <button type='button' onClick={(e) => submit(e)} className='btn-primary'>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount
