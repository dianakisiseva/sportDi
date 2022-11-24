import React, {Component, useRef} from 'react';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';

import FormBuilder from "../../../components/Form/FormBuilder";
import PublicLayout from "../../../components/Shared/PublicLayout";
import {FieldError} from "../../../components/Form/FormElements/FieldError";
import DeleteAccount from "../components/DeleteAccount";
import ReactModal from "../../../components/Modal/ReactModal";

export default function Login(props){
    const modalRef = useRef()

    const { errors, links } = usePage().props;

    const formFields = {
        form: {
            url: "/login",
            method: "post",
            class: "form-group"
        },
        fields: [
            {
                element: "input",
                type: "text",
                name: "login",
                placeholder: 'Login',
                rules: "required",
                wrapper: {
                    element: "div",
                    class: "input-element"
                },
            },
            {
                element: "input",
                type: "password",
                name: "password",
                placeholder: 'Password',
                rules: "required",
                wrapper: {
                    element: "div",
                    class: "input-element"
                }
            },
            {
                element: "checkbox",
                name: "remember",
                label: 'Remember me',
                value: "1",
                wrapper: {
                    element: "div",
                    class: "input-checkbox"
                }
            }
        ],
        submit: {
            text: 'Login',
            class: "btn-primary",
            wrapper: {
                element: "div",
                class: "form-footer"
            }
        }
    };

    const register = () => {
        const title = 'Register as organization or user?'
        const body =
            <>
                <div className='select-input input-element'>
                    <div>
                        <div className='form-footer'>
                            <div className="container-data-header-buttons">

                            <InertiaLink className='btn-tertiary' href={links.registerOrganization}>
                                Register as organization
                            </InertiaLink>
                            <InertiaLink type='button' className='btn-primary' href={links.registerUser}>
                                Register as user
                            </InertiaLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        modalRef.current.setContent(title, body)
    }


    return (
        <PublicLayout {...props}>
            <div className="auth-block">
                <div className="auth-block-header">
                    <h2>Login</h2>
                </div>
                <FieldError errors={errors[0]} />
                <FormBuilder
                    formData={formFields}
                    {...props}
                    useInertia
                    backEndErrors={props.errors}
                />



            <div className="auth-block-footer">
                <button className="btn-tertiary"  onClick={() => register()}>Register</button>
                {/*<InertiaLink className="text-center mt-4 text-underline" href='#'>Forgot my password</InertiaLink>*/}
            </div>
        </div>

            <ReactModal ref={modalRef} className='ReactModal__Content--Small' closeButton={true}/>

        </PublicLayout>
    );
}

