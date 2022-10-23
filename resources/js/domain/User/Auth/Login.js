import React, { Component } from 'react';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';

import FormBuilder from "../../../components/Form/FormBuilder";
import PublicLayout from "../../../components/Shared/PublicLayout";
import {FieldError} from "../../../components/Form/FormElements/FieldError";

export default function Login(props){

    const { errors } = usePage().props;

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
                />



                <div className="auth-block-footer">
                <InertiaLink href='#'>Forgot my password</InertiaLink>
            </div>
        </div>
     </PublicLayout>
    );
}

