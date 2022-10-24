import React, {useMemo, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import Layout from "../../components/Shared/Layout";
import ReactModal from "../../components/Modal/ReactModal";
import FormBuilder from "../../components/Form/FormBuilder";
import DeleteAccount from "./components/DeleteAccount";
import UpdatePassword from "./components/UpdatePassword";
import {useToasts} from "react-toast-notifications";
import {IconDelete} from "../../components";
import {IconPen} from "../../components/Icons/Icons";

export default function View(props) {
    const {t} = useTranslation();
    const {user, links, auth} = props;
    const {addToast} = useToasts()
    const modalRef = useRef()

    const formData = useMemo(
        () => ({
            form: {
                url: links.update,
                method: 'put',
                class: 'form-class row'
            },
            fields: [
                {
                    element: 'input',
                    type: 'text',
                    name: 'first_name',
                    label: 'First name',
                    placeholder: 'First name',
                    value: user.first_name ? user.first_name : null,
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'last_name',
                    value: user.last_name ? user.last_name : null,
                    label: 'Last name',
                    placeholder: 'Last name',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'login',
                    value: user.login ? user.login : null,
                    label: 'Login',
                    placeholder: 'Login',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                },
                {
                    element: 'input',
                    type: 'text',
                    name: 'email',
                    value: user.email ? user.email : null,
                    label: 'Email',
                    placeholder: 'Email',
                    rules: 'required',
                    wrapper: {
                        element: 'div',
                        class: 'col-6'
                    }
                }
            ],
            submit: {
                text: 'Save',
                class: "btn-primary",
                wrapper: {
                    element: "div",
                    class: "form-footer"
                }
            },
            cancel: {
                text: 'Cancel',
                class: "btn-tertiary",
                clickFn: () => history.back()
            }
        }),
        []
    )

    const handleChangePassword = () => {
        const title = 'Change my password'
        const body =
            <UpdatePassword
                cancelCallback={handleChangePasswordCancelCallback}
                successCallback={handleChangePasswordSuccessCallback}
            />

        modalRef.current.setContent(title, body)
    }

    const handleChangePasswordCancelCallback = () => {
        modalRef.current.close()
    }

    const handleChangePasswordSuccessCallback = (res) => {
        addToast(res.data.message, {appearance: 'success'})
        modalRef.current.close()
    }

    const handleDeleteAccount = () => {
        const title = 'Delete my account'

        const body =
            <DeleteAccount
                cancelCallback={handleDeleteAccountCancelCallback}
                successCallback={handleDeleteAccountSuccessCallback}
            />

        modalRef.current.setContent(title, body)
    }

    const handleDeleteAccountCancelCallback = () => {
        modalRef.current.close()
    }

    const handleDeleteAccountSuccessCallback = (res) => {
        modalRef.current.close()
        window.location.href = '/logout'
    }

    return <Layout {...props}>
        <div className="container-data profile">
            <div className="container-data-header">
                <h5>My profile</h5>
                <div className="container-data-header-buttons">
                    {auth.user.id === user.id &&
                        <>
                            <button
                                className="btn-stripped-sm"
                                onClick={() => handleChangePassword()}>
                                <IconPen/>Change my password
                            </button>
                            <button
                                className="btn-stripped-sm"
                                onClick={() => handleDeleteAccount()}>
                                <IconDelete/> Delete my account
                            </button>
                        </>
                    }
                </div>

            </div>

            <div className="container-data">
                <FormBuilder   {...props} useInertia={true} formData={formData}/>
            </div>

            <ReactModal ref={modalRef} className='ReactModal__Content--Small'/>

        </div>
    </Layout>
}
