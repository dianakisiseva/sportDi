import React from 'react'
import axios from 'axios'
import {usePage} from "@inertiajs/inertia-react";
import {route} from "../../utils";

const DeleteEvent = ({cancelCallback, successCallback, id}) => {
    const { links } = usePage().props


    const submit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.delete(route(links.delete, { event: id }))
            if (res.status === 200) {
                successCallback()
            }
        } catch (errors) {
        }
    }

    return (
        <div className='select-input input-element'>
            <div>
                <p>Are you sure you want to delete this event?</p>
                <div className='form-footer'>
                    <button className='btn-tertiary' onClick={cancelCallback}>Cancel</button>
                    <button type='button' onClick={(e) => submit(e)} className='btn-primary'>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteEvent
